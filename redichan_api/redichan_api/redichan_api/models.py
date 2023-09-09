from django.db import models

class Boards(models.Model):
  id: models.IntegerField = models.IntegerField(primary_key=True)
  name: models.CharField = models.CharField(max_length=32)
  path: models.CharField = models.CharField(max_length=64)

  @staticmethod
  def get(lang):
    q = '''
        SELECT id, name, path FROM redichan.tables
          WHERE language = %s
          ORDER BY order_in_lang
        '''
    return Boards.objects.raw(q, [lang])
