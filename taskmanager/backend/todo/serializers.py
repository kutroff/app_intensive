from rest_framework import serializers
from .models import Author
from .models import Tag
from .models import Post
class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('name', 'email', 'age', 'created_at')
class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('name', 'description', 'num_posts')
class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('author', 'title', 'text', 'status', 'tags', 'created_at')
