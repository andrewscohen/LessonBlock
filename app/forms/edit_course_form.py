from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, FileField
from wtforms.validators import DataRequired
from app.models import Course


class EditCourseForm(FlaskForm):

    user_id = IntegerField('user_id', validators=[DataRequired()])
    course_id = IntegerField('course_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    course_img = FileField('course_img')
