from django.shortcuts import render
from rest_framework import viewsets
from cyclist.models import User, Profile, Post
from cyclist.serializers import ProfileSerializer, UserSerializer, PostSerializer
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
