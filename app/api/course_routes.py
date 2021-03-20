from flask import Blueprint, jsonify, json, request, Response
from flask_login import login_required, current_user
from app.models import db, Course, User, User_Course
from app.forms import CourseForm


course_routes = Blueprint('courses', __name__)


def form_errors(validation_errors):

    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@course_routes.route('/')
@login_required
def getAllCourses():
    allCourses = Course.query.all()
    data = [course.to_dict() for course in allCourses]
    res = jsonify(data)
    return res


@course_routes.route('/<int:id>')
@login_required
def course(id):
    course = Course.query.get(id)
    data = course.to_dict()
    res = jsonify(data)
    return res


@course_routes.route('/<int:id>/users', methods=['POST'])
@login_required
def studentEnroll(id):
    course = Course.query.get(id)
    course.users.append(current_user)
    db.session.add(course)
    db.session.commit()
    return course.to_dict()


@course_routes.route('', methods=['POST'])
@login_required
def create_course():
    form = CourseForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = request.get_json()
        course = Course(
            name=form.data['name'],
            description=form.data['description'],
            category=form.data['category'],
        )

        db.session.add(course)
        user = User.query.get(data['user_id'])
        user.courses.append(course)
        db.session.add(user)
        db.session.commit()
    return {'errors': form_errors(form.errors)}




# @course_routes.route('/delete/<int:id>', methods=['DELETE'])
# @login_required
# def delete_course(id):
#     user_course = User_Course.query.filter_by(user_id == current_user.id)
#     deleted_course = [i["course_id"] for i in user_course]
#     course_to_delete = Course.query.get(id)

#     db.session.delete(course_to_delete)
#     db.session.commit()

#     updated_courses = Course.query.filter(all()
#     return Response("{'a':'b'}", status=201, mimetype='application/json')
