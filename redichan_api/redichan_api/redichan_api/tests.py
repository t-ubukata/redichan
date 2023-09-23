from django.db.models.query import RawQuerySet
from django.http import HttpRequest
from django.test import TestCase
from redichan_api.redichan_api import models, serializers, views
from rest_framework.request import Request
from rest_framework.serializers import BaseSerializer, ListSerializer
from rest_framework.utils.serializer_helpers import ReturnList
from unittest.mock import patch, PropertyMock
import traceback


class EnBoardsViewSetTest(TestCase):

  @patch('rest_framework.serializers.BaseSerializer.data')
  def test_get_returns_en_boards(self, mocked_data):
    expected = [
      {'lang': 'en', 'name': 'News', 'path': '/boards/en/news',
       'minutes_to_live': 1440, 'order_in_lang': 1},
      {'lang': 'en', 'name': 'Politics', 'path': '/boards/en/politics',
       'minutes_to_live': 1440, 'order_in_lang': 2},
    ]

    mocked_data = PropertyMock(return_value=expected)

    req = Request(HttpRequest())
    view_set = views.EnBoardsViewSet()
    res = view_set.get(req)

    result = res.data

    self.assertEqual(result, expected)

