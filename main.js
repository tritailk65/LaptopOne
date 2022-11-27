function SignUpOpen() {
    var textHTLM = '<form class="sign-up-form" name="SignUpForm"> \
    <div onclick="SignUpClose()" class="sign-up_close-btn btn">x</div>\
    <div class="sign-up-form_label">ĐĂNG NHẬP VÀO TÀI KHOẢN</div>\
    <div class="form-group">\
        <label for="uname" class="form-label">Tên đăng nhập hoặc Email</label>\
        <br>\
        <input class="form-input" id="uname" name="uname" type="text" placeholder="Nhập vào tên tài khoản hoặc Email">\
        <br>\
        <span class="form-message"></span>\
    </div>\
    <div class="form-group">\
        <label for="pwd" class="form-label">Mật khẩu</label>\
        <br>\
        <input class="form-input" id="pwd" name="pwd" type="password" placeholder="Nhập vào mật khẩu">\
        <br>\
        <span class="form-message"></span>\
    </div>\
    <div class="form-group">\
        <input id="checkbox" name="checkbox" type="checkbox">Remember me\
        <a href="" class="forgot-pwd">Forgot Password?</a>\
    </div>\
    <div class="sign-up_control">\
        <div class="sign-up_btn btn" onclick="SignUp()">Đăng nhập</div>\
        <div class="register">\
            <p class="register_txt">Chưa có tài khoản</p>\
            <i class="fa-solid fa-arrow-right"></i>\
            <div onclick="RegisterOpen()" class="rigister_btn btn">Đăng ký</div>\
        </div>\
    </div>\
</form>';
    document.getElementById('modal').innerHTML = textHTLM;
    document.querySelector('.modal').style.display = "block";
    document.querySelector('.sign-up-form').style.display = "block";
}

function SignUpClose() {
    document.querySelector('.modal').style.display = 'none';
}

function RegisterOpen() {
    var textHTLM = '<form class="register-form" name="RegisterForm">\
    <div onclick="RegisterClose()" class="sign-up_close-btn btn">x</div>\
    <div class="register_label">ĐĂNG KÝ TÀI KHOẢN MỚI</div>\
    <div class="form-group">\
        <label for="uname" class="form-label">Tên đăng nhập hoặc Email</label>\
        <br>\
        <input class="form-input" id="uname" name="uname" type="text" placeholder="Nhập vào tên tài khoản hoặc Email">\
        <br>\
        <span class="form-message"></span>\
    </div>\
    <div class="form-group">\
        <label for="pwd" class="form-label">Mật khẩu</label>\
        <br>\
        <input class="form-input" id="pwd" name="pwd" type="password" placeholder="Nhập mật khẩu">\
        <br>\
        <span class="form-message"></span>\
    </div>\
    <div class="form-group">\
        <label for="pwd" class="form-label">Nhập lại mật khẩu</label>\
        <br>\
        <input class="form-input" id="repwd" name="repwd" type="password" placeholder="Nhập lại mật khẩu">\
        <br>\
        <span class="form-message"></span>\
    </div>\
    <div class="form-group">\
        <p class="register_privacy">Bằng việc đăng ký, bạn đã đồng ý với <a href="">Điều khoản dịch vụ</a> & <a href="">Chính sách bảo mật</a></p>\
    </div>\
    <div class="sign-up_control">\
        <div class="sign-up_btn btn" onclick="Register()">Đăng ký</div>\
        <div class="register">\
            <p class="register_txt">Đã có tài khoản</p>\
            <i class="fa-solid fa-arrow-right"></i>\
            <div onclick="SignUpOpenFromRegister()" class="rigister_btn btn">Đăng nhập</div>\
        </div>\
    </div>\
    </form>';
    document.getElementById('modal').innerHTML = textHTLM;
    document.querySelector('.register-form').style.display = 'block';
}

function RegisterClose() {
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
}

function SignUpOpenFromRegister() {
    SignUpOpen();
}

