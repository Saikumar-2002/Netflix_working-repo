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