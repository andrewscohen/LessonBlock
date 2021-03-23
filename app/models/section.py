from .db import db


class Section(db.Model):
    __tablename__ = 'sections'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    order_num = db.Column(db.Integer, nullable=False)
    course_id = db.Column(db.Integer,
                          db.ForeignKey("courses.id"),
                          nullable=False)

    lessons = db.relationship("Lesson",
                              backref="section",
                              cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "order_num": self.order_num,
            "course_id": self.course_id,

            "lessons": [lesson.to_dict() for lesson in self.lessons],
        }
