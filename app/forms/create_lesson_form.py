from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, BooleanField
from wtforms.validators import DataRequired
from app.models import Lesson


class CreateLessonForm(FlaskForm):

    title = StringField('title', validators=[DataRequired()])
    content_media_type = StringField(
        'content_media_type', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
    is_complete = BooleanField('is_complete')
