var list = []

function OrderProduct(order) {
    var id_product = order.getAttribute("id_product")
    var origin_product = order.getAttribute("origin")
    var quantity_product = 1
    var id_acc = order.getAttribute("id_acc")
    console.log(id_acc)
    let price = order.getAttribute("price").split("₫")
    let price1 = price[0].split(",")
    var price2 = ""
    var flag = false
    for (var j = 0; j < price1.length; j++) {
        price2 += price1[j]
    }
    if (list.length != 0) {
        for (var i = 0; i < list.length; i++) {

            if (id_product == list[i].id && origin_product == list[i].origin) {
                flag = true
                list[i].sl += 1
                var product = { sl: quantity_product }
                list.push(product)
                break
            }
        }
        if (flag == false) {

            var product = { id: id_product, origin: origin_product, sl: quantity_product, id_kh: id_acc, price: parseInt(price2) }
            list.push(product)
        }
    } else {
        var product = { id: id_product, origin: origin_product, sl: quantity_product, price: parseInt(price2) }
        list.push(product)
    }
}
var table

function Cart() {
    Total()
    console.log(list)
    var upload = document.getElementById('content')
    table = `<div class="cart">
            <div class="cart-form">
        <h1 class="cart__headline">Giỏ hàng</h1>
        <div class="cart--table" id="cart_table">
        <table>
        <thead>
        <tr>
        <th style="padding:10px;">Tên sản phẩm</th>
                            <th style="padding:10px;">Sản phẩm</th>
                            <th style="padding:10px;">Số lượng</th>
                            <th style="padding:10px;">Giá tiền</th>
                            <th style="padding:10px;">Xóa</th>
        </tr>
        </thead>`
    for (i = 0; i < list.length; i++) {
        url = urlOffice
        if (list[i].origin === "Office") {
            url = urlOffice
        }
        if (list[i].origin === "Gaming") {
            url = urlGaming
        }
        if (list[i].origin === "Keyboard") {
            url = urlKeyboard
        }
        if (list[i].origin === "Mouse") {
            url = urlMouse
        }
        if (list[i].origin === "Headphone") {
            url = urlHeadphone
        }
        let id_product1 = list[i].id
        var origin_product1 = list[i].origin
        var quantity_product1 = list[i].sl
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (j = 0; j < data.length; j++) {
                    if (data[j].id === id_product1) {
                        table += `<tbody>
                        <tr >
                        <td  id="tensp">${data[j].name}</td>
                        <td styles="padding-left=20px;"><img src="${data[j].img} id="image" ></td>
                        <td "><input type="number" name="quantity" value="${quantity_product1}" min="1" max="10" id="soluong" class="sl"  style="text-align:center;"</td>
                        <td id="giatien" class="price">${data[j].new_price}</td>
                        <td><button class="btn-remove" onclick="remove_Cart(this)"  id_product="${data[j].id}" origin="${origin_product1}" customer="">Xóa</button></td>
                    </tr>`
                        console.log(data[j].img)
                        break
                    }
                };
            })
        setTimeout(function() {}, 100)
    }
    var timeout = setTimeout(function() {
        table += `<tr>
        <td colspan="4">Tổng cộng</td>
        <td>${total}</td
            </tr>
    </tbody>
        </table>
        </div>
    <div class="cart__note">
        <div>
            <input type="text" class="cart__note--cartbox" name="cart__note--cartbox" placeholder="Ghi chú">
        </div>
        <div>
            <button class="cart__note--btn" id="notebox" onclick="Discharge()">Thanh toán</button>
        </div>
        </div>
        </div>
        </div>`
        upload.innerHTML = table
    }, 100)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function remove_Cart(item) {
    // var remove_cart = document.querySelectorAll(".btn-remove");
    var remove_cart = item.getAttribute("id_product")
    var origin = item.getAttribute("origin")
    for (var i = 0; i < list.length; i++) {
        if (remove_cart == list[i].id && origin == list[i].origin) {
            list.splice(i)
            Cart()
        }
    }
}
var urlDH = 'http://localhost:3000/DonHang';

function Discharge() {
    const DischargeButton = document.querySelector(".cart__note--btn")
    var id = document.customerForm.id.value
    console.log(id)
    var length1
    var ArrayProduct = []
    for (i = 0; i < list.length; i++) {
        ArrayProduct.push({
            id_sp: list[i].id,
            phanloai: list[i].origin,
            sl: list[i].sl,
            price: list[i].price

        })
    }
    fetch(urlDH)
        .then(res => res.json())
        .then(data => length1 = data.length)
    DischargeButton.addEventListener("click", event => {
        // length = data.length()

        const json = {
            id: length1 + 1,
            // id_kh: 
            chitietdh: ArrayProduct,
            tongcong: total

        }
        const post = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        }
        fetch(urlDH, post)
            .then(response => response.json())
            .then(data => console.log(data))
    })
}
let total

function Total() {
    total = 0
    for (i = 0; i < list.length; i++) {
        if (list[i].origin == "Office") {
            url = lapOfficeApi
        }
        if (list[i].origin == "Gaming") {
            url = lapGamingApi
        }
        if (list[i].origin == "Keyboard") {
            url = keyboardApi
        }
        if (list[i].origin == "Mouse") {
            url = mouseApi
        }
        if (list[i].origin == "Headphone") {
            url = headphoneApi
        }
        var sl_sp = list[i].sl
        total += list[i].price * sl_sp
    }
}