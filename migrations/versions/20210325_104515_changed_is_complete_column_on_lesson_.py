"""changed is_complete column on Lesson model to nullable

Revision ID: 65378fb4fff8
Revises: 991d4218408b
Create Date: 2021-03-25 10:45:15.311158

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '65378fb4fff8'
down_revision = '991d4218408b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('lessons', 'is_complete',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('lessons', 'is_complete',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###