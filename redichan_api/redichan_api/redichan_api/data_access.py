from django.db import connection

def get_tables(self, lang: string):
    with connection.cursor() as cursor:
        q = 'SELECT id, name, path FROM redichan.tables WHERE language = %s ' \
        'ORDER BY order_in_lang'
        cursor.execute(q, [lang])
        row = cursor.fetchall()

    return row
