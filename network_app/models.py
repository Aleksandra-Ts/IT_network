from django.conf import settings
from django.db import models

class User(models.Model):
    surname = models.CharField(max_length = 50)
    name = models.CharField(max_length = 50)
    date = models.DateField()
    number = models.CharField(max_length = 18)
    nik = models.CharField(max_length = 15)
    password = models.CharField(max_length = 20)

    def send(self):
        self.save()

    def __str__(self):
        return self.nik
    
