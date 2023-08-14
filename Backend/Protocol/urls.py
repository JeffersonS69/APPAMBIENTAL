from django.urls import path
from .views import ProtocolActionListView, ProtocolActionDetailView

urlpatterns = [
    path('protocols', ProtocolActionListView.as_view()),
    path('protocol/<int:pk>/', ProtocolActionDetailView.as_view()),
]