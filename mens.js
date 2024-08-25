const product =[{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c70105150234ac4b948a8bf01187e0c_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg",
    Price:"99",
    DiscPrice:"6900",
    Discount:"30",
    Name:"sreelethers"

  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/441e686487224e70b407af5700b3c312_9366/Gazelle_Shoes_Turquoise_GY7337_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e0564c27f754915b743afa200c7db08_9366/adidas_Originals_Samba_Shoes_White_ID2047_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d91819a9800047d1bb28ae920142ab44_9366/NMD_R1_Shoes_Red_GX9886_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4a46e180c40643c8b436af9c017a4615_9366/adidas_Originals_Samba_Shoes_Green_ID2054_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/162d6d58e710420cad97a9a70124312b_9366/Nizza_RF_Hi_Shoes_Black_F34057_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0ddbc92f66704b929407af3f00ebc828_9366/Avryn_Shoes_Orange_ID9424_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/297d7e2795c14c3e97a5afa800d58dcb_9366/Ultraboost_Light_Shoes_White_HQ6348_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6c8c685cf03c4580a708f13cfba0c22b_9366/Retropy_F2_Shoes_Grey_IH0002_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/54d6b67964fa4f86a490a9f1013ff058_9366/Nizza_RF_Hi_Shoes_White_F34941_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b61ab72a46f04b3eb361af5400bdb20f_9366/Speedmotion_Shoes_Turquoise_HP5694_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2746a35151d84b0abbb9af480005c028_9366/NMD_V3_Shoes_Blue_HQ4447_01_standard.jp",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/06669018840e47cbbb3ead790105a40a_9366/EQ19_Run_Shoes_Pink_GZ0564_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  },{
    img:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4fe518b59861405ca8500145526cecbe_9366/Retropy_F2_Shoes_Blue_IH0003_01_standard.jpg",
    Price:"99",
    DiscPrice:"69",
    Discount:"30",
    Name:"nike air00000 jordan"
  }
  
  
];
let productHtml='';
product.forEach((product) => {
  productHtml+=`
  
               
  <div class="men1">
  <a href=""><img src="${product.img}" alt="">
  </a>
  <e>
    <x>$${product.Price}</x>
    <p>$${product.DiscPrice}</p>
    <j>-${product.Discount}% </j>
  </e>
  <a>best seller</a>
  <w>${product.Name}</w>

</div>
<div class="men1">
  <a href=""><img src="${product.img}" alt="">
  </a>
  <e>
    <x>$${product.Price}</x>
    <p>$${product.DiscPrice}</p>
    <j>-${product.Discount}% </j>
  </e>
  <a>best seller</a>
  <w>${product.Name}</w>

</div>
<div class="men1">
  <a href=""><img src="${product.img}" alt="">
  </a>
  <e>
    <x>$${product.Price}</x>
    <p>$${product.DiscPrice}</p>
    <j>-${product.Discount}% </j>
  </e>
  <a>best seller</a>
  <w>${product.Name}</w>

</div>
<div class="men1">
  <a href=""><img src="${product.img}" alt="">
  </a>
  <e>
    <x>$${product.Price}</x>
    <p>$${product.DiscPrice}</p>
    <j>-${product.Discount}% </j>
  </e>
  <a>best seller</a>
  <w>${product.Name}</w>

</div>
               
               
             
  `
  
})
let row1=document.querySelector('.row1')
row1.innerHTML= productHtml;
  