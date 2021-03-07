from flask import Blueprint, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from app.models import db, User
from app.forms import login_form
from app.forms import signup_form

user_routes = Blueprint('users', __name__)


@user_routes.route('')
def users():
    users = User.query.all()
    print(users)
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
