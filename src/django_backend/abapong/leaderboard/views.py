# from django.shortcuts import render

# Create your views here.

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import generics
from abapong.leaderboard.serializers import UserSerializer, GroupSerializer, PlayerSerializer
from abapong.leaderboard.models import Player

from rest_framework.decorators import action
from rest_framework.response import Response
import requests

# from rest_framework.viewsets import ModelViewSet, ViewSet
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

    @action(detail=True, methods=['GET'])
    def player_info(self, request, pk=None):
        player = self.get_object()
        r = requests.get('https://lego.abakus.no/api/v1/users/'+ player.name)
        r = r.json()
        print(r)
        return Response(r)



class PlayerDetailViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

