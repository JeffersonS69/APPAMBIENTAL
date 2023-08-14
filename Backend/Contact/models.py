from django.db import models

# Create your models here.
class EmergencyContact(models.Model):
    contact_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    direction = models.TextField()

    def __str__(self):
        return self.contact_name