var lapOfficeApi = 'http://localhost:3000/Product_LaptopVanPhong';
var lapGamingApi = 'http://localhost:3000/Product_LaptopGaming';
var keyboardApi = 'http://localhost:3000/Product_Keyboard';
var mouseApi = 'http://localhost:3000/Product_Mouses';
var home = " http://localhost:3000"
var userURL = "http://localhost:3000/Account"
start()

function start() {
    getProductLapOffice(renderProductLapOffice)
    getProductLapGaming(renderProductLapGaming)
    getProductKeyboards(renderKeyboards)
    getProductMouses(renderMouses)
}

function getProductLapOffice(callback) {
    fetch(lapOfficeApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function renderProductLapOffice(Products) {
    var listProduct = document.getElementById('LapVanPhong_Recommend');
    var htmls = Products.map(function(product) {
        return `<div class="product-detail" value="${product.id}" origin="Office" onclick="UpLoad(this)">
            <div class="new-product-img">
                <img class="new-product-thumbnail"
                src="${product.img}" alt="" />
            </div>
            <div class="new-product-percent">${product.new_productt_percent}</div>               
            <h2 class="new-product-name">${product.name}</h2>
            <del>${product.old_price}</del><br/>
            <span class="new-product-sale">${product.new_price}</span>
            </div>`;
    });
    listProduct.innerHTML = htmls.join("");
}

function getProductLapGaming(callback) {
    fetch(lapGamingApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function renderProductLapGaming(Products) {
    var listProduct = document.getElementById('LapGaming_Recommend');
    var htmls = Products.map(function(product) {
        return `<div class="product-detail" value="${product.id}" origin="Gaming" onclick="UpLoad(this)">
            <div class="new-product-img">
                <img class="new-product-thumbnail"
                src="${product.img}" alt="" />
            </div>
            <div class="new-product-percent">${product.new_productt_percent}</div>               
            <h2 class="new-product-name">${product.name}</h2>
            <del>${product.old_price}</del><br/>
            <span class="new-product-sale">${product.new_price}</span>
            </div>`;
    });
    listProduct.innerHTML = htmls.join("");
}

function getProductKeyboards(callback) {
    fetch(keyboardApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function renderKeyboards(Products) {
    var listProduct = document.getElementById('Keyboard_Recommend');
    var htmls = Products.map(function(product) {
        return `<div class="product-detail" value="${product.id}" origin="Keyboard" onclick="UpLoad(this)">
            <div class="new-product-img">
                <img class="new-product-thumbnail"
                src="${product.img}" alt="" />
            </div>
            <div class="new-product-percent">${product.new_productt_percent}</div>               
            <h2 class="new-product-name">${product.name}</h2>
            <del>${product.old_price}</del><br/>
            <span class="new-product-sale">${product.new_price}</span>
            </div>`;
    });
    listProduct.innerHTML = htmls.join("");
}

function getProductMouses(callback) {
    fetch(mouseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function renderMouses(Products) {
    var listProduct = document.getElementById('Mouse_Recommend');
    var htmls = Products.map(function(product) {
        return `<div class="product-detail" value="${product.id}" origin="Mouse" onclick="UpLoad(this)">
            <div class="new-product-img">
                <img class="new-product-thumbnail"
                src="${product.img}" alt="" />
            </div>
            <div class="new-product-percent">${product.new_productt_percent}</div>               
            <h2 class="new-product-name">${product.name}</h2>
            <del>${product.old_price}</del><br/>
            <span class="new-product-sale">${product.new_price}</span>
            </div>`;
    });
    listProduct.innerHTML = htmls.join("");
}

function containerHomeClose() {
    var htmls = '<div class="productdetails">\
                <div class="productdetails__header">\
                    <div class="productdetails__header--information">\
                        <div class="productdetails__header--information--image" id="product--image"></div>\
                        <div class="productdetails__header--information--content" id="product--content"></div>\
                    </div>\
                </div>\
                <div class="productdetails__detailss" id="productdetail"></div>\
            </div>';
    document.getElementById('content-home').style.display = 'none';
    document.getElementById('content-productdetails').style.display = 'block'
}

function Register() {
    var usertxt = document.RegisterForm.uname
    var user = usertxt.value
    var flag = false
    var length
    fetch(userURL)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                if (item.Username === user) {
                    alert("Tài khoản đã tồn tại")
                    flag = true
                }

            });
            length = data.length()
        })
    if (flag === false) {
        var passtxt = document.RegisterForm.pwd.value
        var repasstxt = document.RegisterForm.repwd.value
        var pass = passtxt.value
        var repass = repasstxt.value
        if (user.trim() == "" || pass.trim() == "" || repass.trim() == "") {
            if (user.trim() == "") {
                alert("Hãy điền tên tài khoản")
                user.focus()
            }
            if (pass.trim() == "") {
                alert("Hãy điền mật khẩu")
                pass.focus()
            }
            if (repass.trim() == "") {
                alert("Hãy điền lại mật khẩu")
                repass.focus()
            }
        } else if (pass === repass) {
            const json = {
                id: length + 1,
                Username: user,
                Password: pass,
                Permission: 'Customer'
            }
            const post = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            }
            fetch(userURL, post)
                .then(response => response.json())
                .then(data => console.log(data))
            document.querySelector('.register-form').style.display = 'none';
            document.querySelector('.modal').style.display = 'none';
            alert("Đăng ký thành công")
        } else {
            alert("Mật khẩu không trùng khớp")
        }
    }
}

function SignUp() {
    var user = document.SignUpForm.uname.value
    var pass = document.SignUpForm.pwd.value
    var flag = false
    fetch(userURL)
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                if (data[i].Username == user && data[i].Password == pass && data[i].Permission == "Admin") {
                    document.querySelector('.modal').style.display = 'none';
                    var str = `<div class="navbar__user-item navbar__user-item-txt navbar__user-order">
                        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
                        Tra cứu đơn hàng
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-id" value="${data[i].Username}">
                        <i class="navbar__user-icon fa-solid fa-user"></i><a href="" target="_blank" id="admin">
                        ${data[i].Permission}</a>
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-cart" onclick="Cart()">
                        <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
                        Giỏ hàng
                    </div>`
                    document.getElementById("User").innerHTML = str;
                    alert("Chào mừng " + data[i].Username)
                    flag = true
                    break
                } else if (data[i].Username == user && data[i].Password == pass && data[i].Permission == "Customer") {
                    document.querySelector('.modal').style.display = 'none';
                    var str = `<div class="navbar__user-item navbar__user-item-txt navbar__user-order">
                        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
                        Tra cứu đơn hàng
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-id" value="${data[i].Username}">
                        <i class="navbar__user-icon fa-solid fa-user"></i>
                        ${data[i].Username}
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-cart" onclick="Cart()">
                        <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
                        Giỏ hàng
                    </div>`
                    document.getElementById("User").innerHTML = str;
                    alert("Chào mừng " + data[i].Username)
                    flag = true
                    break
                }
            }
            if (flag === false) {
                alert("Thông tin đăng nhập không đúng")
            }
        })
}

