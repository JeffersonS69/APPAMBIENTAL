from rest_framework import serializers
from .models import ProtocolAction

class ProtocolActuationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProtocolAction
        fields = '__all__'