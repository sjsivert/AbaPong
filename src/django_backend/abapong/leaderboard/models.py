from django.db import models

# Create your models here.

class Player(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=20, blank=False)
    elo = models.IntegerField(default=1500)
    rfidTag = models.CharField(blank=False, max_length=30)

    class Meta:
        ordering = ('created',)