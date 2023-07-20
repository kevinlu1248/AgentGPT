from django.db import models

class Agent(models.Model):
    # Other fields...
    avatar = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.name