from django.urls import include, path

from django.contrib import admin

urlpatterns = [
    path('apidb/', include('myapp.urls')),
    path('admin/', admin.site.urls),
   
]
