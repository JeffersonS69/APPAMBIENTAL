from django.urls import path
from .views import ContactEmergencyListView, ContactEmergencyDetailView

urlpatterns = [
    path('contacts', ContactEmergencyListView.as_view()),
    path('contact/<int:pk>/', ContactEmergencyDetailView.as_view()),
]
