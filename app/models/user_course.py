from .db import db

User_Course = db.Table('user_courses',
                       db.Column('user_id',
                                 db.Integer,
                                 db.ForeignKey("users.id"),
                                 nullable=False,
                                 primary_key=True),
                       db.Column('course_id',
                                 db.Integer,
                                 db.ForeignKey("courses.id"),
                                 nullable=False,
                                 primary_key=True)
                       )
