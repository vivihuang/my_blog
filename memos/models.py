from django.db import models
from django.utils import timezone


class Memo(models.Model):
    create_date = models.DateTimeField(default=timezone.now)
    active_status = models.BooleanField(default=True)
    content = models.CharField(max_length=256)
