from django.db.models.query import RawQuerySet
from django.test import TestCase
from redichan_api.redichan_api import models
from unittest import mock


class BoardsTests(TestCase):

  raw_result = RawQuerySet('')
  raw_result._result_cache = {id: 1, name: 'News', path: '/boards/en/news'}

  @mock.patch('models.Boards.objects.raw',
              mock.MagicMock(return_value=raw_result))
  def test_select_returns_id_name_path(self):
    b = models.Boards()
    result = b.select('en')
    print(result)
