from django.shortcuts import render
from .models import Plants
# from django.conf import settings
import tensorflow
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import preprocess_input
import numpy as np
import json
from django.http import HttpResponse
from PIL import Image
from urllib import request
from io import BytesIO


def home(request):
    return render(request,'home.html')

def load_image(imge):
    # img = image.load_img(imge,target_size=(224,224))
    res = request.urlopen(imge).read()
    img = Image.open(BytesIO(res)).resize((224,224))
    x=image.img_to_array(img)
    x=np.expand_dims(x,axis=0)
    img_data=preprocess_input(x)
    
    return img_data


# Cotton Yard
def predict_Cotton(img):
    model = tensorflow.keras.models.load_model("./Cotton_disease.h5")
    img_data = load_image(img)
    result = model.predict(img_data)
    
    return np.argmax(result)


def cotton(request):
    if request.method == 'POST' and request.FILES['photo']:
        plimage = request.FILES.get('photo')
        
        plantphoto = Plants.objects.create(
            category = 'Cotton',
            image = plimage,
        )
        
        
        pk = plantphoto.id
        data = Plants.objects.get(id=pk) 
        
        # This part can be vary according to host 
        img_url = data.image.url
        res = predict_Cotton(img_url)
        
        db_data = Plants.objects.get(id=pk)
        db_data.result = res
        db_data.save()
        
        ans = ''
        if res == 1:
            ans = 'Anthracnose Infected'
        elif res == 0:
            ans = 'Normal'
        else:
            ans = 'Not Suffer from our Disease'
            
            
        output = None 
        image_url = img_url
        
        if res == 1:
            data = open('./static/cotton.json','r')
            ct_data = json.load(data)
            Disease = ct_data["Disease"]
            symptons = ct_data["Symptons"]
            pathogen = ct_data["Pathogen"]
            cycle = ct_data["Disease cycle"]
            managee = ct_data["Management"]
            blog_link = ct_data["Blog Link"]
            yt_link = ct_data["Youtube Link"]
            medicine = ct_data["Medicine"]
            output = True
            
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url':image_url, 'disease':Disease, 'symptons':symptons, 'pathogen':pathogen, 'cycle':cycle, 'managee' : managee, 'blog_link' : blog_link, 'yt_link' : yt_link, 'medicine' : medicine}
            
        elif res == 0:
            data = open('./static/cotton.json','r')
            ct_data = json.load(data)
            managee = ct_data["Management"]
            medicine = ct_data["Medicine"]
            output = False
            
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url': image_url, 'managee' : managee, 'medicine' : medicine}
            
        else:
            links = [
                'http://eagri.org/eagri50/PATH272/lecture13/index.html',
                'https://en.wikipedia.org/wiki/List_of_cotton_diseases',
                'https://agritech.tnau.ac.in/crop_protection/crop_prot_crop%20diseases_cash%20crops_cotton.html',
                'https://content.ces.ncsu.edu/catalog/series/53/'
            ]
            output = False
            sub_output = True
            context  = {'main_output':True, 'sub_output' : sub_output, 'image_url': image_url, 'output':output, 'ans' : ans, 'links' : links}
        
        return render(request,'cotton.html', context = context)
        
        
    context = {'main_output' : False}
    return render(request,'cotton.html',context=context)




# Tomato Yard
def get_tomato_data(name):
    data = open(f'./static/{name}.json','r')
    t_data = json.load(data)
    return t_data

def predict_Tomato(img):
    model = tensorflow.keras.models.load_model("./Tomato_disease.h5")
    img_data = load_image(img)
    result = model.predict(img_data)
    return np.argmax(result)

