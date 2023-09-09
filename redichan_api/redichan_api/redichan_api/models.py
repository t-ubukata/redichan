from django.db import models
from django.db.models.query import RawQuerySet


class Boards(models.Model):
  id: models.IntegerField = models.IntegerField(primary_key=True)
  name: models.CharField = models.CharField(max_length=32)
  path: models.CharField = models.CharField(max_length=64)

  def select(self, lang):
    q = '''
        SELECT id, name, path FROM redichan.tables
          WHERE language = %s
          ORDER BY order_in_lang
        '''
    return Boards.objects.raw(q, [lang])
