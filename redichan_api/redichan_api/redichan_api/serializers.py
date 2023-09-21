from redichan_api.redichan_api import models
from rest_framework import serializers


class BoardSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = models.Board
    fields = '__all__'