def tomato(request):
    if request.method == 'POST' and request.FILES['photo']:
        plimage = request.FILES.get('photo')
        
        plantphoto = Plants.objects.create(
            category = 'Tomato',
            image = plimage,
        )
        
        pk = plantphoto.id
        data = Plants.objects.get(id=pk) 
        
        # This part can be vary according to host 
        img_url = data.image.url 
        res = predict_Tomato(img_url)
        
        db_data = Plants.objects.get(id=pk)
        db_data.result = res
        db_data.save()
        
        ans = ''
        if res == 0:
            ans = 'Infected From Bacterial Spot'
        elif res == 1:
            ans = 'Infected From Early Blight'
        elif res == 2:
            ans = 'Infected From Late Blight' 
        elif res == 3:
            ans = 'Infected From Septoria Leaf Spot' 
        elif res == 4:
            ans = 'Infected From Yellow Leaf Curl Virus' 
        elif res == 5:
            ans = 'Infected From Mosaic virus' 
        else:
            ans = 'Its Normal'
        
  
        output = None 
        image_url = img_url
        
        if res == 0:
            tomato_data = get_tomato_data('tomato1')
            Disease = tomato_data['Disease']
            symptons = tomato_data['Symptoms']
            spread = tomato_data['Spread']
            managee = tomato_data['Management']
            blog_link = tomato_data['Blog Link']
            yt_link = tomato_data['Youtube Link']
            medicine = tomato_data['Medicine']
            
            output = True
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url':image_url, 'disease':Disease, 'symptons':symptons, 'spread':spread, 'managee' : managee, 'blog_link' : blog_link, 'yt_link' : yt_link, 'medicine' : medicine}
            
        elif res == 1:
            tomato_data = get_tomato_data('tomato2')
            Disease = tomato_data['Disease']
            symptons = tomato_data['Symptoms']
            spread = tomato_data['Spread']
            managee = tomato_data['Management']
            blog_link = tomato_data['Blog Link']
            yt_link = tomato_data['Youtube Link']
            medicine = tomato_data['Medicine']
            
            output = True
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url':image_url, 'disease':Disease, 'symptons':symptons, 'spread':spread, 'managee' : managee, 'blog_link' : blog_link, 'yt_link' : yt_link, 'medicine' : medicine}
        
        elif res == 2:
            tomato_data = get_tomato_data('tomato3')
            Disease = tomato_data['Disease']
            symptons = tomato_data['Symptoms']
            spread = tomato_data['Spread']
            managee = tomato_data['Management']
            blog_link = tomato_data['Blog Link']
            yt_link = tomato_data['Youtube Link']
            medicine = tomato_data['Medicine']
            
            output = True
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url':image_url, 'disease':Disease, 'symptons':symptons, 'spread':spread, 'managee' : managee, 'blog_link' : blog_link, 'yt_link' : yt_link, 'medicine' : medicine}
            
        elif res == 3:
            tomato_data = get_tomato_data('tomato4')
            Disease = tomato_data['Disease']
            symptons = tomato_data['Symptoms']
            spread = tomato_data['Spread']
            managee = tomato_data['Management']
            blog_link = tomato_data['Blog Link']
            yt_link = tomato_data['Youtube Link']
            medicine = tomato_data['Medicine']
            
            output = True
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url':image_url, 'disease':Disease, 'symptons':symptons, 'spread':spread, 'managee' : managee, 'blog_link' : blog_link, 'yt_link' : yt_link, 'medicine' : medicine}
            
        elif res == 4:
            tomato_data = get_tomato_data('tomato5')
            Disease = tomato_data['Disease']
            symptons = tomato_data['Symptoms']
            spread = tomato_data['Spread']
            managee = tomato_data['Management']
            blog_link = tomato_data['Blog Link']
            yt_link = tomato_data['Youtube Link']
            medicine = tomato_data['Medicine']
            
            output = True
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url':image_url, 'disease':Disease, 'symptons':symptons, 'spread':spread, 'managee' : managee, 'blog_link' : blog_link, 'yt_link' : yt_link, 'medicine' : medicine}
        
        elif res == 5:
            tomato_data = get_tomato_data('tomato6')
            Disease = tomato_data['Disease']
            symptons = tomato_data['Symptoms']
            spread = tomato_data['Spread']
            managee = tomato_data['Management']
            blog_link = tomato_data['Blog Link']
            yt_link = tomato_data['Youtube Link']
            medicine = tomato_data['Medicine']
            
            output = True
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url':image_url, 'disease':Disease, 'symptons':symptons, 'spread':spread, 'managee' : managee, 'blog_link' : blog_link, 'yt_link' : yt_link, 'medicine' : medicine}
  
        else:
            # Yet to be done 
            tomato_data = get_tomato_data('tomato7')
            managee = tomato_data["Management"]
            medicine = tomato_data["Medicine"]
            output = False
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url': image_url, 'managee' : managee, 'medicine' : medicine}
        
        
        return render(request,'tomato.html', context = context)
        
    context = {'main_output' : False}
    return render(request,'tomato.html',context=context)




# Potato Yard
def get_Potato_data(name):
    data = open(f'./static/{name}.json','r')
    t_data = json.load(data)
    return t_data

def predict_Potato(img):
    model = tensorflow.keras.models.load_model("./Potato_disease.h5")
    img_data = load_image(img)
    result = model.predict(img_data)
    return np.argmax(result)

def potato(request):
    if request.method == 'POST' and request.FILES['photo']:
        plimage = request.FILES.get('photo')
        
        plantphoto = Plants.objects.create(
            category = 'Potato',
            image = plimage,
        )
        
        pk = plantphoto.id
        data = Plants.objects.get(id=pk) 
        
        # This part can be vary according to host 
        img_url = data.image.url 
        res = predict_Potato(img_url)
        
        db_data = Plants.objects.get(id=pk)
        db_data.result = res
        db_data.save()
        
        ans = ''
        if res == 0:
            ans = 'Infected From Early Blight'
        elif res == 1:
            ans = 'Infected From Late Blight'
        else:
            ans = 'Its Normal'
        
  
        output = None 
        image_url = img_url
        
        if res == 0:
            Potato_data = get_Potato_data('potato1')
            Disease = Potato_data['Disease']
            symptons = Potato_data['Symptoms']
            spread = Potato_data['Spread']
            managee = Potato_data['Management']
            blog_link = Potato_data['Blog Link']
            yt_link = Potato_data['Youtube Link']
            medicine = Potato_data['Medicine']
            
            output = True
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url':image_url, 'disease':Disease, 'symptons':symptons, 'spread': spread, 'managee' : managee, 'blog_link' : blog_link, 'yt_link' : yt_link, 'medicine' : medicine}
            
        elif res == 1:
            Potato_data = get_Potato_data('potato2')
            Disease = Potato_data['Disease']
            symptons = Potato_data['Symptoms']
            spread = Potato_data['Spread']
            managee = Potato_data['Management']
            blog_link = Potato_data['Blog Link']
            yt_link = Potato_data['Youtube Link']
            medicine = Potato_data['Medicine']
            
            output = True
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url':image_url, 'disease':Disease, 'symptons':symptons, 'spread': spread, 'managee' : managee, 'blog_link' : blog_link, 'yt_link' : yt_link, 'medicine' : medicine}
        
        else:
            # yet to be done 
            Potato_data = get_Potato_data('potato3')
            managee = Potato_data["Management"]
            medicine = Potato_data["Medicine"]
            output = False
            
            context = {'main_output':True, 'output':output, 'ans' : ans, 'image_url': image_url, 'managee' : managee, 'medicine' : medicine}
        
        return render(request,'potato.html', context = context)
        
        
    context = {'main_output' : False}
    return render(request,'potato.html',context=context)    
