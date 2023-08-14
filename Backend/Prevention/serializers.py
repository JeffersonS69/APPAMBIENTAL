from rest_framework import serializers
from .models import MeasurePrevention

class MeasurePreventionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeasurePrevention
        fields = '__all__'
