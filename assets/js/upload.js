
const urlOffice="http://localhost:3000/Product_LaptopVanPhong"
const urlGaming="http://localhost:3000/Product_LaptopGaming"
const urlKeyboard="http://localhost:3000/Product_Keyboard"
const urlMouse="http://localhost:3000/Product_Mouses"
const urlHeadphone ='http://localhost:3000/Product_Headphone'

function UpLoad(product){
    getHomeHTML();
    var upload=document.getElementById('content')
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

    if(origin === "Headphone"){
        url = urlHeadphone
    }

    fetch(url)
        .then(response => response.json())
        .then(data =>{
        data.forEach(item => {
            if(item.id==id){
    upload.innerHTML=`<div id="content-productdetail" class="productdetails">
    <div class="productdetails__header">
        <div class="productdetails__header--information">
            <div class="productdetails__header--information--image" id="product--image">
                <div class="productdetails__header--information--image--item" id="image">
                    <div class="productdetails__header--information--image--item--image" id="image-1"><img src="${item.img}"/></div>
                    <div class="productdetails__header--information--image--item--image" id="image-2"><img class="product-detail_small-pic" src="${item.img_1}"/></div>
                    <div class="productdetails__header--information--image--item--image" id="image-3"><img class="product-detail_small-pic" src="${item.img_2}"/></div>
                    <div class="productdetails__header--information--image--item--image" id="image-4"><img class="product-detail_small-pic" src="${item.img_3}"/></div>
                    <div class="productdetails__header--information--image--item--image" id="image-5"><img class="product-detail_small-pic" src="${item.img_4}"/></div>
                    <div class="productdetails__header--information--image--item--image" id="image-6"><img class="product-detail_small-pic" src="${item.img_5}"/></div>
                    
                </div>
                <button class="productdetails__header--information--image--previous" onclick="PreviousImage()"><</button>
                <button class="productdetails__header--information--image--next" onclick="NextImage()">></button>
            </div>
            <div class="productdetails__header--information--content" id="product--content">
                <div class="productdetails__header--information--content--name" id="product-name">${item.name}</div>
                <div class="productdetails__header--information--content--info">
                    <span class="productdetails__header--information--content--info--details1">Thông tin chung: </span><br>
                    <span class="productdetails__header--information--content--info--details2">✔ Bảo hành chính hãng 12 tháng. </span><br>
                    <span class="productdetails__header--information--content--info--details2">✔ Hỗ trợ đổi mới trong 7 ngày. </span><br>
                    <span class="productdetails__header--information--content--info--details2">✔ Windows bản quyền tích hợp. </span><br>
                    <span class="productdetails__header--information--content--info--details2">✔ Miễn phí giao hàng toàn quốc. </span>
                </div>
                <div class="productdetails__header--information--content--price" id="product-price"><del>${item.old_price}</del><br>${item.new_price}</div>
                <div class="productdetails__header--information--content--order" onclick="OrderProduct()">Đặt hàng</div>
                </div>
                </div>
            </div>
            <div class="productdetails__details" id="productdetail">
                <h2> Thông số kỹ thuật </h2>
                <table class="productdetails__details--table" cellspacing="3" cellpadding="10" border="10" bordercolor="black" id="product--table">
                    <tr>
                        <td>CPU:</td>
                        <td>${item.CPU}</td>
                    </tr>
                    <tr>
                        <td>Ram:</td>
                        <td>${item.RAM}</td>
                    </tr>
                    <tr>
                        <td>Ổ cứng:</td>
                        <td>${item.Hardware}</td>
                    </tr>
                    <tr>
                        <td>Card đồ họa:</td>
                        <td>${item.Card}</td>
                    </tr>
                    <tr>
                        <td>Màn hình:</td>
                        <td>${item.screen}</td>
                    </tr>
                    <tr>
                        <td>Cổng giao tiếp:</td>
                        <td>${item.CGT}</td>
                    </tr>
                    <tr>
                        <td>Audio:</td>
                        <td>${item.Audio}</td>
                    </tr>
                    <tr>
                        <td>Bàn phím:</td>
                        <td>${item.keyboard}</td>
                    </tr>
                    <tr>
                        <td>Đọc thẻ nhớ:</td>
                        <td>${item.SDcard}</td>
                    </tr>
                    <tr>
                        <td>Bluetooth:</td>
                        <td>${item.Bluetooth}</td>
                    </tr>
                    <tr>
                        <td>Webcam:</td>
                        <td>${item.Webcam}</td>
                    </tr>
                    <tr>
                        <td>Hệ điều hành:</td>
                        <td>${item.OS}</td>
                    </tr>
                    <tr>
                        <td>Pin:</td>
                        <td>${item.Pin}</td>
                    </tr>
                    <tr>
                        <td>Trọng lượng:</td>
                        <td>${item.Weigth}</td>
                    </tr>
                    <tr>
                        <td>Màu sắc:</td>
                        <td>${item.Color}</td>
                    </tr>
                    <tr>
                        <td>Kích thước:</td>
                        <td>${item.size}</td>
                    </tr>
                </table>
            </div>
        </div>`
    }
        });
    })

    //scroll lên đầu trang
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Code Product cua Huy

// const urlOffice = "http://localhost:3000/Product_LaptopVanPhong"
// const urlGaming = "http://localhost:3000/Product_LaptopGaming"
// const urlKeyboard = "http://localhost:3000/Product_Keyboard"
// const urlMouse = "http://localhost:3000/Product_Mouses"

// function UpLoad(product) {
//     var upload = document.getElementById('content-home')
//     var id = product.getAttribute("value")
//     var origin = product.getAttribute("origin")
//     if (origin === "Office") {
//         url = urlOffice
//     }
//     if (origin === "Gaming") {
//         url = urlGaming
//     }
//     if (origin === "Keyboard") {
//         url = urlKeyboard
//     }
//     if (origin === "Mouse") {
//         url = urlMouse
//     }
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(item => {
//                 if (item.id == id) {
//                     var str = `<div class="productdetails">
//     <div class="productdetails__header">
//         <div class="productdetails__header--information">
//             <div class="productdetails__header--information--image" id="product--image">
//                 <div class="productdetails__header--information--image--item" id="image">
//                     <div class="productdetails__header--information--image--item--image" id="image-1" style="background-image: url('${item.img}') ;"></div>
//                     <div class="productdetails__header--information--image--item--image" id="image-2"></div>
//                     <div class="productdetails__header--information--image--item--image" id="image-3"></div>
//                     <div class="productdetails__header--information--image--item--image" id="image-4"></div>
//                     <div class="productdetails__header--information--image--item--image" id="image-5"></div>
//                     <div class="productdetails__header--information--image--item--image" id="image-6"></div>
//                 </div>
//                 <button class="productdetails__header--information--image--previous" onclick="PreviousImage()"><</button>
//                 <button class="productdetails__header--information--image--next" onclick="NextImage()">></button>
//             </div>
//             <div class="productdetails__header--information--content" id="product--content">
//                 <div class="productdetails__header--information--content--name" id="product-name">${item.name}</div>
//                 <div class="productdetails__header--information--content--info">
//                     <span class="productdetails__header--information--content--info--details1">Thông tin chung: </span><br>
//                     <span class="productdetails__header--information--content--info--details2">Bảo hành</span><br>
//                     <span class="productdetails__header--information--content--info--details2">Hãng</span><br>
//                     <span class="productdetails__header--information--content--info--details2">Window bản quyền</span>
//                 </div>
//                 <div class="productdetails__header--information--content--price" id="product-price"><del>${item.old_price}</del><br>${item.new_price}</div>
//                 <div class="productdetails__header--information--content--order" id="Order" id_product="${item.id}" origin="` + origin + `" onclick="OrderProduct(this)">Đặt hàng</div>
//                 </div>
//                 </div>
//             </div>
//             <div class="productdetails__details" id="productdetail">Thông số kỹ thuật
//                 <table class="productdetails__details--table" cellspacing="3" cellpadding="10" border="10" bordercolor="black" id="product--table">`
//                     var arr = ["id", "name", "img"]
//                     var des = ["description_1", "description_2", "description_3", "description_4", "description_5", "description_6"]
//                     for (key in item) {
//                         if (key == "new_productt_percent") {
//                             break
//                         }
//                         if (key == "description_1") {
//                             str += "</table>"
//                         }
//                         if (des.includes(key)) {
//                             var infor = item[key].split("/")
//                             str += `<div><b>` + infor[0] + `</b>`
//                             for (i = 1; i < infor.length; i++) {
//                                 str += `<div>` + infor[i] + `</div>`
//                             }
//                             str += `</div>`
//                         }
//                         if (!(arr.includes(key) || des.includes(key))) {
//                             var s = `<tr><td>` + key + `</td><td>` + item[key] + `</td></tr>`
//                             str += s
//                         }
//                     }
//                     str += `</div></div>`

//                     upload.innerHTML = str
//                 }
//             });
//         })
// }

//Xử lý giỏ hàng của Phúc
// var list = []

// function OrderProduct(order) {
//     var id_product = order.getAttribute("id_product")
//     var origin_product = order.getAttribute("origin")
//     var product = { id: id_product, origin: origin_product }
//     list.push(product)
//     console.log(list)
// }

// function Cart() {
//     console.log(list)
//     var upload = document.getElementById('content-home')
//     var str = `<div class="cart">
//          <div class="cart-form">
//     <h1 class="cart__headline">Giỏ hàng</h1>
//     <div class="cart--table">
//         <table>
//         <thead>
//         <tr>
//             <th>Sản phẩm</th>
//             <th>Tên sản phẩm</th>
//             <th>Số lượng</th>
//             <th>Giá tiền</th>
//             <th>Xóa</th>
//         </tr>
//         </thead>`
//     for (i = 0; i < list.length; i++) {
//         if (list[i].origin === "Office") {
//             url = urlOffice
//         }
//         if (list[i].origin === "Gaming") {
//             url = urlGaming
//         }
//         if (list[i].origin === "Keybroad") {
//             url = urlKeyboard
//         }
//         if (list[i].origin === "Mouse") {
//             url = urlMouse
//         }
//         console.log(list)
//         fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(i)
//                 for(j=0;j<data.length;j++){
//                     if (data[j].id === list[i-1].id) {
//                         str += `<tbody>
//                             <tr>
//                         <td>${data[j].img}</td>
//                         <td>${data[j].name}</td>
//                         <td></td>
//                         <td>${data[j].new_price}</td>
//                         <td><button>Xóa</button></td>
//                     </tr>`


//                     }
//                 };
//             })
//     }
//     str += `<tr>
//         <td colspan="4">Tổng cộng</td>
//         <td colspan="2"></td>
//             </tr>
//             </tbody>
//         </table>
//         </div>
//     <div class="cart__note">
//         <div>
//             <input type="text" class="cart__note--cartbox" name="cart__note--cartbox" placeholder="Ghi chú">
//         </div>
//         <div>
//             <button class="cart__note--btn">Thanh toán</button>
//         </div>
//         </div>
//         </div>
//         </div>`
//     upload.innerHTML = str
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }