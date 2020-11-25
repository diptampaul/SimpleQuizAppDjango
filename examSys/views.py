from django.shortcuts import render
from .models import Questions

# Create your views here.
def home(request):
    questions = Questions.objects.all()
    return render(request, 'index.htm', {'questions':questions})

def result(request):
    
    pass