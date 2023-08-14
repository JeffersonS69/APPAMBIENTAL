from rest_framework import serializers
from .models import ShelterLocation

class LocationShelterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ShelterLocation
        fields = '__all__'

