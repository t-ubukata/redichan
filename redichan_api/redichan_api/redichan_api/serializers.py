from django.contrib.auth.models import Boards
from rest_framework import serializers


class BoardsSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Boards
    fields: list[str] = ['id', 'name', 'path']
