from django.db import models
from django.conf import settings
from django.core.mail import EmailMultiAlternatives


class Contact(models.Model):
    name = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(max_length=30, unique=True)
    subject = models.CharField(max_length=200)
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField()
    company = models.CharField(max_length=50, blank=True, null=True)
    sent = models.BooleanField(default=False, blank=True)

    def __str__(self):
        return "{}".format(self.name)

    def send_email(self):
        if not self.sent:
            subject, from_email, to = self.subject, settings.EMAIL_HOST_USER, self.email
            msg = EmailMultiAlternatives(subject, settings.EMAIL_TEXT, from_email, [to])
            msg.attach_alternative(settings.EMAIL_HTML, "text/html")
            msg.send()
            self.sent = True
            self.save()
