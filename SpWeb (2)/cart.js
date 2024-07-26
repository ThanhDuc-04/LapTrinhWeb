const btn = document.querySelectorAll(".product-information .select .add button");

btn.forEach(function(button){
    button.addEventListener("click", function(event){
        var btnItem = event.target;
        var product = btnItem.closest(".product-information");
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        var productPrice = product.querySelector("span").innerText
        addcart(productImg,productName, productPrice)
    });
});

function addcart(productImg,productName, productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productN = document.querySelectorAll(".title")
        if(productN[i].innerHTML == productName){
            alert("Sản phẩm đã được thêm!")
            return
        }

    }
    var trcontent = '<tr><td style ="display: flex;align-items: center;"><img style = "width: 70px" src="'+productImg+'"><span class="title">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalB = 0
    //console.log(cartItem)
    for(var i=0;i<cartItem.length;i++){
        //console.log(i)
        var inputValue = cartItem[i].querySelector("input").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        //console.log(productPrice)
        var cleanedPrice = productPrice.replace(/\./g, "").replace(/[^0-9.-]+/g, "");
        //console.log("cleanedPrice);
        totalA = inputValue* cleanedPrice
        
        totalB = totalB + totalA
        //totalC = totalB.toLocaleString('de-DE')
    }
    var carttotal = document.querySelector(".price-total span")
    carttotal.innerText = totalB.toLocaleString('de-DE')
    //console.log(carttotal)
    inputChange()
}

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productDelete = document.querySelectorAll(".delete")
        //console.log(productDelete)
        productDelete[i].addEventListener("click" , function(event){
            var cartDelete = event.target
            var cartItem = cartDelete.parentElement.parentElement
            cartItem.remove()
            carttotal()
        })
    }
}

function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
        
    }
}

const cartshow = document.querySelector(".fa-bag-shopping")
cartshow.addEventListener("click", function(){
    document.querySelector(".cart").style.right ="0"
})
 // Thêm sự kiện cho nút "X" để đóng giỏ hàng
 document.querySelectorAll('.vcloseBox').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút
        document.querySelector(".cart").style.right = "-100%"; // Ẩn giỏ hàng
    });
});