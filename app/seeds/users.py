from werkzeug.security import generate_password_hash
from app.models import db, User
from faker import Faker

# fake = Faker()
# Adds a demo user, you can add other users here if you want


def seed_users():
    demo = User(username='Demo',
                email='demo@aa.io',
                password='password',
                is_instructor=True)
    # users.append(demo)

    # for _ in range(10):
    #     user = User(username=fake.user_name(),
    #                 email=fake.email(),
    #                 password=fake.password(length=12),
    #                 is_instructor=fake.boolean(chance_of_getting_true=50))
    #     users.append(user)

    # for user in users:
    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
