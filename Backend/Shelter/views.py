from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ShelterLocation
from .serializers import LocationShelterSerializer

# Create your views here.
class ShelterLocationListView(APIView):
    def get(self, request, format=None):
        locations = ShelterLocation.objects.all()
        serializer = LocationShelterSerializer(locations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        serializer = LocationShelterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RefugeLocationDetailView(APIView):
    def get_object(self, pk):
        try:
            return ShelterLocation.objects.get(pk=pk)
        except ShelterLocation.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
        
    def get(self, request, pk, format=None):
        locations = self.get_object(pk)
        serializer = LocationShelterSerializer(locations)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk, format=None):
        locations = self.get_object(pk)
        serializer = LocationShelterSerializer(locations, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        locations = self.get_object(pk)
        locations.delete()
        return Response("Deleted successfully",status=status.HTTP_204_NO_CONTENT)
    

