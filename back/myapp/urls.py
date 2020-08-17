from django.urls import path,include
from . import views
from  rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'Contacto', views.ContactoViewSet)
router.register(r'Persona', views.PersonaViewSet)
router.register(r'Cliente', views.ClienteViewSet)
router.register(r'Consumidor', views.ConsumidorViewSet)
router.register(r'Orden_Menu', views.Orden_MenuViewSet)
router.register(r'Categoria', views.CategoriaViewSet)
router.register(r'Producto', views.ProductoViewSet)
router.register(r'Detalle_orden_menu', views.Detalle_orden_menuViewSet)
router.register(r'Combo', views.ComboViewSet)
router.register(r'ComboProducto', views.ComboProductoViewSet)
urlpatterns = [
   path('rest-auth/', include('rest_auth.urls')),
]
urlpatterns+=router.urls

if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)