from django.contrib.auth.models import User, Group
from rest_framework import serializers
from abapong.leaderboard.models import Player

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'name', 'elo', 'created', 'rfidTag')
    def create(self, validate_data):
        validated_data = Player.objects.create(**validate_data)
        return validated_data
'''class PlayerSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True, allow_blank=False, max_length=30)
    elo = serializers.IntegerField()

    def create(self, validate_data):
        return Player.objects.create(**validate_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
'''