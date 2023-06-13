from django.db import models

# Create your models here.

class Weapons(models.Model):
    name = models.CharField(max_length=64)
    type = models.CharField(max_length=32)
