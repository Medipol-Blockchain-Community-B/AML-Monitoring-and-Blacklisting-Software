
# AML Monitoring and Blacklisting

  Küçük hacimli alım-satım platformları ve NFT pazarlarında kara para aklama işlemlerinin azaltılması amacı ile bir servis geliştirmekteyiz. Coinfirm, Elliptic ve Jumio gibi AML firmaları pazarda büyük şirketlere hizmet etmektedir. Küçük firmalar pazarda AML servislerinden mahrum kalmıştır. Kara listeli hesaplar ile geçmişte iletişime geçilmesi durumunda hesaplar farklı seviyelerde şüpheli olarak işaretlenirler. Yüksek seviyeye sahip olan hesaplar da kara listeye eklenir ve gelecekte yapacakları işlemler engellenir.

# Veritabanı

  Karalistedeki hesapları depolamak için projede MongoDB veri tabanı kullanılmıştır. Farklı sebeblerden çeşitli borsalarda yasaklanmış 250,000 cüzdan hesabı bu veritabanına yüklenmiştir.

  Veritabanına front-end tarafından erişim sağlamak amacıyla 2 farklı webhook oluşturulmuştur. Bilgilerin istenilen şekilde siteye çekilebilmesi için bir tane GET bir tane de POST fonksiyonu yazılmıştır. Bunlardan ilki, POST request ile gönderilen cüzdan adresi bilgisinin veritabanındaki yasaklanmış bir adres ile eşleşip eşleşmediğini kontrol eden ve karşıya true argümanı döndüren 'check' fonksiyonudur. 
  
```js
exports = async function(payload) {
   const mongodb = context.services.get("mongodb-atlas");
   const mycollection = mongodb.db("blacklist").collection("bl");
   const x= await mycollection.findOne({"address":payload['query']['address']});
   
   try {
     if (x['address']) {
       return true
     }
   } catch (e){
     return false;
   }
};

```

  Bir diğer fonksiyon ise veritabanında bulunan 250,000 kayıttan 40 adetini almaya yarayan 'get_data' fonksiyonudur. Bu fonksiyon da bir GET olarak veritabanından 20 adet yasaklanmış cüzdan adresi çekilmesine yardım etmektedir.
  
```js

exports = async function() {
   const mongodb = context.services.get("mongodb-atlas");
   const mycollection = mongodb.db("blacklist").collection("bl");
   return await mycollection.find().limit(30);
   
}

```
