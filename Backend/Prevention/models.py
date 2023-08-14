from django.db import models
from disasterType.models import DisasterType

# Create your models here.
class MeasurePrevention(models.Model):
    topic = models.TextField()
    description = models.TextField()
    resources = models.TextField()
    disaster_type = models.ForeignKey(DisasterType, on_delete=models.CASCADE)


    def __str__(self):
        return self.topic
