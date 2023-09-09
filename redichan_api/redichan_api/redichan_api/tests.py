from django.db.models.query import RawQuerySet
from django.test import TestCase
from redichan_api.redichan_api import models
from unittest import mock


class BoardsTests(TestCase):

  def test_select_returns_id_name_path(self):
    raw_result = RawQuerySet('')
    raw_result.id = 1
    raw_result.name = 'News'
    raw_result.path = '/boards/en/news'
    with mock.patch('redichan_api.redichan_api.models.Boards.objects.raw',
                    mock.MagicMock(return_value=raw_result)):
      result = models.Boards.select('en')

      self.assertEqual(result.id, 1)
      self.assertEqual(result.name, 'News')
      self.assertEqual(result.path, '/boards/en/news')
