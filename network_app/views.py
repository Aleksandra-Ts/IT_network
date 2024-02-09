from django.shortcuts import render

def post_list(request):
    return render(request, 'network_app/registration.html', {})