function LogOut() {
    var str = `<div class="navbar__user-item navbar__user-item-txt navbar__user-order">
        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
        Tra cứu đơn hàng
        </div>
        <div class="navbar__user-item navbar__user-item-txt navbar__user-id" value="">
            <i class="navbar__user-icon fa-solid fa-user"></i><a href="" target="_blank"</a>
            Tài khoản của tôi
        </div>
        <div class="navbar__user-item navbar__user-item-txt navbar__user-cart">
            <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
            Giỏ hàng
        </div>`
    document.getElementById("User").innerHTML = str;
}



//Gôm file upload.js

const urlOffice = "http://localhost:3000/Product_LaptopVanPhong"
const urlGaming = "http://localhost:3000/Product_LaptopGaming"
const urlKeyboard = "http://localhost:3000/Product_Keyboard"
const urlMouse = "http://localhost:3000/Product_Mouses"

function UpLoad(product) {
    var upload = document.getElementById('content-home')
    var id = product.getAttribute("value")
    var origin = product.getAttribute("origin")
    if (origin === "Office") {
        url = urlOffice
    }
    if (origin === "Gaming") {
        url = urlGaming
    }
    if (origin === "Keyboard") {
        url = urlKeyboard
    }
    if (origin === "Mouse") {
        url = urlMouse
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                if (item.id == id) {
                    var str = `<div class="productdetails">
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
                <div class="productdetails__header--information--content--order" id="Order" id_product="${item.id}" origin="` + origin + `" onclick="OrderProduct(this)">Đặt hàng</div>
                </div>
                </div>
            </div>
            <div class="productdetails__details" id="productdetail">Thông số kỹ thuật
                <table class="productdetails__details--table" cellspacing="3" cellpadding="10" border="10" bordercolor="black" id="product--table">`
                    var arr = ["id", "name", "img"]
                    var des = ["description_1", "description_2", "description_3", "description_4", "description_5", "description_6"]
                    for (key in item) {
                        if (key == "new_productt_percent") {
                            break
                        }
                        if (key == "description_1") {
                            str += "</table>"
                        }
                        if (des.includes(key)) {
                            var infor = item[key].split("/")
                            str += `<div><b>` + infor[0] + `</b>`
                            for (i = 1; i < infor.length; i++) {
                                str += `<div>` + infor[i] + `</div>`
                            }
                            str += `</div>`
                        }
                        if (!(arr.includes(key) || des.includes(key))) {
                            var s = `<tr><td>` + key + `</td><td>` + item[key] + `</td></tr>`
                            str += s
                        }
                    }
                    str += `</div></div>`

                    upload.innerHTML = str
                }
            });
        })
}
//Xử lý giỏ hàng của Phúc
var list = []

