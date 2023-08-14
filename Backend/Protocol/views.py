from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ProtocolAction
from .serializers import ProtocolActuationSerializer

# Create your views here.
class ProtocolActionListView(APIView):
    def get(self, request, format=None):
        protocols = ProtocolAction.objects.all()
        serializer = ProtocolActuationSerializer(protocols, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        serializer = ProtocolActuationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProtocolActionDetailView(APIView):
    def get_object(self,pk):
        try:
            return ProtocolAction.objects.get(pk=pk)
        except ProtocolAction.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
        
    def get(self, request, pk, format=None):
        protocols = self.get_object(pk)
        serializer = ProtocolActuationSerializer(protocols)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk, format=None):
        protocols = self.get_object(pk)
        serializer = ProtocolActuationSerializer(protocols, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        protocols = self.get_object(pk)
        protocols.delete()
        return Response("Deleted successfully",status=status.HTTP_204_NO_CONTENT)
        