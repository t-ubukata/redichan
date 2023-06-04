from redichan_api.redichan_api import models
from rest_framework import serializers


class BoardsSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = models.Boards
    fields: list[str] = ['id', 'name', 'path']
