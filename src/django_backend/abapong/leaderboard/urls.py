from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from abapong.leaderboard import views

urlpatterns = [
    path('api/player/', views.PlayerViewSet.as_view()),
    path('api/player/<int:pk>/', views.PlayerDetailViewSet.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)