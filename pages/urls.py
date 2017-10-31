from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

def set_page(template_name):
    return TemplateView.as_view(template_name="pages/{}".format(template_name))

urlpatterns = [
    url(r'^$', set_page("index.html"), name="index"),
    url(r'^about/$', set_page("about.html"), name="about"),
    url(r'^contact/$', views.Contactview.as_view(), name="contact"),
    url(r'^design/$', set_page("design.html"), name="design"),
    url(r'^development/$', set_page("development.html"), name="development"),
    url(r'^services/$', set_page("services.html"), name="services"),
    url(r'^strategy/$', set_page("strategy.html"), name="strategy"),
    url(r'^works/$', set_page("works.html"), name="works"),
    url(r'^process/$', set_page("process.html"), name="process"),
    url(r'^learn/$', set_page("learn.html"), name="learn"),
    url(r'^jobs/$', set_page("jobs.html"), name="jobs"),
    url(r'^bookapp/$', set_page("bookapp.html"), name="bookapp"),
    url(r'^trackr/$', set_page("bookapp.html"), name="trackr"),
]
