import re
import boto3
import botocore
from flask import Blueprint, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User, Course
from app.config import Config
from app.helpers import upload_file_to_s3
from app.forms import login_form
from app.forms import signup_form
from werkzeug.utils import secure_filename
from app.api.auth_routes import validation_errors_to_error_messages


user_routes = Blueprint('users', __name__)


@user_routes.route('')
def users():
    users = User.query.all()
    print(users)
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
    print("CURRENT_USER COURSES!!!!:    ", current_user.courses)
    return {"courses": courses}


# @user_routes.route('/')
# @user_routes.route('/<int:id>', methods=["POST"])
# @login_required
# def add_user_profile_img(id):
#     user = User.query.get(id)
#     form = SignUpForm()
#     form["csrf_token"].data = request.cookies["csrf_token"]

#     image_error = []
#     image = request.files.get("image", None)

#     if image is not None:
#         image.filename = secure_filename(image.filename)
#         pattern = re.compile(
#             ".*(apng|avif|jpe?g|png|svg|webp)$", re.IGNORECASE)
#         is_image = bool(pattern.match(image.mimetype))
#         if not is_image:
#             image_error.append(
#                 "Upload must be an image (apng, avif, jpeg/jpg, png, svg, webp)."
#             )

#     if form.validate_on_submit() and not image_error:

#         url = ''
#         if request.files:
#             url = upload_file_to_s3(request.files['image'], Config.S3_BUCKET)

#         new_profile_img = User(
#             profile_img=url or "https://lessonblock.s3.amazonaws.com/Profile_Images/default_profile_img.jpeg"
#         )
#         db.session.add(new_profile_img)
#         db.session.commit()
#         return new_profile_img.to_dict()

#     errors = validation_errors_to_error_messages(form.errors)
#     errors += image_error

#     return {"errors": errors}


@user_routes.route('/me/courses/<int:id>/current')
@login_required
def userCourse(id):
    oneCourse = Course.query.filter(Course.id == id).first()
    return oneCourse.to_dict()
