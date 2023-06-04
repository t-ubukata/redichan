from django.db.models.query import RawQuerySet
from redichan_api.redichan_api import models
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from redichan_api.redichan_api.serializers import BoardsSerializer


class EnBoardsViewSet(viewsets.ModelViewSet):

  def list(self, request):
    queryset: RawQuerySet = models.Boards.select('en')
    serializer: BoardsSerializer = BoardsSerializer
    return Response(serializer.data)


class JaBoardsViewSet(viewsets.ModelViewSet):

  def list(self, request):
    queryset: RawQuerySet = models.Boards.select('ja')
    serializer: BoardsSerializer = BoardsSerializer
    return Response(serializer.data)
