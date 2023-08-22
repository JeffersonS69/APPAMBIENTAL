from django.db import models

# Create your models here.
class Publication(models.Model):
    titulo = models.CharField(max_length=100)
    direccion = models.TextField()
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='publications/', null=True, blank=True, default='publications/Esmeraldas-canton.jpg')
    asistentes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.titulo