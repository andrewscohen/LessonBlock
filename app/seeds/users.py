from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_users():
    instructor = User(username='instructor',
                      email='instructor@lessonblock.io',
                      password='8b4c7b0a-b365-4420-ae67-8f310c872054',
                      is_instructor=True,
                      profile_img='https://lessonblock.s3.amazonaws.com/Profile_Images/Teacher_Logo.png')
    student = User(username='student',
                   email='student@lessonblock.io',
                   password='719cfc7c-8a95-48ef-91ec-c6425790245f',
                   is_instructor=False,
                   profile_img='https://lessonblock.s3.amazonaws.com/Profile_Images/Student_Logo.png')
    db.session.add(instructor)
    db.session.add(student)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
