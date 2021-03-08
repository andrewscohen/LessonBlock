from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired


class CourseForm(FlaskForm):

    user_id = IntegerField('user_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    category = StringField('category', validators=[DataRequired()])
