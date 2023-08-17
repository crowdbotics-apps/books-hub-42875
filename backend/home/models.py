from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class PopularBooks(models.Model):
    title = models.CharField(max_length=256)
    auther_name = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    description = models.TextField()
    publisher_name = models.CharField(max_length=256)
    published_date = models.DateField()
    reviews = models.IntegerField()
    image = models.ImageField(null=True, blank=True)

    def __str__(self) -> str:
        return self.title
