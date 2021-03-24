from flask import Blueprint, jsonify, json, request, Response
from flask_login import login_required, current_user
from app.models import db, Course, User, Section, Lesson
from app.forms import CreateSectionForm


section_routes = Blueprint('sections', __name__)
