from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(max_length=30, unique=True)
    subject = models.CharField(max_length=200)
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField()
	company = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return "{}".format(self.name)
