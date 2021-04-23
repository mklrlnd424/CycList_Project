from django.contrib import admin
from django.urls import path, include 
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter
from cyclist.views import UserViewSet, PostViewSet

urlpatterns = [
    path('login', obtain_jwt_token),
]

router = DefaultRouter()
router.register(r'users', UserViewSet, basename="user")
router.register(r'posts', PostViewSet, basename="post")

urlpatterns += router.urls