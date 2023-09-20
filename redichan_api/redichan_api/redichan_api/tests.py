from django.db.models.query import RawQuerySet
from django.http import HttpRequest
from django.test import TestCase
from redichan_api.redichan_api import models, serializers, views
from rest_framework.request import Request
from rest_framework.serializers import BaseSerializer, ListSerializer
from rest_framework.utils.serializer_helpers import ReturnList
from unittest.mock import patch, PropertyMock
import traceback


class BoardsTests(TestCase):

  def test_get_returns_id_name_path(self):
    q = '''
        SELECT board_id, name, path FROM redichan.boards
          WHERE language = %s
          ORDER BY order_in_lang
        '''

    # Django doesn't execute a query here, just holds a raw query string
    # in a RawQuery object.
    result = models.Boards.get('en')

    self.assertEqual(result.raw_query, q)


class BoardSerializerTests(TestCase):

  def test_constructor_returns_list_serializer_object(self):
    raw_query_set = models.Boards.get('en')
    # When many=True is specified, the constructor returns
    # a ListSerializer object.
    boards_serializer = serializers.BoardsSerializer(raw_query_set, many=True)

    self.assertIsInstance(boards_serializer, ListSerializer)


class EnBoardsViewSetTest(TestCase):

  @patch('rest_framework.serializers.BaseSerializer.data')
  def test_get_returns_en_boards(self, mocked_data):
    # expected = [
    #   {'lang': 'en', 'name': 'News', 'path': '/boards/en/news',
    #    'minutes_to_live': 1440, 'order_in_lang': 1},
    #   {'lang': 'en', 'name': 'Politics', 'path': '/boards/en/politics',
    #    'minutes_to_live': 1440, 'order_in_lang': 2},
    # ]

    expected = []

    mocked_data = PropertyMock(return_value=[])

    req = Request(HttpRequest())
    view_set = views.EnBoardsViewSet()
    res = view_set.get(req)

    result = res.data

    self.assertEqual(result, expected)

