const parent = document.getElementById("parent");

fetch("data.json")
    .then(res => res.json())
    .then(pictures => {
        console.log(pictures)
        // Populate images inside the slider
        let data = "";
        pictures.forEach(element => {
            data += `
                <img src="${element.img}" alt="Image" />
                
            `;
        });
        parent.innerHTML = data;

        // Slider functionality
        const sliderWrapper = document.querySelector(".slider-wrapper");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        let index = 0;
        const imageWidth = 300; // Width of a single image
        const maxIndex = pictures.length - Math.floor(1500 / imageWidth);

        function updateSlider() {
            sliderWrapper.style.transform = `translateX(${-index * imageWidth}px)`;
        }

        prevBtn.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateSlider();
               
            }
        });

        nextBtn.addEventListener("click", () => {
            if (index < maxIndex) {
                index++;
                updateSlider();
               
            }
        });
    });


    const parent2=document.getElementById("parent2");

fetch("data2.json")
    .then(res => res.json())
    .then(pictures => {
        console.log(pictures)
        // Populate images inside the slider
        let data = "";
        pictures.forEach(element => {
            data += `
                <img src="${element.img}" alt="Image" />
            `;
        });
        parent2.innerHTML = data;

        // Slider functionality
        const sliderWrapper = document.querySelector(".slider-wrapper2");
        const prevBtn = document.getElementById("prevBtn2");
        const nextBtn = document.getElementById("nextBtn2");

        let index = 0;
        const imageWidth = 300; // Width of a single image
        const maxIndex = pictures.length - Math.floor(1200 / imageWidth);

        function updateSlider() {
            sliderWrapper.style.transform = `translateX(${-index * imageWidth}px)`;
        }

        prevBtn.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateSlider();
               
            }
        });

        nextBtn.addEventListener("click", () => {
            if (index < maxIndex) {
                index++;
                updateSlider();
               
            }
        });
    });


    const parent3=document.getElementById("parent3");

fetch("data3.json")
    .then(res => res.json())
    .then(pictures => {
        console.log(pictures)
        // Populate images inside the slider
        let data = "";
        pictures.forEach(element => {
            data += `
                <img src="${element.img}" alt="Image" />
            `;
        });
        parent3.innerHTML = data;

        // Slider functionality
        const sliderWrapper = document.querySelector(".slider-wrapper3");
        const prevBtn = document.getElementById("prevBtn3");
        const nextBtn = document.getElementById("nextBtn3");

        let index = 0;
        const imageWidth = 300; // Width of a single image
        const maxIndex = pictures.length - Math.floor(1200 / imageWidth);

        function updateSlider() {
            sliderWrapper.style.transform = `translateX(${-index * imageWidth}px)`;
        }

        prevBtn.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateSlider();
                
               
            }
        });

        nextBtn.addEventListener("click", () => {
            if (index < maxIndex) {
                index++;
                updateSlider();
              
               
            }
        });
    });






    const parent4=document.getElementById("parent4");

// fetch("data4.json")
//     .then(res => res.json())
//     .then(pictures => {
//         // console.log(pictures)
//         // Populate images inside the slider
//         let data = "";
//         pictures.forEach((element,index) => {
//             data += ` <div class="slider-wrapper4" data-index="${index}">
//                 <img src="${element.img}" alt="Image" />
//                 </div>
//             `;
//         });
//         parent4.innerHTML = data;



//         let cards=document.querySelectorAll("#parent4 .slider-wrapper4");
//         console.log(cards)
//         cards.forEach((card)=>{
//             console.log(cards)
//             card.addEventListener('click',function(){
//                 let index=this.getAttribute("data-index");
//                 showPopUp(pictures[index]);
//             })
//         })

//         // Slider functionality
//         const sliderWrapper = document.querySelector(".slider-wrapper4");
//         const prevBtn = document.getElementById("prevBtn4");
//         const nextBtn = document.getElementById("nextBtn4");

//         let index = 0;
//         const imageWidth = 300; // Width of a single image
//         const maxIndex = pictures.length - Math.floor(1200 / imageWidth);

//         function updateSlider() {
//             sliderWrapper.style.transform = `translateX(${-index * imageWidth}px)`;
//         }

//         prevBtn.addEventListener("click", () => {
//             if (index > 0) {
//                 index--;
//                 updateSlider();
                
               
//             }
//         });

//         nextBtn.addEventListener("click", () => {
//             if (index < maxIndex) {
//                 index++;
//                 updateSlider();
              
               
//             }
//         });
//     });


// // pop up function declarationnnnnnn
    
// function showPopUp(data){
//     let popDiv=document.getElementById("popup");
//     let popTitle=document.getElementById("popTitle");
//     let popCast=document.getElementById("popCast");
//     let popGenre=document.getElementById("popGenre");
//     let popRd=document.getElementById("poprd");
//     let popImg=document.getElementById("popImg");
    

    
  
//     popTitle.textContent=data.title;
//     popImg.src=data.image;
//     popCast.textContent=data.cast;
//     popGenre.textContent=data.genre;
//     popRd.textContent=data.rd;
//     popDiv.style.display="flex";
//     document.getElementById("closepop").addEventListener('click',function(){
//         popDiv.style.display="none";
//     })

// }



fetch("data4.json")
  .then((res) => res.json())
  .then((pictures) => {
    let data = "";
    pictures.forEach((element, index) => {
      data += `<div class="slider-wrapper4" data-index="${index}">
                 <img src="${element.img}" alt="Image" />
               
               </div>`;
    });
    parent4.innerHTML = data;

    const cards = document.querySelectorAll("#parent4 .slider-wrapper4");
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        showPopUp(pictures[index]);
      });
    });
 
   // Slider functionality
        const sliderWrapper = document.querySelector(".slider-wrapper4");
        const prevBtn = document.getElementById("prevBtn4");
        const nextBtn = document.getElementById("nextBtn4");

        let index = 0;
        const imageWidth = 300; // Width of a single image
        const maxIndex = pictures.length - Math.floor(1200 / imageWidth);

        function updateSlider() {
            sliderWrapper.style.transform = `translateX(${-index * imageWidth}px)`;
        }

        prevBtn.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateSlider();
                
                
               
            }
        });

        nextBtn.addEventListener("click", () => {
            if (index < maxIndex) {
                index++;
                updateSlider();
              
               
            }
        });
    });
   

  function showPopUp(data) {
    let popVideo=document.getElementById("popVideo");
    let popDiv = document.getElementById("popup");
    let popTitle = document.getElementById("popTitle");
    let popCast = document.getElementById("popCast");
    let popGenre = document.getElementById("popGenre");
    let popRd = document.getElementById("poprd");
    // let popImg = document.getElementById("popImg");
  
    // Update the popup content
    popVideo.src=data.video || "video is missing"
    popTitle.textContent = data.name || "Title not available";
    // popImg.src = data.img || ""; // Use `img` instead of `image`
    popCast.textContent = data.starring || "Cast not available";
    popGenre.textContent = data.desc || "Genre not available";
    popRd.textContent = data.rd || "Release date not available";
  
    popDiv.style.display = "flex";
    document.getElementById("closepop").addEventListener("click", function () {
      popDiv.style.display = "none";
    });
  }
  