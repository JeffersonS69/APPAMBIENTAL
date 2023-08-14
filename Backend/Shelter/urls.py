from django.urls import path
from .views import ShelterLocationListView, RefugeLocationDetailView

urlpatterns = [
    path('locations', ShelterLocationListView.as_view()),
    path('location/<int:pk>/', RefugeLocationDetailView.as_view()),
]