from django.http import JsonResponse


class JSONResponseMixin(object):
    """
    Mixin to return JSON responses upon form submission
    Must be used with an object-based FormView (e.g. CreateView)
    """
    def form_invalid(self, form):
        response = super(JSONResponseMixin, self).form_invalid(form)
        return JsonResponse(form.errors, status=400)

    def form_valid(self, form):
        response = super(JSONResponseMixin, self).form_valid(form)
        data = {
            'pk': self.object.pk,
        }
        return JsonResponse(data)
        