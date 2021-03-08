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
