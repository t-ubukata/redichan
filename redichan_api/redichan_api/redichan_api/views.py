from django.db.models.query import RawQuerySet
from django.contrib.auth.models import Boards
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import serializer
from rest_framework.response import Response
from redichan_api.redichan_api.serializers import BoardsSerializer


class EnBoardsViewSet(viewsets.ModelViewSet):

  def list(self, request):
    queryset: RawQuerySet = Boards.select('en')
    serializer_class = BoardsSerializer
    return Response(serializer.data)


class JaBoardsViewSet(viewsets.ModelViewSet):

  def list(self, request):
    queryset: RawQuerySet = Boards.select('ja')
    serializer_class = BoardsSerializer
    return Response(serializer.data)
