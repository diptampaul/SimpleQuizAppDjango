# Generated by Django 3.1.1 on 2020-11-25 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('examSys', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='questions',
            name='prove',
            field=models.URLField(default='rifinder.com'),
        ),
    ]
