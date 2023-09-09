from django.core.serializers import serialize
from redichan_api.redichan_api import models
from rest_framework import viewsets
# from rest_framework import permissions
from rest_framework.response import Response
# from redichan_api.redichan_api.serializers import BoardsSerializer


class EnBoardsViewSet(viewsets.ModelViewSet):

  def list(self, request):
    queryset = models.Boards.get('en')
    # serializer = BoardsSerializer
    res = serialize('json', queryset)
    return Response(res)


class JaBoardsViewSet(viewsets.ModelViewSet):

  def list(self, request):
    queryset = models.Boards.get('ja')
    # serializer = BoardsSerializer
    res = serialize('json', queryset)
    return Response(res)
