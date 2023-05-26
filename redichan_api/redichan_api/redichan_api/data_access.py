from django.db import connection

def get_tables(self):
    with connection.cursor() as cursor:
        q = "SELECT id, name, path FROM redichan.tables order by id;"
        cursor.execute(q)
        row = cursor.fetchall()

    return row
