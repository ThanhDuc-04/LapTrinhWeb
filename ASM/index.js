document.addEventListener("DOMContentLoaded", function() {
    const imgPosition = document.querySelectorAll(".container_slides img");
    const imgcontainer = document.querySelector('.container_slides');
    const dotItem = document.querySelectorAll(".dot");

    let index = 0;
    imgPosition.forEach(function(image, index){
        image.style.left = index * 100 + "%";
        if (dotItem[index]) {
            dotItem[index].addEventListener("click", function() {
                 slider(index);
            });
        }
    });

    function imgSlides(){
        index++;
        console.log(index);
        if(index >= imgPosition.length){    
            index = 0;
        }
        slider(index);
    }

    function slider(index){
        imgcontainer.style.left = "-" + index * 100 + "%";
        document.querySelector(".dot.dot_active").classList.remove("dot_active");
        dotItem[index].classList.add("active");
    }
    setInterval(imgSlides, 5000);
    dotItem[0].classList.add("active");
});



