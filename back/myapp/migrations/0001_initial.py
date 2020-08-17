# Generated by Django 2.2.5 on 2019-09-05 05:45

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nombre', models.CharField(max_length=20)),
                ('Descripcion', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Combo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Descripcion', models.CharField(max_length=30)),
                ('Precio', models.DecimalField(decimal_places=2, max_digits=4)),
            ],
        ),
        migrations.CreateModel(
            name='Contacto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nombre', models.CharField(max_length=30)),
                ('Email', models.CharField(max_length=20)),
                ('Ciudad', models.CharField(max_length=10)),
                ('Asunto', models.CharField(max_length=20)),
                ('Mensaje', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Orden_Menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Fecha', models.DateField(default=datetime.datetime.now)),
                ('Total', models.DecimalField(decimal_places=2, max_digits=6)),
            ],
        ),
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('Persona_id', models.AutoField(primary_key=True, serialize=False)),
                ('Contacto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='personas', to='myapp.Contacto')),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('persona_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='myapp.Persona')),
                ('Nombre', models.CharField(max_length=10)),
                ('Apellido', models.CharField(max_length=10)),
                ('Edad', models.CharField(max_length=3)),
                ('Ciudad', models.CharField(max_length=10)),
                ('Correo', models.CharField(max_length=20)),
            ],
            bases=('myapp.persona',),
        ),
        migrations.CreateModel(
            name='Consumidor',
            fields=[
                ('persona_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, to='myapp.Persona')),
                ('Consumidor_id', models.AutoField(primary_key=True, serialize=False)),
            ],
            bases=('myapp.persona',),
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nombre', models.CharField(max_length=30)),
                ('Precio', models.DecimalField(decimal_places=2, max_digits=4)),
                ('IsBebida', models.BooleanField()),
                ('IsPlato', models.BooleanField()),
                ('Descripcion', models.CharField(max_length=800)),
                ('file', models.FileField(upload_to='')),
                ('Categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tracks', to='myapp.Categoria')),
            ],
        ),
        migrations.CreateModel(
            name='Detalle_orden_menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Descripcion', models.CharField(max_length=800)),
                ('Orden_Menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='detalleO', to='myapp.Orden_Menu')),
                ('Producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='detalleP', to='myapp.Producto')),
            ],
        ),
        migrations.CreateModel(
            name='ComboProducto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('IsCombo', models.BooleanField()),
                ('Combo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.Combo')),
                ('Producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='combos', to='myapp.Producto')),
            ],
        ),
        migrations.AddField(
            model_name='orden_menu',
            name='Cliente',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.Cliente'),
        ),
    ]
