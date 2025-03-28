
//social media
window.addEventListener('scroll', function() {
    const fadeDiv = document.getElementById('numbers');
    const windowHeight = window.innerHeight;
    const divPosition = fadeDiv.getBoundingClientRect().top;

    
    if (divPosition < windowHeight) {
    fadeDiv.classList.add('opacity-100', 'translate-y-0');
    }
});
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
   insta.innerHTML +=`      <div  class=" flex  2xl:w-[500px] md:w-[310px] 2xl:h-[570px] object-cover transition-transform hover:scale-110 duration-500 ease-in-out  ">
               <img class="w-[415px] h-[550px] object-cover" src="${val.number}"/>

           </div>`
   

});



 //awards
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
   award.innerHTML +=`    <div class="grid grid-cols-3 font-light justify-between text-[23px] text-gray-500 items-start mb-4 award ">
               <div >${val.number}</div>
               <div>${val.title}</div>
               <div>${val.sub}</div>
           </div>
           <div class=" border-b border-gray-400">  </div>`
   

});

//numbering yers data
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
           <div class="2xl:text-[55px] md:text-[45px] font-medium">${val.number}+</div>
           <div class="text-[25px] font-light text-gray-500 ">${val.title}</div>
       </div>`
   

});

//service
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
  service.innerHTML +=`   <div class="flex gap-3 border-b  p-3 cursor-pointer hover:bg-red-100   hover:shadow-4xl hover:border-red-100 2xl:h-[220px] md:h-[210px] hover:border-b-gray-200">
         <div class="text-[25px] text-gray-500">${val.number}</div>
         <div class="grid h-fit gap-3">
           <div class="text-[25px] font-semibold">${val.title}</div>
           <div class="2xl:text-[18px] text-gray-500 md:text-[15px] 2xl:leading-9">
             ${val.sub}
           </div>
           <div class="flex gap-3 items-center">
             <div class="2xl:text-[18px]  md:text-[15px]">Learn more</div>
             <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                 <path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"/>
               </svg>
             </div>
           </div>
         </div>
       </div>  `
   

});

//board member
const meet= document.getElementById("meet");
const meetService=[
   {
       number:`h02.jpg`,
       title: `Architecture`,
       sub: `Manager`
       
   },
   {
       number:`h01.jpg`,
       title: `Abishek Thapa`,
       sub: `Manager`
       
   },
   {
    number:`h02.jpg`,
    title: `Abishek Thapa`,
    sub: `Manager`
    
},
{
    number:`h01.jpg`,
    title: `Abishek Thapa`,
    sub: `Manager`
    
}, 
   
];
meetService.map((val,index)=>{
  meet.innerHTML +=`  
   <div class="grid h-[350px] w-[400px] border p-3 border-gray-300">
        <div><img src="${val.number}" /></div>
        <div>
            <div class="text-[22px]">${val.title}</div>
            <div class="text-gray-500">${val.sub}</div>
        </div>
  </div>`
   

});
//board member
const question= document.getElementById("question");
const arrQuestion=[
   {
     
       title: `What services does Archinest provide?`,
       sub: `Have questions about Archinest? We've got you covered! Explore our FAQs to learn more about our services, process, and what sets us apart.`
       
   },
   {
       
       title: `How can I get started with a project at Archinest?`,
       sub: `Have questions about Archinest? We've got you covered! Explore our FAQs to learn more about our services, process, and what sets us apart.`
       
   },
   {
       
    title: `How long does it take to complete a project?`,
    sub: `Have questions about Archinest? We've got you covered! Explore our FAQs to learn more about our services, process, and what sets us apart.`
    
},
{
       
    title: `Does Archinest work with eco-friendly and sustainable materials?`,
    sub: `Have questions about Archinest? We've got you covered! Explore our FAQs to learn more about our services, process, and what sets us apart.`
    
},
{
       
    title: `Can Archinest handle both residential and commercial projects?`,
    sub: `Have questions about Archinest? We've got you covered! Explore our FAQs to learn more about our services, process, and what sets us apart.`
    
},

   
   
];
arrQuestion.map((val,index)=>{
    question.innerHTML +=`  
       <div class="grid gap-6">
                    <div class="flex justify-between items-center collapsible ">
                        <button type="button" class="text-[22px]   cursor-pointer   text-left">${val.title}</button>
                        <div class="text-bold"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"/></svg></div>

                    </div>
                 
                    
                    <div class="content hidden">
                      <p class="text-[20px] text-gray-600 collapsible-content">${val.sub}</p>
                    </div>
                    <div class="border-b"></div>
                </div>`
   

});

// slider
   const slider = document.getElementById('slider');
   let index = 0;
   
   function nextSlide() {
       index = (index + 1) % slider.children.length;
       slider.style.transform = `translateX(-${index * 100}%)`;
   }
   
   setInterval(nextSlide, 3000);





//ask question collaps
  var coll = document.getElementsByClassName("collapsible");
   var i;
   
   for (i = 0; i < coll.length; i++) {
     coll[i].addEventListener("click", function() {
       this.classList.toggle("active");
       var content = this.nextElementSibling;
       if (content.style.display === "flex") {
         content.style.display = "none";
       } else {
         content.style.display = "flex";
         
       }
     });
   } 