from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import render, redirect
from django.views.generic import TemplateView

from .forms import ContactForm
from .models import Contact


class Contactview(TemplateView):
    """ View for contact us
    """
    template_name = 'pages/contact.html'

    def get(self, *args, **kwargs):
        form = ContactForm()
        return render(self.request, self.template_name, {'form': form})

    def post(self, *args, **kwargs):
        form = ContactForm(self.request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            name = form.cleaned_data['name']
            subject_title = form.cleaned_data['subject']

            subject, from_email, to = subject_title, settings.EMAIL_HOST_USER, email
            text_content = 'Thank you for reaching us.'
            html_content = '<p>Hello, thank you for reaching <strong>swiftkind</strong></p>'
            msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
            msg.attach_alternative(html_content, "text/html")
            msg.send()
            form.save()
            return redirect('contact')
        return render(self.request, self.template_name, {'form': form})
