#from django.core import serializers
from redichan_api.redichan_api import models, serializers
from rest_framework import viewsets
from rest_framework.response import Response


class EnBoardsViewSet(viewsets.ModelViewSet):

  def get(self, request):
    raw_query_set = models.Board.get('en')
    boards_serializer = serializers.BoardSerializer(raw_query_set, many=True)
    return Response(boards_serializer.data)


class JaBoardsViewSet(viewsets.ModelViewSet):

  def get(self, request):
    raw_query_set = models.Board.get('ja')
    boards_serializer = serializers.BoardSerializer(raw_query_set, many=True)
    return Response(boards_serializer.data)

