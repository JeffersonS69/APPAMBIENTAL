from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import EmergencyContact
from .serializers import ContactEmergencySerializer

# Create your views here.
class ContactEmergencyListView(APIView):
    def get(self, request, format=None):
        contacts = EmergencyContact.objects.all()
        serializer = ContactEmergencySerializer(contacts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        serializer = ContactEmergencySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ContactEmergencyDetailView(APIView):
    def get_object(self, pk):
        try:
            return EmergencyContact.objects.get(pk=pk)
        except EmergencyContact.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
    
    def get(self, request, pk, format=None):
        contact = self.get_object(pk)
        serializer = ContactEmergencySerializer(contact)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk, format=None):
        contact = self.get_object(pk)
        serializer = ContactEmergencySerializer(contact, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        contact = self.get_object(pk)
        contact.delete()
        return Response("Deleted successfully",status=status.HTTP_204_NO_CONTENT)
