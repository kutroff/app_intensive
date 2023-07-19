from django.db import models


class Author(models.Model):
    name = models.CharField(
        verbose_name='Имя', max_length=100)
    email = models.EmailField(verbose_name='email')
    age = models.PositiveIntegerField(verbose_name='Возраст')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(verbose_name='Тема тега', max_length=50)
    description = models.TextField(verbose_name='Описание тега',)
    num_posts = models.PositiveIntegerField(verbose_name='Количество постов с таким тегом',default=0)

    def __str__(self):
        return self.name
class Post(models.Model):
    author = models.ForeignKey(Author, verbose_name='Автор', on_delete=models.CASCADE)
    title = models.CharField(verbose_name='Заголовок', max_length=200)
    text = models.TextField()
    status = models.CharField(max_length=10, verbose_name='Статус', default='draft')
    tags = models.ManyToManyField(Tag, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

