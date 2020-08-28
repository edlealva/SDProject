from selenium import webdriver

from selenium.webdriver.common.keys import Keys
import time

count = 0

while( count < 5 ):
    driver = webdriver.Chrome('./chromedriver')

    driver.get('http://localhost:8000/admin/login/?next=/admin/')
    print(driver.title)

    username = driver.find_element_by_name("username")
    username.send_keys("admin")
    #username.send_keys(Keys.RETURN)
    time.sleep(2)

    password = driver.find_element_by_name("password")
    password.send_keys("admin")
    password.send_keys(Keys.RETURN)

    time.sleep(2)

    categoria = driver.find_element_by_xpath('//tr[@class="model-categoria"]/th/a')
    categoria.click()
    time.sleep(2)
    driver.back()

    cliente = driver.find_element_by_xpath('//tr[@class="model-cliente"]/th/a')
    cliente.click()
    time.sleep(2)
    driver.back()

    cbProducto = driver.find_element_by_xpath('//tr[@class="model-comboproducto"]/th/a')
    cbProducto.click()
    time.sleep(2)
    driver.back()

    combo = driver.find_element_by_xpath('//tr[@class="model-combo"]/th/a')
    combo.click()
    time.sleep(2)
    driver.back()

    consumidor = driver.find_element_by_xpath('//tr[@class="model-consumidor"]/th/a')
    consumidor.click()
    time.sleep(2)
    driver.back()

    contacto = driver.find_element_by_xpath('//tr[@class="model-contacto"]/th/a')
    contacto.click()
    time.sleep(2)
    driver.back()

    detalle_orden_menu = driver.find_element_by_xpath('//tr[@class="model-detalle_orden_menu"]/th/a')
    detalle_orden_menu.click()
    time.sleep(2)
    driver.back()

    orden_menu = driver.find_element_by_xpath('//tr[@class="model-orden_menu"]/th/a')
    orden_menu.click()
    time.sleep(2)
    driver.back()

    personas = driver.find_element_by_xpath('//tr[@class="model-persona"]/th/a')
    personas.click()
    time.sleep(2)
    driver.back()

    productos = driver.find_element_by_xpath('//tr[@class="model-producto"]/th/a')
    productos.click()
    time.sleep(2)
    driver.back()

    time.sleep(2)

    driver.quit()

    count = count+1


    
