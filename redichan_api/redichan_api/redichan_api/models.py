from django.db import models
from django.db.models.query import RawQuerySet


class Boards(models.Model):
  id: models.IntegerField = models.IntegerField()
  name: models.CharField = models.CharField(32)
  path: models.CharField = models.CharField(64)

  def select(self, lang: str) -> RawQuerySet:
    q = 'SELECT id, name, path FROM redichan.tables WHERE language = %s ' \
        'ORDER BY order_in_lang'
    return Boards.objects.raw(q, [lang])
