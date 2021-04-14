"""added instructor_id column to course table

Revision ID: 93299f426476
Revises: 65378fb4fff8
Create Date: 2021-04-14 07:21:29.820273

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '93299f426476'
down_revision = '65378fb4fff8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('courses', sa.Column('instructor_id', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('courses', 'instructor_id')
    # ### end Alembic commands ###
