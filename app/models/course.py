from .db import db
from .user_course import User_Course
# from .user import User


class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False)
    description = db.Column(db.String(255), nullable = False)
    category = db.Column(db.String(50), nullable = False)

    users = db.relationship("User",
                                secondary=User_Course,
                                back_populates="courses")
    sections = db.relationship("Section", back_populates="course", cascade="all, delete-orphan")


    def to_dict(self):
        return {
        "id": self.id,
        "name": self.name,
        "description": self.description,
        "category": self.category,
        "sections": [section.to_dict() for section in self.sections],
        }
