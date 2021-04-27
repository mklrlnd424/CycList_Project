from django.db import models
from django.contrib.auth.models import User
# from django.db.models.signals import post_save
# from django.dispatch import receiver

# Create your models here.

POST_TYPE_CHOICES = (
    ('route', 'Trail Route'),
    ('hazardous', 'Hazardous Conditions'),
    ('other', 'Other') 
)

STATE_CHOICES = [
	('Alabama', 'Alabama'),
	('Alaska', 'Alaska'),
	('Arizona', 'Arizona'),
	('Arkansas', 'Arkansas'),
	('California', 'California'),
	('Colorado', 'Colorado'),
	('Connecticut', 'Connecticut'),
	('Washington_dc', 'Washington D.C.'),
	('Delaware', 'Delaware'),
	('Florida', 'Florida'),
	('Georgia', 'Georgia'),
	('Hawaii', 'Hawaii'),
	('Idaho', 'Idaho'),
	('Illinois', 'Illinois'),
	('Indiana', 'Indiana'),
	('Iowa', 'Iowa'),
	('Kansas', 'Kansas'),
	('Louisiana', 'Louisiana'),
	('Maine', 'Maine'),
	('Maryland', 'Maryland'),
	('Massachusetts', 'Massachusetts'),
	('Michigan', 'Michigan'),
	('Minnesota', 'Minnesota'),
	('Mississippi', 'Mississippi'),
	('Missouri', 'Missouri'),
	('Montana', 'Montana'),
	('Nebraska', 'Nebraska'),
	('Nevada', 'Nevada'),
	('New_hampshire', 'New Hampshire'),
	('New_jersey', 'New Jersey'),
	('New_mexico', 'New Mexico'),
	('New_york', 'New York'),
	('North_carolina', 'North Carolina'),
	('North_dakota', 'North Dakota'),
	('Ohio', 'Ohio'),
	('Oklahoma', 'Oklahoma'),
	('Oregon', 'Oregon'),
	('Pennsylvania', 'Pennsylvania'),
	('Rhode_island', 'Rhode Island'),
	('South_carolina', 'South Carolina'),
	('South_dakota', 'South Dakota'),
	('Tennessee', 'Tennessee'),
	('Texas', 'Texas'),
	('Utah', 'Utah'),
	('Vermont', 'Vermont'),
	('Virginia', 'Virginia'),
	('Washington', 'Washington'),
	('Wisconsin', 'Wisconsin'),
	('Wyoming', 'Wyoming')
]

# django signals to create a default profile if needed for admin users 
# extends user model
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    prof_pic = models.URLField(default='https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg')
    bio = models.TextField(max_length=500, blank=True)
    state = models.CharField(max_length=40, choices=STATE_CHOICES)
    city = models.CharField(max_length=100)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} {self.city} {self.state}"

# post class, fk profile 
class Post(models.Model):
    header = models.CharField(max_length=255)
    type = models.CharField(max_length=40, choices=POST_TYPE_CHOICES)
    content = models.TextField()
    img = models.URLField(default='https://snappygoat.com/b/7c1ad008542cf263b87b8fd6f4972f1b1e7a9995')
    latitude = models.DecimalField(max_digits=15, decimal_places=10, default=41.8789)
    longitude = models.DecimalField(max_digits=15, decimal_places=10, default=87.6359)
    post_city = models.CharField(max_length=100, blank=True)
    post_state = models.CharField(max_length=40, choices=STATE_CHOICES)
    created_date = models.DateTimeField(auto_now_add=True, blank=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='posts')
    

    def __str__(self):
        return f"{self.header} {self.type}"