from flask import Blueprint, jsonify, json, request, Response
from flask_login import login_required
from app.models import db, Course, User
from app.forms import CourseForm


course_routes = Blueprint('courses', __name__)


@course_routes.route('/<int:id>')
@login_required
def course(id):
    course = Course.query.get(id)
    data = course.to_dict()
    res = jsonify(data)
    return res


@folder_routes.route('', methods=['POST'])
@login_required
def create_course():
    form = CourseForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        course = Course(
            user_id=int(form.data['user_id']),
            name=form.data['name'],
            description=form.data['description'],
            category=form.data['category'],
        )
        db.session.add(course)
        db.session.commit()
        return course.to_dict()
    return {'errors': form_errors(form.errors)}


# @folder_routes.route('/<int:id>', methods=['DELETE', 'PUT', 'GET'])
# @login_required
# def update_course(id):
#     course = Course.query.get(id)

#     if request.method == 'DELETE':
#         db.session.delete(course)
#         db.session.commit()

#     elif request.method == 'PUT':
#         form = EditFolderForm()
#         form["csrf_token"].data = request.cookies["csrf_token"]

#         if form.validate_on_submit():
#             course.name = form.data["name"]
#             course.description = form.data["description"]
#             course.category = form.data["category"]
#             db.session.commit()

#     elif request.method == 'GET':
#         return course.to_dict()

#     user_courses = Course.query.filter_by(user_id=current_user.id)

#     return {"courses": [course.to_dict() for course in user_courses]}
