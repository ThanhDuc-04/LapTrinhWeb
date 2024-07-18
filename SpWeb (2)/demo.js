/**document.addEventListener('DOMContentLoaded', () => {
    const sp = document.querySelectorAll('.sanpham');
    const sp1 = document.querySelectorAll('.sanpham_hp');
    const tab = document.querySelectorAll('.tab');
    const id = document.querySelectorAll('.name');
    const showBox = document.querySelectorAll('.showBox');
    const closeBox = document.querySelectorAll('.closeBox');
    const boxShadow = document.querySelectorAll('.box-shadow'); // Đổi tên class ở đây

    // Thêm sự kiện click cho tất cả các phần tử có class là .showBox
    showBox.forEach(element => {
        element.addEventListener('click', function() {
            boxShadow.forEach(bs => {
                bs.style.display = 'block'; // Hiển thị box-shadow
            });
            sp.forEach(element => {
                element.style.display = 'none';
            });
            sp1.forEach(element => {
                element.style.display = 'none';
            });
            tab.forEach(element => {
                element.style.display = 'none';
            });
            id.forEach(element => {
                element.style.display = 'none';
            });
        });
    });

    // Thêm sự kiện click cho tất cả các phần tử có class là .closeBox
    closeBox.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            boxShadow.forEach(bs => {
                bs.style.display = 'none'; // Ẩn box-shadow
            });
            sp.forEach(element => {
                element.style.display = 'flex';
            });
            sp1.forEach(element => {
                element.style.display = 'flex';
            });
            tab.forEach(element => {
                element.style.display = 'flex';
            });
            id.forEach(element => {
                element.style.display = 'flex';
            });
        });
    });
}); */


document.addEventListener('DOMContentLoaded', function() { // Chạy khi toàn bộ nội dung được tải
    chitiet();
});

function chitiet(){
    const showBox = document.querySelectorAll('.showBox');
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