from flask import Blueprint, jsonify, json, request, Response
from flask_login import login_required, current_user
from app.models import db, Course, User, Section, Lesson
from app.forms import CreateSectionForm


section_routes = Blueprint('sections', __name__)


def form_errors(validation_errors):

    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

# SECTION CREATE ROUTES START


@section_routes.route('', methods=['POST'])
@login_required
def create_section():
    print("5 BACKEND CREATE SECTION FUNCTION HIT!!!!")
    form = CreateSectionForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = request.get_json()
        section = Section(
            title=form.data['title'],
            order_num=form.data['order_num'],
            course_id=form.data['course_id'],
        )
    db.session.add(section)
    # print("6: BEFORE FORM ADD TO SESSION!!!!!", {section})
    db.session.commit()
    print("7: AFTER FORM ADD TO SESSION!!!!!", section)
    return {'errors': form_errors(form.errors)}
# SECTION CREATE ROUTE END
