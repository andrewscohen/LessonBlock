from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_users():
    demo = User(username='Demo',
                email='demo@aa.io',
                password='password',
                is_instructor=True,
                profile_img='https://lessonblock.s3.amazonaws.com/Profile_Images/default_profile_img.jpeg')
    db.session.add(demo)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
