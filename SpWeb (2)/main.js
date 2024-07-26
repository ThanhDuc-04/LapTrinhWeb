
document.addEventListener('DOMContentLoaded', function() { // Chạy khi toàn bộ nội dung được tải
    chitiet();
    setupSlideShow();
    smoothScroll();
});

function chitiet(){
    const showBox = document.querySelectorAll('j.showBox');
    const closeBox = document.querySelectorAll('.closeBox');

    // Thêm sự kiện click cho tất cả các phần tử có class là .showBox
    showBox.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Ẩn tất cả các box-shadow khác
            document.querySelectorAll('.box-shadow').forEach(bs => {
                bs.style.display = 'none';
            });

            // Hiển thị box-shadow của phần tử cha đó
            const shadowBox = element.closest('.vien').querySelector('.box-shadow');
            shadowBox.style.display = 'flex';
        });
    });

    // Thêm sự kiện click cho tất cả các phần tử có class là .closeBox
    closeBox.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Ẩn box-shadow của phần tử cha đó
            const shadowBox = element.closest('.box-shadow');
            shadowBox.style.display = 'none';
        });
    });
}

    const listImage1 = document.querySelector('.list-img');
    const listImage2 = document.querySelector('.boc');
    const imgs1 = document.querySelectorAll('.list-img img');
    const imgs2 = document.querySelectorAll('.boc img');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    const btnLeft2 = document.querySelector('.btn-left2');
    const btnRight2 = document.querySelector('.btn-right2');
    let current1 = 0;
    let current2 = 0;
    const length1 = imgs1.length;
    const length2 = imgs2.length;
    const fixedWidth2 = 220; // Chiều rộng cố định cho slideshow thứ hai

    // Các hàm chính
    function changeSlide1() {
        if (current1 === length1 - 1) {
            current1 = 0;
            listImage1.style.transform = `translateX(0px)`;
        } else {
            current1++;
            let width = imgs1[0].offsetWidth;
            listImage1.style.transform = `translateX(${width * -1 * current1}px)`;
        }
    }

    function changeSlide2() {
        if (current2 === length2 - 5) {
            current2 = 0;
            listImage2.style.transform = `translateX(0px)`;
        } else {
            current2++;
            listImage2.style.transform = `translateX(${fixedWidth2 * -1 * current2}px)`;
        }
    }

    function setupSlideShow() {
        btnRight.addEventListener('click', () => {
            changeSlide1();
        });

        btnLeft.addEventListener('click', () => {
            if (current1 === 0) {
                current1 = length1 - 1;
                let width = imgs1[0].offsetWidth;
                listImage1.style.transform = `translateX(${width * -1 * current1}px)`;
            } else {
                current1--;
                let width = imgs1[0].offsetWidth;
                listImage1.style.transform = `translateX(${width * -1 * current1}px)`;
            }
        });

        btnRight2.addEventListener('click', () => {
            changeSlide2();
        });

        btnLeft2.addEventListener('click', () => {
            if (current2 === 0) {
                current2 = length2 - 1;
                listImage2.style.transform = `translateX(${fixedWidth2 * -1 * current2}px)`;
            } else {
                current2--;
                listImage2.style.transform = `translateX(${fixedWidth2 * -1 * current2}px)`;
            }
        });

        setInterval(changeSlide1, 3000);
        setInterval(changeSlide2, 3000);
    }

    function smoothScroll() {
        document.querySelectorAll('.tab a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    function chitiet() {
        const showBox = document.querySelectorAll('.hp');
        const closeBox = document.querySelectorAll('.closeBox');

        // Thêm sự kiện click cho tất cả các phần tử có class là .showBox
        showBox.forEach(element => {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                
                // Ẩn tất cả các box-shadow khác
                document.querySelectorAll('.box-shadow').forEach(bs => {
                    bs.style.display = 'none';
                });

                // Hiển thị box-shadow của phần tử cha đó
                const shadowBox = element.closest('.vien').querySelector('.box-shadow');
                shadowBox.style.display = 'flex';
            });
        });

        // Thêm sự kiện click cho tất cả các phần tử có class là .closeBox
        closeBox.forEach(element => {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                
                // Ẩn box-shadow của phần tử cha đó
                const shadowBox = element.closest('.box-shadow');
                shadowBox.style.display = 'none';
            });
        });
    }
   

    