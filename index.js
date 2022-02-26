/*
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.

 */

//fs modülünü dosya içerisine ekleme
const fs = require('fs');

//Dosya Oluşturma-fs.writeFile('oluşturulacak dosya adı','yazılacak veri','encode',callback)

 fs.writeFile('employees.json','{"name" : "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if(err)
        console.error(err);
    console.log("JSON DOSYASI BAŞARILI BİR ŞEKİLDE OLUŞTURULDU.")
    }) 