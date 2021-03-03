from .db import db


class Section(db.Model):
    __tablename__ = 'sections'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(50), nullable = False)
    is_complete = db.Column(db.Boolean, nullable = False)
    course_id = db.Column(db.Integer, nullable = False)

    lessons = db.relationship("Lesson", back_populates="section", cascade="all, delete-orphan")
    quizzes = db.relationship("Quiz", back_populates="section", cascade="all, delete-orphan")
    course = db.relationship('Course', back_populates="sections")

    def to_dict(self):
        return {
        "id": self.id,
        "title": self.title,
        "course_id": self.course_id,
        "quizzes": [quiz.to_dict() for quiz in self.quizzes],
        "lessons": [lesson.to_dict() for lesson in self.lessons],
        }
