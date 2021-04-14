from flask import Blueprint, jsonify, json, request, Response
from flask_login import login_required, current_user
from app.models import db, Course, User, User_Course
from app.forms import CreateCourseForm


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
    print("BACKEND HIT")
    course = Course.query.get(id)
    print("BACKEND COURSE: ", course)
    course.users.append(current_user)
    db.session.add(course)
    db.session.commit()
    return course.to_dict()
