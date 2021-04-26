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
	('alabama', 'Alabama'),
	('alaska', 'Alaska'),
	('arizona', 'Arizona'),
	('arkansas', 'Arkansas'),
	('california', 'California'),
	('colorado', 'Colorado'),
	('connecticut', 'Connecticut'),
	('washington_dc', 'Washington D.C.'),
	('delaware', 'Delaware'),
	('florida', 'Florida'),
	('georgia', 'Georgia'),
	('hawaii', 'Hawaii'),
	('idaho', 'Idaho'),
	('illinois', 'Illinois'),
	('indiana', 'Indiana'),
	('iowa', 'Iowa'),
	('kansas', 'Kansas'),
	('louisiana', 'Louisiana'),
	('maine', 'Maine'),
	('maryland', 'Maryland'),
	('massachusetts', 'Massachusetts'),
	('michigan', 'Michigan'),
	('minnesota', 'Minnesota'),
	('mississippi', 'Mississippi'),
	('missouri', 'Missouri'),
	('montana', 'Montana'),
	('nebraska', 'Nebraska'),
	('nevada', 'Nevada'),
	('new_hampshire', 'New Hampshire'),
	('new_jersey', 'New Jersey'),
	('new_mexico', 'New Mexico'),
	('new_york', 'New York'),
	('north_carolina', 'North Carolina'),
	('north_dakota', 'North Dakota'),
	('ohio', 'Ohio'),
	('oklahoma', 'Oklahoma'),
	('oregon', 'Oregon'),
	('pennsylvania', 'Pennsylvania'),
	('rhode_island', 'Rhode Island'),
	('south_carolina', 'South Carolina'),
	('south_dakota', 'South Dakota'),
	('tennessee', 'Tennessee'),
	('texas', 'Texas'),
	('utah', 'Utah'),
	('vermont', 'Vermont'),
	('virginia', 'Virginia'),
	('washington', 'Washington'),
	('wisconsin', 'Wisconsin'),
	('wyoming', 'Wyoming')
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
    img = models.URLField(default='http://assets.stickpng.com/images/596ce35fed07ad6118f998e8.png')
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=40, choices=STATE_CHOICES)
    intersection1 = models.CharField(max_length=255)
    intersection2 = models.CharField(max_length=255)
    created_date = models.DateTimeField(auto_now_add=True, blank=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='posts')
    

    def __str__(self):
        return f"{self.header} {self.type}"