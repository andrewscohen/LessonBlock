from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired


class CreateSectionForm(FlaskForm):

    title = StringField('title', validators=[DataRequired()])
    order_num = IntegerField('order_num', validators=[DataRequired()])
    course_id = IntegerField('course_id', validators=[DataRequired()])
