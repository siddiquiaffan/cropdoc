from os import name
from django.urls import path
from . import views



urlpatterns = [
    path('',views.home,name='home'),
    path('cotton', views.cotton,name='cotton'),
    path('tomato', views.tomato, name='tomato'),
    path('potato', views.potato, name='potato')
]