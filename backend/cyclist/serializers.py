from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from cyclist.models import User, Post, Profile


# serializer for posts
class PostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id','header', 'type', 'content', 'img', 'latitude', 'longitude', 'post_city', 'post_state','created_date', 'profile', 'user']

    def get_user(self, obj):
        return obj.profile.user.id


class ProfileSerializer(serializers.ModelSerializer):

    posts = PostSerializer(many=True)
    class Meta:
        model = Profile
        fields = ['id','prof_pic','bio', 'state', 'city', 'birth_date', 'posts']
        
 
# Serializes current user
class UserSerializer(serializers.ModelSerializer):
    
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ['id','username', 'profile']

# Serializes new user sign ups that responds with the new user's information including a new token.
class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ['token', 'username', 'password']