function OrderProduct(order) {
    var id_product = order.getAttribute("id_product")
    var origin_product = order.getAttribute("origin")
    var product = { id: id_product, origin: origin_product }
    list.push(product)
    console.log(list)
}

function Cart() {
    console.log(list)
    var upload = document.getElementById('content-home')
    var str = `<div class="cart">
         <div class="cart-form">
    <h1 class="cart__headline">Giỏ hàng</h1>
    <div class="cart--table">
        <table>
        <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá tiền</th>
            <th>Xóa</th>
        </tr>
        </thead>`
    for (i = 0; i < list.length; i++) {
        if (list[i].origin === "Office") {
            url = urlOffice
        }
        if (list[i].origin === "Gaming") {
            url = urlGaming
        }
        if (list[i].origin === "Keybroad") {
            url = urlKeyboard
        }
        if (list[i].origin === "Mouse") {
            url = urlMouse
        }
        console.log(list)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(i)
                for(j=0;j<data.length;j++){
                    if (data[j].id === list[i-1].id) {
                        str += `<tbody>
                            <tr>
                        <td>${data[j].img}</td>
                        <td>${data[j].name}</td>
                        <td></td>
                        <td>${data[j].new_price}</td>
                        <td><button>Xóa</button></td>
                    </tr>`


                    }
                };
            })
    }
    str += `<tr>
        <td colspan="4">Tổng cộng</td>
        <td colspan="2"></td>
            </tr>
            </tbody>
        </table>
        </div>
    <div class="cart__note">
        <div>
            <input type="text" class="cart__note--cartbox" name="cart__note--cartbox" placeholder="Ghi chú">
        </div>
        <div>
            <button class="cart__note--btn">Thanh toán</button>
        </div>
        </div>
        </div>
        </div>`
    upload.innerHTML = str
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}