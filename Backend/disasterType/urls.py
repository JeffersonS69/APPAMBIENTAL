from django.urls import path
from .views import TypeDisasterListView, DisasterTypeDetailView

urlpatterns = [
    path('disastertypes', TypeDisasterListView.as_view()),
    path('disastertype/<int:pk>/', DisasterTypeDetailView.as_view())
]