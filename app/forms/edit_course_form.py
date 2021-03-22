from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired


class EditCourseForm(FlaskForm):

    user_id = IntegerField('user_id', validators=[DataRequired()])
    course_id = IntegerField('course_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
    course_img = StringField('course_img')
