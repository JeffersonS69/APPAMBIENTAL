from rest_framework import serializers
from .models import DisasterType

class DisasterTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisasterType
        fields = '__all__'