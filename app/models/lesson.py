from .db import db


class Lesson(db.Model):
    __tablename__ = 'lessons'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(50), nullable = False)
    content_media_type = db.Column(db.String(50), nullable = False)
    content = db.Column(db.Text, nullable = False)
    is_complete = db.Column(db.Boolean, nullable = False)
    section_id = db.Column(db.Integer, nullable = False)

    section = db.relationship("Section", back_populates="lessons", cascade="all, delete-orphan")

    def to_dict(self):
        return {
        "id": self.id,
        "title": self.title,
        "content_media_type": self.content_media_type,
        "content": self.content,
        "section_id": self.section,
        }
