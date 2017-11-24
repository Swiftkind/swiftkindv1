from django import forms

from .models import Contact


class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    subject = forms.CharField(max_length=100)
    budget = forms.DecimalField(max_digits=10, decimal_places=2)
    date = forms.DateField()
    company = forms.CharField(max_length=50)

    def save(self):
        contact = Contact(**self.cleaned_data)
        contact.save()
