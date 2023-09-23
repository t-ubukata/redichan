from django.db import models

# Converts snake_case to camelCase here because clients use camelCase.

class Board(models.Model):
  boardID: models.IntegerField = models.IntegerField(primary_key=True)
  name: models.CharField = models.CharField(max_length=32)
  path: models.CharField = models.CharField(max_length=64)

  @staticmethod
  def get(lang):
    q = '''
        SELECT board_id AS boardID, name, path FROM redichan.boards
          WHERE language = %s
          ORDER BY order_in_lang
        '''
    return Board.objects.raw(q, [lang])
