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


@course_routes.route('/<int:id>')
@login_required
def course(id):
    course = Course.query.get(id)
    data = course.to_dict()
    res = jsonify(data)
    return res


@course_routes.route('', methods=['POST'])
@login_required
def create_course():
    form = CourseForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = request.get_json()
        user = data['user_id']
        print("REQUESTED USER!: ", user)

        course = Course(
            name=form.data['name'],
            description=form.data['description'],
            category=form.data['category'],
        )

        db.session.add(course)
        db.session.commit()
        course_dict = course.to_dict()

        course.users.append(course_dict)

        db.session.add(course)
        db.session.commit()
        return course.to_dict()
    return {'errors': form_errors(form.errors)}

    # User.query.\
    #     filter_by(id=user_id).\
    #     join(Course).\
    #     filter_by(user_id=course_id).\
    #     first()

    # user = User.query.all()
    # print("THIS IS THE QUERY USER: ", user)
