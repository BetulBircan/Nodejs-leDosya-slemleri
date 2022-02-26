# Node.js İle Dosya İşlemleri
Bu projede node.js ile dosya oluşturma, dosya okuma, veri ekleme(güncelleme) ve silme işlemleri yapıldı. Node.js in fs modülünden faydalandı.

İlk başta index.js dosyasına fs modülünü eklendi.

```
//fs modülünü dosya içerisine ekleme
const fs = require('fs');
```
-Dosya oluşturmak için fs.writeFile metodu kullanıldı.

```
//Dosya Oluşturma-fs.writeFile('oluşturulacak dosya adı','yazılacak veri','encode',callback)
 fs.writeFile('employees.json','{"name" : "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if(err)
        console.error(err);
    console.log("JSON DOSYASI BAŞARILI BİR ŞEKİLDE OLUŞTURULDU.")
    }) 

```

![nodejsdosyaoluşturma](https://user-images.githubusercontent.com/86554799/155834337-0c899e4f-86f0-405b-8ba4-f3c586a8d91a.jpg)

-Dosyadaki veriyi okumak için fs.readFile metodu kullanıldı.

```
//Veriyi Okuma-fs.readFile('okunacak dosya adı','encode',callback)
fs.readFile('employees.json','utf8',(err, data) => {
    if(err)
        console.error(err);
    console.log(data)
    console.log('Dosya Başarılı Bir Şekilde Okundu')
}) 
```

![nodejsdosyaokuma](https://user-images.githubusercontent.com/86554799/155834394-a69deadd-29df-4cda-93d7-e4ab4a7a7b9b.jpg)

-Dosyaya veri eklemek(güncellemek) için fs.appendFile metodu kullanıldı.

```
//Veri Güncelleme-fs.appendFile('güncellenecek dosya adı','eklenecek olan veri',callback)
 fs.appendFile('employees.json','\n{"name": "Employee 2 Name", "salary": 3000}',(err)=>{
         if(err) console.log('Bir Hata ile Karşılaşıldı.')
       console.log('Dosya güncellendi.')
}) 

```

![nodejsveriekleme2](https://user-images.githubusercontent.com/86554799/155834552-cf3c2a2d-6425-441d-95e3-85ed9c86ed9e.jpg)

-Dosyayı silmek için fs.unlink metodu kullanıldı.

```
//Dosya Silme-fs.unlink('silinecek dosya adı',callback)
fs.unlink('employees.json',err => {
    if(err)
        console.log(err)
    console.log('Dosya Silindi.') 
    })
```

![nodejsdosyasilme](https://user-images.githubusercontent.com/86554799/155834648-baa876eb-858b-4b33-abab-950d7676bdfb.jpg)
