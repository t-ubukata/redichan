from django.db.models.query import RawQuerySet
from django.contrib.auth.models import Boards
from rest_framework import viewsets
from rest_framework import permissions
from redichan_api.redichan_api.serializers import BoardsSerializer


class EnBoardsViewSet(viewsets.ModelViewSet):
    queryset: RawQuerySet = Boards.select('en')
    serializer_class = BoardsSerializer

class JaBoardsViewSet(viewsets.ModelViewSet):
    queryset: RawQuerySet = Boards.select('ja')
    serializer_class = BoardsSerializer

