from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import MeasurePrevention
from .serializers import MeasurePreventionSerializer

# Create your views here.
class PreventionMeasuresListView(APIView):
    def get(self, request, format=None):
        measures = MeasurePrevention.objects.all()
        serializer = MeasurePreventionSerializer(measures, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        serializer = MeasurePreventionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class PreventionMeasuresDetailView(APIView):
    def get_object(self,pk):
        try:
            return MeasurePrevention.objects.get(pk=pk)
        except MeasurePrevention.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND
    
    def get(self,resquest, pk, format=None):
        measures = self.get_object(pk)
        serializer = MeasurePreventionSerializer(measures)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    def put(self,resquest, pk, format=None):
        measures = self.get_object(pk)
        serializer = MeasurePreventionSerializer(measures, data=resquest.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        measures = self.get_object(pk)
        measures.delete()
        return Response("Deleted successfully",status=status.HTTP_204_NO_CONTENT)