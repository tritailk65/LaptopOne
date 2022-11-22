const urlOffice="http://localhost:3000/Product_LaptopVanPhong"
const urlGaming="http://localhost:3000/Product_LaptopGaming"
const urlKeyboard="http://localhost:3000/Product_Keyboard"
const urlMouse="http://localhost:3000/Product_Mouses"
function UpLoad(product){
    var upload=document.getElementById('uploaddata')
    var id=product.getAttribute("value")
    var origin=product.getAttribute("origin")
    if(origin==="Office"){
        url=urlOffice
    }
    if(origin==="Gaming"){
        url=urlGaming
    }
    if(origin==="Keyboard"){
        url=urlKeyboard
    }
    if(origin==="Mouse"){
        url=urlMouse
    }
    fetch(url)
        .then(response => response.json())
        .then(data =>{
        data.forEach(item => {
            if(item.id==id){
    upload.innerHTML=`<div class="productdetails">
    <div class="productdetails__header">
        <div class="productdetails__header--information">
            <div class="productdetails__header--information--image" id="product--image">
                <div class="productdetails__header--information--image--item" id="image">
                    <div class="productdetails__header--information--image--item--image" id="image-1" style="background-image: url('${item.img}') ;"></div>
                    <div class="productdetails__header--information--image--item--image" id="image-2"></div>
                    <div class="productdetails__header--information--image--item--image" id="image-3"></div>
                    <div class="productdetails__header--information--image--item--image" id="image-4"></div>
                    <div class="productdetails__header--information--image--item--image" id="image-5"></div>
                    <div class="productdetails__header--information--image--item--image" id="image-6"></div>
                </div>
                <button class="productdetails__header--information--image--previous" onclick="PreviousImage()"><</button>
                <button class="productdetails__header--information--image--next" onclick="NextImage()">></button>
            </div>
            <div class="productdetails__header--information--content" id="product--content">
                <div class="productdetails__header--information--content--name" id="product-name">${item.name}</div>
                <div class="productdetails__header--information--content--info">
                    <span class="productdetails__header--information--content--info--details1">Thông tin chung: </span><br>
                    <span class="productdetails__header--information--content--info--details2">Bảo hành</span><br>
                    <span class="productdetails__header--information--content--info--details2">Hãng</span><br>
                    <span class="productdetails__header--information--content--info--details2">Window bản quyền</span>
                </div>
                <div class="productdetails__header--information--content--price" id="product-price"><del>${item.old_price}</del><br>${item.new_price}</div>
                <div class="productdetails__header--information--content--order" onclick="OrderProduct()">Đặt hàng</div>
                </div>
                </div>
            </div>
            <div class="productdetails__details" id="productdetail">Thông số kỹ thuật
                <table class="productdetails__details--table" cellspacing="3" cellpadding="10" border="10" bordercolor="black" id="product--table">
                    <tr>
                        <td>CPU:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ram:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ổ cứng:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Card đồ họa:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Màn hình:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cổng giao tiếp:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Audio:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bàn phím:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Đọc thẻ nhớ:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bluetooth:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Webcam:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hệ điều hành:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Pin:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Trọng lượng:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Màu sắc:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Kích thước:</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>`
    }
        });
    })
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function upload(){
    const str =
    "<div class='productdetails'>\
    <div class='productdetails__header'>\
    <div class='productdetails__header--information'>\
    <div class='productdetails__header--information--image' id='product--image'>\
    </div>\
    <div class='productdetails__header--information--content' id='product--content'>\
    </div>\
    </div>\
    </div>\
    <div class='productdetails__details' id='productdetail'>\
    </div>\
    </div>";
    document.getElementById('uploaddata').innerHTML=str;
}
function getProduct(callback,product){
    var origin = product.getAttribute("origin")
    if(origin.equals("Office")){
    fetch(urlOffice)
        .then(response => response.json())
        .then(callback(id))
    }
    if(origin.equals("Gaming")){
    fetch(urlGaming)
        .then(response => response.json())
        .then(callback)
    }
    if(origin.equals("Keybroad")){
    fetch(urlKeyboard)
        .then(response => response.json())
        .then(callback)
    }
    if(origin.equals("Mouse")){
    fetch(urlMouse)
        .then(response => response.json())
        .then(callback)
    }
}