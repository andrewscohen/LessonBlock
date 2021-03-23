from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired
from app.models import Section


class CreateSectionForm(FlaskForm):

    title = StringField('title', validators=[DataRequired()])
    order_num = IntegerField('order_num', validators=[DataRequired()])
