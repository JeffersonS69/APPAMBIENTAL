from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import DisasterType
from .serializers import DisasterTypeSerializer

# Create your views here.
class TypeDisasterListView(APIView):
    def get(self, request, format=None):
        disaster_types = DisasterType.objects.all()
        serializer = DisasterTypeSerializer(disaster_types, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = DisasterTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DisasterTypeDetailView(APIView):
    def get_object(self,pk):
        try:
            return DisasterType.objects.get(pk=pk)
        except DisasterType.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
        
    def get(self, request, pk,format=None):
        disaster_types= self.get_object(pk)
        serializer = DisasterTypeSerializer(disaster_types)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    
    def put(self, request, pk,format=None):
        disaster_types = self.get_object(pk)
        serializer = DisasterTypeSerializer(disaster_types, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk,format=None):
        disaster_types = self.get_object(pk)
        disaster_types.delete()
        return Response("Deleted successfully",status=status.HTTP_204_NO_CONTENT)

