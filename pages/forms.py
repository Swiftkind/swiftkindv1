from django import forms

from .models import Contact


class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    subject = forms.CharField(max_length=100)
    budget = forms.DecimalField(max_digits=10, decimal_places=2)

    def save(self):
        data = self.cleaned_data
        contact = Contact(name=data['name'], email=data['email'],
                        subject=data['subject'], budget=data['budget'])
        contact.save()
