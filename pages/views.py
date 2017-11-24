from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.views.generic.edit import CreateView

from .mixins import JSONResponseMixin
from .forms import ContactForm
from .models import Contact


class Contactview(JSONResponseMixin, CreateView):
    """ View for contact us
    """
    template_name = 'pages/contact.html'
    model = Contact
    fields = ['name', 'email', 'subject', 'budget', 'date', 'company']

    def get_success_url(self):
        return reverse('contact')
    