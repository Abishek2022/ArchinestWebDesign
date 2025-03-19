

      
const insta= document.getElementById("insta");
const newInsta=[
   {
       number:`hou01.jpg`,
       
   },
   {
       number:`ho02.jpg`,
       
   },

   {
       number:`ho03.jpeg`,
       
   },

   {
       number:`ho04.webp`,
       
   },



  
];
newInsta.map((val,index)=>{
   insta.innerHTML +=`      <div class=" flex  w-[500px] h-[415px] object-cover  ">
               <img class="w-[415px] h-[550px]" src="${val.number}"/>

           </div>`
   

});



 
 const award= document.getElementById("award");
const newAward=[
   {
       number:`Excellence in Minimalist Design`,
       title: `New York City`,
       sub:`May 12, 2023`,
   },
   {
       number:`Excellence in Minimalist Design`,
       title: `New York City`,
       sub:`May 12, 2023`,
   },
  
   {
       number:`Excellence in Minimalist Design`,
       title: `New York City`,
       sub:`May 12, 2023`,
   },
  
   {
       number:`Excellence in Minimalist Design`,
       title: `New York City`,
       sub:`May 12, 2023`,
   },
  
   {
       number:`Excellence in Minimalist Design`,
       title: `New York City`,
       sub:`May 12, 2023`,
   },
  
   {
       number:`Excellence in Minimalist Design`,
       title: `New York City`,
       sub:`May 12, 2023`,
   },
  
  
];
newAward.map((val,index)=>{
   award.innerHTML +=`    <div class="grid grid-cols-3 font-light justify-between text-[23px] text-gray-500 items-start mb-4 ">
               <div >${val.number}</div>
               <div>${val.title}</div>
               <div>${val.sub}</div>
           </div>
           <div class=" border-b border-gray-400">  </div>`
   

});

const count= document.getElementById("numbers");
const newCount=[
   {
       number:`10`,
       title: `Years`
   },
   {
       number:`40`,
       title: `Projects`
   },
   {
       number:`30`,
       title: `Clints Server`
   },
   {
       number:`10`,
       title: `Modeld Made`
   },
];
newCount.map((val,index)=>{
   count.innerHTML +=`    <div class="grid h-fit ">
           <div class="text-[55px] font-medium">${val.number}+</div>
           <div class="text-[25px] font-light text-gray-500 ">${val.title}</div>
       </div>`
   

});

const service= document.getElementById("service");
const newService=[
   {
       number:`01`,
       title: `Architecture`,
       sub: `our architecture services aim to create structures that inspire and endureWe specialize in designing innovative and functional spaces that combine form and purpose. From conceptualization to detailed planning, our architecture services aim to create structures that inspire and endure.`
       
   },
   {
       number:`02`,
       title: `Architecture`,
       sub: `our architecture services aim to create structures that inspire and endureWe specialize in designing innovative and functional spaces that combine form and purpose. From conceptualization to detailed planning, our architecture services aim to create structures that inspire and endure.`
       
   },
   {
       number:`03`,
       title: `Architecture`,
       sub: `our architecture services aim to create structures that inspire and endureWe specialize in designing innovative and functional spaces that combine form and purpose. From conceptualization to detailed planning, our architecture services aim to create structures that inspire and endure.`
       
   },
   {
       number:`04`,
       title: `Architecture`,
       sub: `our architecture services aim to create structures that inspire and endureWe specialize in designing innovative and functional spaces that combine form and purpose. From conceptualization to detailed planning, our architecture services aim to create structures that inspire and endure.`
       
   },
   {
       number:`05`,
       title: `Architecture`,
       sub: `our architecture services aim to create structures that inspire and endureWe specialize in designing innovative and functional spaces that combine form and purpose. From conceptualization to detailed planning, our architecture services aim to create structures that inspire and endure.`
       
   },
   {
       number:`06`,
       title: `Architecture`,
       sub: `our architecture services aim to create structures that inspire and endureWe specialize in designing innovative and functional spaces that combine form and purpose. From conceptualization to detailed planning, our architecture services aim to create structures that inspire and endure.`
       
   },
   {
       number:`07`,
       title: `Architecture`,
       sub: `our architecture services aim to create structures that inspire and endureWe specialize in designing innovative and functional spaces that combine form and purpose. From conceptualization to detailed planning, our architecture services aim to create structures that inspire and endure.`
       
   },
  
   
];
newService.map((val,index)=>{
  service.innerHTML +=`   <div class="flex gap-3 border-b  cursor-pointer  h-[210px]">
         <div class="text-[25px] text-gray-500">${val.number}</div>
         <div class="grid h-fit gap-3">
           <div class="text-[25px] font-semibold">${val.title}</div>
           <div class="text-[18px] text-gray-500 leading-9">
             ${val.sub}
           </div>
           <div class="flex gap-3 items-center">
             <div>Learn more</div>
             <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                 <path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"/>
               </svg>
             </div>
           </div>
         </div>
       </div>  `
   

});

   const slider = document.getElementById('slider');
   let index = 0;
   
   function nextSlide() {
       index = (index + 1) % slider.children.length;
       slider.style.transform = `translateX(-${index * 100}%)`;
   }
   
   setInterval(nextSlide, 3000);
   $('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

