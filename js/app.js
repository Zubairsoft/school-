// make active to navbar
let navbarItem=document.querySelectorAll(".navbar li:not(:first-child)")
let navbar=document.querySelector(".navbar")
let up_btn=document.querySelector(".up")
console.log(up_btn)
navbarItem.forEach((e)=>{
   e.addEventListener("click",function(e){
    navbarItem.forEach((element)=>{
        //  delete class active form navbarItem 
        element.classList.remove("active")
    })
    // add class active to the item that make clicked
   this.classList.add("active")
   })
})
// ######################################################################################### فاطمة
window.addEventListener('scroll',function(){
if (this.window.scrollY>50) {
    navbar.style.width="100%";
    navbar.style.borderRadius="0"
    navbar.style.position="sticky"
    navbar.style.top="0"
    navbar.style.scrollBehavior="smooth"
}
 if (this.window.scrollY>1500) {
    up_btn.style.display="block"
}


else if(this.window.scrollY==0) {
    navbar.style.width="80%";
    navbar.style.borderRadius="5px"
    navbar.style.position="absolute"
    navbar.style.top="30px"
    navbar.style.scrollBehavior="smooth"
    up_btn.style.display="none"
}


})
up_btn.addEventListener("click",()=>{
    scrollTo({
        top:0,
        behavior:"smooth",
    })
})
//####################################
// make validation to input share to email
let share_input_email=document.querySelector(".input-share-email")
let submit_btn=document.querySelector(".submit-btn")
let error=document.getElementById("error")
let shareForm=document.querySelector('.share-form')
let regex=/(\w|\w+)@(gmail|hotmail).com/ig
shareForm.addEventListener("submit",(e)=>{
    if (share_input_email.value=="") {
        e.preventDefault()
        
        error.style.cssText="display:block;color:#e24b4b;margin:4% 0"
        error.innerHTML="يجب الايكون الحقل فارغ"
    }
    else if(regex.test(share_input_email.value)===false){
        e.preventDefault()
        error.style.cssText="display:block;color:#e24b4b;margin:4% 0"
        error.innerHTML="inccorrect formate"
    }
    else{
        return true
    }
})
//######################################################################3
// create slider 
let image_slider=document.querySelector(".img-slider img")
let btn_prev=document.querySelector(".arrow-right")
let btn_next=document.querySelector(".arrow-left")
let images=["./images/Screenshot_2022-06-26-16-12-55-327_com.facebook.katana.jpg","./images/FB_IMG_1656240719643.jpg"]
let index=0
let dots=document.querySelectorAll(".dots div")
for (let element = 0; element < dots.length; element++) {
    dots[element].addEventListener("click",(e)=>{
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("dots-active")
            
        }
        e.currentTarget.classList.add("dots-active")
        image_slider.src=images[element]
    })
}
btn_prev.addEventListener("click",()=>{
    if (index<=0) {
        index=images.length
    }else{
 
        index-- 
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dots-active")
        
    }
    dots[index].classList.add("dots-active")
    image_slider.setAttribute("src",images[index])
    }
      
    // index--
    // console.log(index)
})
btn_next.addEventListener("click",()=>{
    // index++
    // console.log(index)
    if (index>=images.length-1){
        index=-1
    }else{
        index++
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("dots-active")
            
        }
        dots[index].classList.add("dots-active")
        image_slider.setAttribute("src",images[index])
    }
     
})
function imageSlider(){
    let index =-1
    if (index < images.length) {
        index=-1
    }else{
        index++
        image_slider.src=images[index]
    }
}
setInterval(imageSlider,5000)
//##############
let vision_logo=document.querySelectorAll(".style")
let vision=document.querySelector(".span")
vision_logo.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        e.currentTarget.style.display="none"
        vision.style.display="block"
    })
})
// vision_logo.addEventListener("click",function(){
// vision.style.display="block"
// vision_logo.style.display="none"

// })
// vision.addEventListener("click",function(){
//     vision_logo.style.display="block"
//     vision.style.display="none"
//     })
    
//##################################################################
let teachers_container=document.querySelector(".teachers-container")
let teacher=document.querySelector(".teacher")
setInterval(() => {
    teachers_container.scrollLeft-=1000
    if (teachers_container.scrollX>900) {
        teachers_container.scrollRight=0
    }
   
  
    
}, 5000);

//#######################################################################
// scroll to top