# from django.shortcuts import render

# Create your views here.

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from abapong.leaderboard.serializers import UserSerializer, GroupSerializer, PlayerSerializer
from abapong.leaderboard.models import Player


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
    queryset = Player.objects.all().order_by('-created')
    serializer_class = PlayerSerializer
