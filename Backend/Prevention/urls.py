from django.urls import path
from .views import PreventionMeasuresListView, PreventionMeasuresDetailView

urlpatterns = [
    path('measures', PreventionMeasuresListView.as_view()),
    path('measure/<int:pk>/', PreventionMeasuresDetailView.as_view())
]