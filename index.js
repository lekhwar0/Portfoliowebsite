// creating a responsive navabar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click' , () => {
    headerElem.classList.toggle('active');
});

// creating a portfolio tabbed component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click' , (e) => {
const p_btn_clicked = e.target;
console.log(p_btn_clicked);

if(!p_btn_clicked.classList.contains("p-btn"))return;

p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

p_btn_clicked.classList.add("p-btn-active");

const btn_num = p_btn_clicked.dataset.btnNum;
console.log(btn_num);

const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

p_img_elem.forEach((curElem) => curElem.classList.add( "p-image-not-active")); 

img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));

});

// sroll to top button

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({behavior:"smooth"})
  
};

scrollElement.addEventListener("click", scrollTop);

// animate counter section

 const counterNum = document.querySelectorAll(".counter-numbers");

 const speed = 200;

 counterNum.forEach((curElem) => {
    
    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber/speed);

        if(initialNum < targetNumber){
            curElem.innerText = `${initialNum + incrementNumber} +`;

            setTimeout(updateNumber , 10);
        }
    };
    
    updateNumber();

 });

//  ===============================================
//   lazy loading
// ==============================================


//  const imgRef = document.querySelector("img[data-src]");

//  const lazyImg = (enteries) => {
//    const [entry] = enteries;
//    console.log(entry);

//  if(!entry.is interseting) return;

//  entry.target.src = imgRef.dataset.src; 

//  };

//   const imgObserver = new IntersectionObserver(lazyImg , {
//     root:null,
//     threshold: 0,
//  });

//  imgObserver.observe(imgRef);