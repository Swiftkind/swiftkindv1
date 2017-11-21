from django import forms

from .models import Contact


class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    subject = forms.CharField(max_length=100)
    budget = forms.DecimalField(max_digits=10, decimal_places=2)
    date = forms.DateField()
    company = forms.CharField(max_length=50)

    def send_email(self):
        email = self.cleaned_data['email']
        name = self.cleaned_data['name']
        subject_title = self.cleaned_data['subject']
        subject, from_email, to = subject_title, settings.EMAIL_HOST_USER, email
        text_content = 'Thank you for reaching us.'
        html_content = '<p>Hello, thank you for reaching <strong>swiftkind</strong></p>'
        msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()

    def save(self):
        data = self.cleaned_data
        contact = Contact(name=data['name'], email=data['email'],
                        subject=data['subject'], budget=data['budget'],
                        date=data['date'], company=data['company'])
        contact.save()
