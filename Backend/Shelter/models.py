from django.db import models

# Create your models here.
class ShelterLocation(models.Model):
    name = models.CharField(max_length=100)
    direction = models.TextField()
    shelter_capacity = models.PositiveIntegerField()
    length = models.DecimalField(max_digits=10, decimal_places=6)
    latitude = models.DecimalField(max_digits=10, decimal_places=6)

    def __str__(self):
        return self.name
    