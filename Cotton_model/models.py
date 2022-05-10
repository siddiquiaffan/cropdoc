from os import lseek
from django.db import models

# Create your models here.

class Plants(models.Model):
    category = models.CharField(max_length=100, null=False, blank=False)
    image = models.ImageField(null=False, blank=False)
    result = models.IntegerField(null=True,blank=True,default= -1)
    date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.category
    
