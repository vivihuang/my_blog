# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-31 07:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Memo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_date', models.DateTimeField(verbose_name='date created')),
                ('status', models.CharField(max_length=64)),
                ('content', models.CharField(max_length=256)),
            ],
        ),
    ]
