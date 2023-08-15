# Generated by Django 3.2.2 on 2023-08-14 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ShelterLocation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('direction', models.TextField()),
                ('shelter_capacity', models.PositiveIntegerField()),
                ('length', models.DecimalField(decimal_places=6, max_digits=10)),
                ('latitude', models.DecimalField(decimal_places=6, max_digits=10)),
            ],
        ),
    ]