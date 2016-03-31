from django.db import models


class Memo(models.Model):
    create_date = models.DateTimeField('date created')
    active_status = models.BooleanField(default=True)
    content = models.CharField(max_length=256)
