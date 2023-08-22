from django.urls import path
from .views import PublicacionListView, PublicacionDetailView

urlpatterns = [
    path('publicaciones', PublicacionListView.as_view(), name='publicacion-list'),
    path('publicacion/<int:pk>/', PublicacionDetailView.as_view(), name='publicacion-detail'),
]