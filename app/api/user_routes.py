import re
import boto3
import botocore


from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User, Course, User_Course, Section, Lesson
from app.config import Config

from app.forms import login_form
from app.forms import signup_form
from app.forms import CreateCourseForm
from app.forms import EditCourseForm
from app.forms import CreateSectionForm
from app.forms import EditSectionForm
from app.forms import CreateLessonForm
from app.aws_s3 import *
from werkzeug.utils import secure_filename
from app.api.auth_routes import validation_errors_to_error_messages


user_routes = Blueprint('users', __name__)


def form_errors(validation_errors):

    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

# USER ROUTES START


@user_routes.route('')
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
# USER ROUTES END


# COURSE ROUTES START
@user_routes.route('/me/courses')
@login_required
def userMe():
    courses = [course.to_dict()
               for course in current_user.courses]
    return {"courses": courses}


@user_routes.route(
    '/me/courses',
    methods=['POST'])
@login_required
def create_course():
    form = CreateCourseForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = request.get_json()
        course = Course(
            name=form.data['name'],
            description=form.data['description'],
            category=form.data['category'],
            instructor_id=current_user.id,
        )

    db.session.add(course)
    current_user.courses.append(course)
    db.session.add(current_user)
    db.session.commit()
    return {'errors': form_errors(form.errors)}


@user_routes.route(
    '/me/courses/<int:id>',
    methods=['DELETE', 'PUT', 'GET'])
@login_required
def update_course(id):
    course = Course.query.get(id)

    if request.method == 'DELETE':
        db.session.delete(course)
        db.session.commit()

    elif request.method == 'PUT':
        # form = EditCourseForm()
        # form["csrf_token"].data = request.cookies["csrf_token"]
        if "course_img" not in request.files:
            print("No user_file key in request.files")
            return "No user_file key in request.files"

        file = request.files["course_img"]

        if file:
            file_url = upload_file_to_s3(file, Config.S3_BUCKET)
            course.name = request.form.get('name')
            course.description = request.form.get('description')
            course.category = request.form.get('category')
            course.course_img = file_url
            # db.session.add(course)
            db.session.commit()
            return course.to_dict()
        else:
            return "No File Attached!"

    elif request.method == 'GET':
        return course.to_dict()

    allCourses = Course.query.all()
    data = [course.to_dict() for course in allCourses]
    return {"courses": data}
# COURSE ROUTES END


# SECTION CREATE ROUTES START
@ user_routes.route(
    '/me/courses/<int:course_id>/sections',
    methods=['POST'])
@ login_required
def create_section(course_id):
    form = CreateSectionForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = request.get_json()
        new_section = Section(
            title=form.data['title'],
            order_num=form.data['order_num'],
            course_id=course_id
        )

        db.session.add(new_section)
        db.session.commit()
        return new_section.to_dict()
    return {'errors': form_errors(form.errors)}
# SECTION CREATE ROUTE END

# SECTION DELETE, PUT, GET ROUTE START


@user_routes.route(
    '/me/courses/<int:course_id>/sections/<int:id>',
    methods=['DELETE', 'PUT', 'GET'])
@login_required
def update_section(course_id, id):
    section = Section.query.get(id)

    if request.method == 'DELETE':
        db.session.delete(section)
        db.session.commit()

    elif request.method == 'PUT':
        form = EditSectionForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if form.validate_on_submit():
            section.title = form.data["title"],
            section.order_num = form.data["order_num"],
            course_id = course_id,
            id = id

            db.session.commit()

    elif request.method == 'GET':
        return section.to_dict()

    allSections = Section.query.all()
    data = [section.to_dict() for section in allSections]
    return {"sections": data}
# SECTION ROUTES END

# LESSON ROUTES START


@user_routes.route(
    '/me/courses/<int:course_id>/sections/<int:section_id>/lessons',
    methods=['POST'])
@login_required
def create_lesson(course_id, section_id):
    form = CreateLessonForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = request.get_json()
        new_lesson = Lesson(
            title=form.data['title'],
            content_media_type=form.data['content_media_type'],
            content=form.data['content'],
            is_complete=form.data['is_complete'],
            section_id=section_id
        )
        db.session.add(new_lesson)
        db.session.commit()
        return new_lesson.to_dict()
    return {'errors': form_errors(form.errors)}
# LESSON CREATE ROUTE END

# LESSON DELETE, PUT, GET ROUTE START


@user_routes.route(
    '/me/courses/<int:course_id>/sections/<int:section_id>/lessons/<int:id>',
    methods=['DELETE', 'PUT', 'GET'])
@login_required
def update_lesson(course_id, section_id, id):
    section = Section.query.get(section_id)
    lesson = Lesson.query.get(id)

    if request.method == 'DELETE':
        db.session.delete(lesson)
        db.session.commit()

    elif request.method == 'PUT':
        form = EditLessonForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if form.validate_on_submit():
            form.populate_obj(lesson)
            db.session.commit()
            return lesson.to_dict()

        # section.title = form.data["title"],
        # section.order_num = form.data["order_num"],
        # course_id = course_id,
        # id = id

    elif request.method == 'GET':
        return lesson.to_dict()

    allLessons = Lesson.query.all()
    data = [lesson.to_dict() for lesson in allLessons]
    return {"lessons": data}

# LESSON ROUTES END
