# Generated by Django 3.2 on 2021-04-27 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cyclist', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_city',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]