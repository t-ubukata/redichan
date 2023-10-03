from django.db import models

# Converts snake_case to camelCase here because clients use camelCase.
# Time zone setting is UTC.
# The default date time format is ISO 8601 with the time zone designator Z.

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

class Thread(models.Model):
  threadID = models.IntegerField(primary_key=True)
  firstComment = models.CharField()
  attachmentPath = models.CharField()
  postNumber = models.IntegerField()
  createdAtUTC = models.DateTimeField()

  @staticmethod
  def get(thread_id):
    q = '''
        SELECT thread_id AS threadID, comment AS firstComment,
          '' AS attachmentPath,
          (SELECT COUNT(*) FROM redichan.threads WHERE thread_id = %s)
            AS postNumber,
            created_at_utc AS createdAtUTC
          FROM redichan.threads
          JOIN redichan.posts
          ON redichan.threads.thread_id = redichan.posts.thread_id
          WHERE thread_id = %s AND status_id = 0 AND number = 1
          ORDER BY thread_id DESC
        '''
    return Board.objects.raw(q, [lang])
