import re
import boto3
import botocore
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User, Course
from app.config import Config
from app.helpers import upload_file_to_s3
from app.forms import login_form
from app.forms import signup_form
from app.forms import EditCourseForm
from werkzeug.utils import secure_filename
from app.api.auth_routes import validation_errors_to_error_messages


user_routes = Blueprint('users', __name__)


@user_routes.route('')
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/me/courses')
@login_required
def userMe():
    courses = [course.to_dict()
               for course in current_user.courses]
    return {"courses": courses}


@user_routes.route('/me/courses/<int:id>',
                   methods=['DELETE', 'PUT', 'GET'])
@login_required
def update_course(id):
    course = Course.query.get(id)

    if request.method == 'DELETE':
        db.session.delete(course)
        db.session.commit()

    elif request.method == 'PUT':
        form = EditCourseForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if form.validate_on_submit():
            course.name = form.data["name"],
            course.category = form.data["category"],
            course.description = form.data["description"],
            course.course_img = form.data["course_img"],

            db.session.commit()

    elif request.method == 'GET':
        return course.to_dict()

    allCourses = Course.query.all()
    data = [course.to_dict() for course in allCourses]
    return {"courses": data}
