from django.db import models


class Memo(models.Model):
    create_date = models.DateTimeField('date created')
    status = models.CharField(max_length=64)
    content = models.CharField(max_length=256)
