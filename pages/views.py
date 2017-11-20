from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.http import JsonResponse
from django.views.generic.edit import CreateView

from .forms import ContactForm
from .models import Contact


class AjaxableResponseMixin(object):
    """
    Mixin to add AJAX support to a form.
    Must be used with an object-based FormView (e.g. CreateView)
    """
    def form_invalid(self, form):
        response = super(AjaxableResponseMixin, self).form_invalid(form)
        if self.request.is_ajax():
            return JsonResponse(form.errors, status=400)
        else:
            return response

    def form_valid(self, form):
        response = super(AjaxableResponseMixin, self).form_valid(form)
        if self.request.is_ajax():
            data = {
                'pk': self.object.pk,
            }
            return JsonResponse(data)
        else:
            return response


class Contactview(AjaxableResponseMixin, CreateView):
    """ View for contact us
    """
    template_name = 'pages/contact.html'
    model = Contact
    fields = ['name', 'email', 'subject', 'budget', 'date', 'company']

    def get_success_url(self):
        return reverse('contact')
        