from .models import *
from rest_framework import serializers


class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Contacto
        fields = '__all__'


class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__'


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields = '__all__'


class Detalle_orden_menuSerializer(serializers.ModelSerializer):
    class Meta:
        model=Detalle_orden_menu
        fields = '__all__'

class ComboSerializer(serializers.ModelSerializer):
    class Meta:
        model = Combo
        fields = '__all__'


class ComboProductoSerializer(serializers.ModelSerializer):


    class Meta:
        model = ComboProducto
        fields = ['IsCombo', 'Combo', 'Producto']


class ConsumidorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consumidor
        fields = '__all__'


class Orden_MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orden_Menu
        fields = '__all__'


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
