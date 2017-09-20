from django.conf.urls import url
from django.views.generic import TemplateView


def set_page(template_name):
    return TemplateView.as_view(template_name="pages/{}".format(template_name))

urlpatterns = [
    url(r'^$', set_page("index.html"), name="index"),
    url(r'^about/$', set_page("about.html"), name="about"),
    url(r'^contact/$', set_page("contact.html"), name="contact"),
    url(r'^design/$', set_page("design.html"), name="design"),
    url(r'^development/$', set_page("development.html"), name="development"),
    url(r'^services/$', set_page("services.html"), name="services"),
    url(r'^strategy/$', set_page("strategy.html"), name="strategy"),
    url(r'^works/$', set_page("works.html"), name="works"),
]