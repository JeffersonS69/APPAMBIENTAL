from django.db import models
from disasterType.models import DisasterType

# Create your models here.
class ProtocolAction(models.Model):
    topic = models.CharField(max_length=200)
    steps_before = models.TextField()
    steps_during = models.TextField()
    steps_after = models.TextField()
    responsibilities = models.TextField()
    disaster_type = models.ForeignKey(DisasterType, on_delete=models.CASCADE)

    def __str__(self):
        return self.topic
