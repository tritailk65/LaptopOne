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

function RegisterClose(){
    document.querySelector('.register-form').style.display='none';
    document.querySelector('.modal').style.display='none';
}

function SignUpOpenFromRegister(){
    SignUpOpen();
}

var lapOfficeApi = 'http://localhost:3000/Product_LaptopVanPhong';
var lapGamingApi = 'http://localhost:3000/Product_LaptopGaming';
var keyboardApi = 'http://localhost:3000/Product_Keyboard';
var mouseApi = 'http://localhost:3000/Product_Mouses';
var headphoneApi = 'http://localhost:3000/Product_Headphone';
var userURL = "http://localhost:3000/Account";

Section_Gaming_1 = () => {
    getProductLapGaming(renderProductLapGamingPage1);
}

Section_Gaming_2 = () => {
    getProductLapGaming(renderProductLapGamingPage2);
}

Section_Gaming_3 = () => {
    getProductLapGaming(renderProductLapGamingPage3);
}

Section_Office_1 = () => {
    getProductLapOffice(renderProductLapOffice1);
}

Section_Office_2 = () => {
    getProductLapOffice(renderProductLapOffice2);
}

Section_Office_3 = () => {
    getProductLapOffice(renderProductLapOffice3);
}

Section_Keyboard_1 = () => {
    getProductKeyboards(renderKeyboards1);
}

Section_Keyboard_2 = () => {
    getProductKeyboards(renderKeyboards2);
}

Section_Keyboard_3 = () => {
    getProductKeyboards(renderKeyboards3);
}

Section_Mouses_1 = () => {
    getProductMouses(renderMouses1);
}

Section_Mouses_2 = () => {
    getProductMouses(renderMouses2);
}

Section_Mouses_3 = () => {
    getProductMouses(renderMouses3);
}

Section_Headphones_1 = () => {
    getProductHeadphones(renderHeadphones1);
}

Section_Headphones_2 = () => {
    getProductHeadphones(renderHeadphones2);
}

Section_Headphones_3 = () => {
    getProductHeadphones(renderHeadphones3);
}

start()

function start() {
    getProductLapOffice(renderProductLapOffice1)
    getProductLapGaming(renderProductLapGamingPage1)
    getProductKeyboards(renderKeyboards1)
    getProductMouses(renderMouses1)
    getProductHeadphones(renderHeadphones1)

    //Phần reset lại web mà tài khoản ko bị mất
    // localStorage.removeItem("username")
    // localStorage.removeItem("id")
    let account=localStorage.getItem("username")
    let id=localStorage.getItem("id")
    setAccount(account,id)
}


function getProductLapOffice(callback) {
    fetch(lapOfficeApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderProductLapOffice1(Products){
    var listProduct = document.getElementById('LapVanPhong_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id<=10)
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

function renderProductLapOffice2(Products){
    var listProduct = document.getElementById('LapVanPhong_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id >10 && product.id<=20)
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

function renderProductLapOffice3(Products){
    var listProduct = document.getElementById('LapVanPhong_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id >20 && product.id<=30)
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
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderProductLapGamingPage1(Products){
    var listProduct = document.getElementById('LapGaming_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id <=10)
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

function renderProductLapGamingPage2(Products){
    var listProduct = document.getElementById('LapGaming_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id >10 && product.id <=20)
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

function renderProductLapGamingPage3(Products){
    var listProduct = document.getElementById('LapGaming_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id >20 && product.id<=30)
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
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderKeyboards1(Products){
    var listProduct = document.getElementById('Keyboard_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id<=10)
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

function renderKeyboards2(Products){
    var listProduct = document.getElementById('Keyboard_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id >10 && product.id<=20)
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

function renderKeyboards3(Products){
    var listProduct = document.getElementById('Keyboard_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id >20 && product.id<=30)
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
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderMouses1(Products){
    var listProduct = document.getElementById('Mouse_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id <= 10)
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

function renderMouses2(Products){
    var listProduct = document.getElementById('Mouse_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id >10 && product.id <= 20)
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

function renderMouses3(Products){
    var listProduct = document.getElementById('Mouse_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id > 20 && product.id <= 30)
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

function getProductHeadphones(callback) {
    fetch(headphoneApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderHeadphones1(Products){
    var listProduct = document.getElementById('Headphone_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id <= 10)
        return `<div class="product-detail" value="${product.id}" origin="Headphone" onclick="UpLoad(this)">
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

function renderHeadphones2(Products){
    var listProduct = document.getElementById('Headphone_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id > 10 && product.id <=20)
        return `<div class="product-detail" value="${product.id}" origin="Headphone" onclick="UpLoad(this)">
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

function renderHeadphones3(Products){
    var listProduct = document.getElementById('Headphone_Recommend');
    var htmls = Products.map(function (product) {
        if(product.id > 20 && product.id<=30)
        return `<div class="product-detail" value="${product.id}" origin="Headphone" onclick="UpLoad(this)">
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

function Register() {
    var usertxt = document.RegisterForm.uname
    var user = usertxt.value
    var pass = document.RegisterForm.pwd.value
    var repass = document.RegisterForm.repwd.value
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
            length = data.length
            setTimeout(() => {
                if (flag === false) {
                    if (user == ""&&pass==""&&repass=="") {
                        alert("Hãy điền đầy đủ thông tin")}
                    else if (user== "") {
                            alert("Hãy điền tên tài khoản")
                        }
                    else if (pass== "") {
                            alert("Hãy điền mật khẩu")
                        }
                    else if (repass== "") {
                            alert("Hãy điền lại mật khẩu")
                        }
                    else if (pass === repass) {
                        const json = {
                            id: length + 1,
                            Username: user,
                            Password: repass,
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
                            alert("Đăng ký thành công")
                            //Xử lý cho form đăng ký tự động tắt
                    } else {
                        alert("Mật khẩu không trùng khớp")
                    }
                }
            }, 100);
        })
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
                    var str = `<div id_customer="${data[i].id}" onclick="RenderListRecipt(this)" class="navbar__user-item navbar__user-item-txt navbar__user-order">
                        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
                        Tra cứu đơn hàng
                    </div>
                    <div onclick="openAdmin()" class="navbar__user-item navbar__user-item-txt navbar__user-id" value="${data[i].Username}">
                        <i class="navbar__user-icon fa-solid fa-user"></i>
                        ${data[i].Permission}
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-cart" onclick="Cart()">
                        <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
                        Giỏ hàng
                    </div>`
                    document.getElementById("User").innerHTML = str;
                    localStorage.setItem("username",data[i].Username)
                    localStorage.setItem("id",data[i].id)
                    alert("Chào mừng " + data[i].Username)
                    flag = true
                    break
                } else if (data[i].Username == user && data[i].Password == pass && data[i].Permission == "Customer") {
                    document.querySelector('.modal').style.display = 'none';
                    var str = `<div id_customer="${data[i].id}" onclick="RenderListRecipt(this)" class="navbar__user-item navbar__user-item-txt navbar__user-order">
                        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
                        Tra cứu đơn hàng
                    </div>
                    <div onclick="DetailCustomer(this)" class="navbar__user-item navbar__user-item-txt navbar__user-id" value="${data[i].Username}" id_customer="${data[i].id}">
                        <i class="navbar__user-icon fa-solid fa-user"></i>
                        ${data[i].Username}
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-cart" onclick="Cart()">
                        <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
                        Giỏ hàng
                    </div>`
                    document.getElementById("User").innerHTML = str;
                    localStorage.setItem("username",data[i].Username)
                    localStorage.setItem("id",data[i].id)
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

function setAccount(user,id){
    if(user == null){
    document.getElementById("User").innerHTML=`<div onclick="SignUpOpen()" class="navbar__user-item navbar__user-item-txt navbar__user-order">
        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
        Tra cứu đơn hàng
    </div>
    <div onclick="SignUpOpen()" class="navbar__user-item navbar__user-item-txt navbar__user-id" value="">
        <i class="navbar__user-icon fa-solid fa-user"></i>
        Tài khoản của tôi
    </div>
    <div onclick="SignUpOpen()" class="navbar__user-item navbar__user-item-txt navbar__user-cart" onclick="Cart()">
        <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
        Giỏ hàng
    </div>`
    }
    else if(user.includes("Admin")){
        document.getElementById("User").innerHTML=`<div id_customer="${id}" onclick="RenderListRecipt(this)" class="navbar__user-item navbar__user-item-txt navbar__user-order">
            <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
            Tra cứu đơn hàng
        </div>
        <div onclick="openAdmin()" class="navbar__user-item navbar__user-item-txt navbar__user-id" value="${user}">
            <i class="navbar__user-icon fa-solid fa-user"></i>
            ${user}
        </div>
        <div class="navbar__user-item navbar__user-item-txt navbar__user-cart" onclick="Cart()">
            <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
            Giỏ hàng
        </div>`}
    else{
        document.getElementById("User").innerHTML=`<div id_customer="${id}" onclick="RenderListRecipt(this)" class="navbar__user-item navbar__user-item-txt navbar__user-order">
        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
        Tra cứu đơn hàng
    </div>
    <div onclick="DetailCustomer(this)" class="navbar__user-item navbar__user-item-txt navbar__user-id" value="${user}}" id_customer="${id}">
        <i class="navbar__user-icon fa-solid fa-user"></i>
        ${user}
    </div>
    <div class="navbar__user-item navbar__user-item-txt navbar__user-cart" onclick="Cart()">
        <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
        Giỏ hàng
    </div>`
    }
}

function LogOut() {
    localStorage.removeItem("username")
    localStorage.removeItem("id")
    var str = `<div onclick = "SignUpOpen()" class="navbar__user-item navbar__user-item-txt navbar__user-order">
        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
        Tra cứu đơn hàng
        </div>
        <div onclick = "SignUpOpen()" class="navbar__user-item navbar__user-item-txt navbar__user-id" value="">
            <i class="navbar__user-icon fa-solid fa-user"></i>
            Tài khoản của tôi
        </div>
        <div onclick = "SignUpOpen()" class="navbar__user-item navbar__user-item-txt navbar__user-cart">
            <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
            Giỏ hàng
        </div>`
    document.getElementById("User").innerHTML = str;
    console.log("Log out admin")
    document.querySelector('.customer').style.display='none'
}

openAdmin = () => {
    window.open('./admin/admin.html')
}

function SearchProduct(product,origin){
    return `<div class="product-detail search" value="${product.id}" origin="${origin}" onclick="UpLoad(this)">
        <div class="new-product-img">
            <img class="new-product-thumbnail"
            src="${product.img}" alt="" />
        </div>
        <div class="new-product-percent">${product.new_productt_percent}</div>               
        <h2 class="new-product-name">${product.name}</h2>
        <del>${product.old_price}</del><br/>
        <span class="new-product-sale">${product.new_price}</span>
        </div>`;
}

function Search(){
var detail=document.getElementById("Search").value
if(detail===""){
    alert("Phải điền đầy đủ thông tin tìm kiếm !!")
} else {
var product=""
fetch(lapOfficeApi)
.then(res=> res.json())
.then(data => { console.log(detail)
    data.forEach(item => {
        var name=item.name
        console.log(name)
        if(name.includes(detail)){
            console.log(item)
            product+=SearchProduct(item,"Office")
        }
    });
})
fetch(lapGamingApi)
.then(res=> res.json())
.then(data => {
    data.forEach(item => {
        var name=item.name
        console.log(name)
        if(name.includes(detail)){
            product+=SearchProduct(item,"Gaming")
        }
    });
})
fetch(keyboardApi)
.then(res=> res.json())
.then(data => {
    data.forEach(item => {
        var name=item.name
        console.log(name)
        if(name.includes(detail)){
            product+=SearchProduct(item,"Keyboard")
        }
    });
})
fetch(mouseApi)
.then(res=> res.json())
.then(data => {
    data.forEach(item => {
        var name=item.name
        console.log(name)
        if(name.includes(detail)){
            product+=SearchProduct(item,"Mouse")
        }
    });
})
fetch(headphoneApi)
.then(res=> res.json())
.then(data => {
    data.forEach(item => {
        var name=item.name
        console.log(name)
        if(name.includes(detail)){
            product+=SearchProduct(item,"Headphone")
        }
    });
})
setTimeout(function(){
    document.getElementById("content-home").innerHTML='<div class = "product-search"> <h1> Kết quả tìm kiếm</h1>'+product+'</div>'
},500)
}

}

function DetailCustomer(customer){
    var id=customer.getAttribute("id_customer")
    fetch(userURL+"/"+id)
    .then(res => res.json())
    .then(data => {
    var textHTLM = `<form class="customer-form" name="customerForm" id="customer-form"> 
    <div onclick="CustomerClose()" class="customer_close-btn btn">x</div>
    <div class="customer-form_label">THÔNG TIN TÀI KHOẢN KHÁCH HÀNG</div>
    <div class="form-group" id="dataid">
        <label for="uname" class="form-label">ID tài khoản</label>
        <br>
        <input class="form-input" id="id" name="id" type="text" value="${data.id}" readonly>\
        <br>
        <span class="form-message"></span>
    </div>
    <div class="form-group">
        <label for="uname" class="form-label">Tên tài khoản</label>
        <br>
        <input class="form-input" id="uname" name="uname" type="text" value="${data.Username}" readonly>\
        <br>
        <span class="form-message"></span>
    </div>
    <div class="form-group" id="datapass">
        <label for="pwd" class="form-label">Mật khẩu</label>
        <br>
        <input class="form-input" id="pwd" name="pwd" type="password" value="${data.Password}" readonly>
        <br>
        <span class="form-message"></span>
    </div>
    <div class="form-group" >
        <label for="pwd" class="form-label">Tên khách hàng</label>
        <br>
        <input class="form-input" id="cus" name="cus" type="text" value="${data.Customer}">
        <br>
        <span class="form-message"></span>
    </div>
    <div class="form-group">
        <label for="pwd" class="form-label">Số điện thoại</label>
        <br>
        <input class="form-input" id="num" name="num" type="text" value="${data.PhoneNumber}">
        <br>
        <span class="form-message"></span>
    </div>
    <div class="form-group">
        <label for="pwd" class="form-label">Địa chỉ</label>
        <br>
        <input class="form-input" id="adr" name="adr" type="text" value="${data.Address}">
        <br>
        <span class="form-message"></span>
    </div>
    <div class="Customer_control">
        <div class="save_btn btn" onclick="SaveDetail()">Lưu thông tin</div>
        <div class="logout_btn btn" onclick="LogOut()">Đăng xuất</div>
    </div>
</form>`
    document.getElementById('customer').innerHTML = textHTLM;
    document.getElementById('dataid').style.display="none"
    document.getElementById('datapass').style.display="none"
    })
    setTimeout(() => {
    document.querySelector('.customer').style.display = "block";
    document.getElementById('customer-form').style.display="block"
    }, 100);

}

function CustomerClose() {
    document.querySelector('.customer').style.display = 'none';
}

function SaveDetail(){
    var id=document.customerForm.id.value
    var username=document.customerForm.uname.value
    var password=document.customerForm.pwd.value
    var customer_name=document.customerForm.cus.value
    var phonenumber=document.customerForm.num.value
    var address=document.customerForm.adr.value
    var detail={
        id: id,
        Username: username,
        Password: password,
        Permission: "Customer",
        Customer: customer_name,
        PhoneNumber:   phonenumber,
        Address:   address
    }
    fetch(userURL+"/"+id,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(detail)
    })
    setTimeout(() => {
        document.querySelector('.customer').style.display = 'none';
        alert("Chỉnh sửa thông tin khách hàng thành công")
    }, 100);
}

var listRecipt=[]
function RenderListRecipt(array){
    listRecipt=[]
    var id_customer=array.getAttribute("id_customer")
    var tableHD= `<div class="Recipt" style="width=100%">
    <div class="Recipt-form">
    <span class="Recipt__headline" style="margin:200px 250px 0px; font-width:800; display:block; width: 100%; font-size:2.4rem">Thông tin các đơn hàng</span>
    <div class="Recipt--table" id="Recipt_table" style="width=100%">
    <table style="margin:50px 300px;" border="solid black" class="recipt_table">
    <thead>
    <tr>
    <th>ID</th>
    <th>Tên sản phẩm</th>
    <th>Sản phẩm</th>
    <th>Số lượng</th>
    <th>Giá tiền</th>
    </tr>
    </thead>`
    fetch(urlDH)
    .then(res=> res.json())
    .then(data =>{
        data.forEach(item => {
            setTimeout(() => {
                SearchRecipt(item,id_customer)   
            }, 100);

        });
    })
    setTimeout(() => { 
        console.log(listRecipt)
        if(listRecipt.length == 0){
            alert("Khách hàng chưa có đơn hàng")
        }
        else{
        for(j=0;j<listRecipt.length;j++){
            tableHD +=`
            <tr>
            <td><b>${listRecipt[j].id}</b></td>
            <td colspan="4">${listRecipt[j].tinhtrang}</td>
            </tr>`
            for(i=0;i<listRecipt[j].chitietdh.length;i++){
                tableHD+=
                    `<tr>
                    <td>+</td>
                    <td id="tensp">${listRecipt[j].chitietdh[i].tensp}</td>
                    <td ><img class="recipt-image" src="${listRecipt[j].chitietdh[i].img}" id="image"></td>
                    <td>${listRecipt[j].chitietdh[i].sl}</td>
                    <td id="giatien" class="price">${listRecipt[j].chitietdh[i].price}</td>
                    </tr>`
            }
                tableHD+= `<tr>
                <td colspan="4"><b>Tổng cộng:</b></td>
                <td>${listRecipt[j].tongcong}</td
                    </tr>`               
        };
        table+=`</table>
        </div>
        </div>
        </div>`         
        document.getElementById("content").innerHTML= '<div id="content-productdetail">'+ tableHD + '</div>'
    }
    }, 1000);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
}

function SearchRecipt(customer,id){
    if(customer.id_kh==id){
        var id_DH=customer.id
        var TongCong=customer.tongcong
        var TinhTrang=customer.tinhtrang
        var ctdh=[]
        customer.chitietdh.forEach(item => {
        if(item.phanloai=="Office"){
            url=urlOffice
        }
        if(item.phanloai=="Gaming"){
            url=urlGaming
        }
        if(item.phanloai=="Keyboard"){
            url=urlKeyboard
        }
        if(item.phanloai=="Mouse"){
            url=urlMouse
        }
        if(item.phanloai=="Headphone"){
            url=urlHeadphone
        }
        fetch(url+"/"+item.id_sp)
        .then(res=>res.json())
        .then(info =>{
            var one_product={
                tensp: info.name,
                img : info.img,
                sl: item.sl,
                price: item.price,
            }  
            ctdh.push(one_product)
        })
        });        
            var one_HD={
            id: id_DH,
            chitietdh: ctdh,
            tongcong: TongCong,
            tinhtrang: TinhTrang
        }
        listRecipt.push(one_HD)  
        }
                  
}


var list = []
function OrderProduct(order) {
    var choose = confirm("Xác nhận đặt sản phẩm này ?")
    if(choose==true){
        if(localStorage.getItem("id")!=null){
            var id_product = order.getAttribute("id_product")
            var origin_product = order.getAttribute("origin")
            var quantity_product = 1
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
                        alert("Thêm sản phẩm vào giỏ hàng thành công")
                        break
                    }
                }
                if (flag == false) {

                    var product = { id: id_product, origin: origin_product, sl: quantity_product, price: parseInt(price2) }
                    list.push(product)
                    alert("Thêm sản phẩm vào giỏ hàng thành công")
                }
            } else {
                var product = { id: id_product, origin: origin_product, sl: quantity_product, price: parseInt(price2) }
                list.push(product)
                alert("Thêm sản phẩm vào giỏ hàng thành công")
            }
        }else {
        alert("Cần đăng nhập tài khoản để đặt hàng")
        SignUpOpen()
        
    } 
    }
    
}
var table

function Cart() {
    Total()
    var upload = document.getElementById('content')
    table = `<div class="cart" id = "content-productdetail">
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
    list.forEach(item => {
           url = urlOffice
        if (item.origin === "Office") {
            url = urlOffice
        }
        if (item.origin === "Gaming") {
            url = urlGaming
        }
        if (item.origin === "Keyboard") {
            url = urlKeyboard
        }
        if (item.origin === "Mouse") {
            url = urlMouse
        }
        if (item.origin === "Headphone") {
            url = urlHeadphone
        }
        let id_product1 = item.id
        var origin_product1 = item.origin
        var quantity_product1 = item.sl
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (j = 0; j < data.length; j++) {
                    if (data[j].id === id_product1) {
                        table += `
                        <tr class='cart_form-control'>
                        <td  id="tensp">${data[j].name}</td>
                        <td><img src="${data[j].img}" id="image" class = 'cart-img' ></td>
                        <td><input type="number" name="quantity" value="${quantity_product1}" min="1" max="10" id="soluong" class="sl"  style="text-align:center;"</td>
                        <td id="giatien" class="price">${data[j].new_price}</td>
                        <td><button class="btn-remove" onclick="remove_Cart(this)"  id_product="${data[j].id}" origin="${origin_product1}" customer="">Xóa</button></td>
                    </tr>`
                        break
                    }
                };
            })
        setTimeout(function() {}, 1000)   
    });
      
    setTimeout(function() {
        table += `<tr class = 'cart_form-control'>
        <td colspan="4">Tổng cộng</td>
        <td>${total}</td
            </tr>
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
        upload.innerHTML = "<div id = 'content-productdetail'"+ table + "</div>"
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
    var choose = confirm("Xác nhận thanh toán đơn hàng này ?")
    if (choose == true) {
        var id = localStorage.getItem("id")

        let d = new Date()
        let year = d.getFullYear()
        let month = d.getMonth() + 1;
        let day = d.getDate();
        var daychoose = day + '/' + month + '/' + year;
        var ArrayProduct = []
        for (i = 0; i < list.length; i++) {
            ArrayProduct.push({
                id_sp: list[i].id,
                phanloai: list[i].origin,
                sl: list[i].sl,
                price: list[i].price

            })
            fetch(urlDH)
                .then(res => res.json())
                .then(data => {
                     const json = {
                id: (parseInt (data[data.length-1].id) + 1)+'',
                id_kh: id,
                chitietdh: ArrayProduct,
                day: daychoose,
                tongcong: total,
                tinhtrang: 'Chưa nhận hàng'
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
    }
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

function renderContent(){
    var str=`<div id="content-home">
            
    <div class="content-top">
        <div class="list">
        <div class="list__item"   onclick="Filter_Office()"  id="fil__off"  >
        <i class="list__item-icon fa-solid fa-laptop"></i>
        <div class="list__item-txt">Laptop văn phòng</div>
    </div>
    <div class="list__item"  onclick="Filter_Gaming()" id="fil__ga">
        <i class="list__item-icon fa-solid fa-laptop"></i>
        <div class="list__item-txt">Laptop gaming</div>
    </div>
    <div class="list__item"  onclick="Filter_Keyboard()"  id="fil__key">
        <i class="list__item-icon fa-regular fa-keyboard"></i>
        <div class="list__item-txt">Bàn phím</div>
    </div>
    <div class="list__item"  onclick="Filter_Mouse()"  id="fil__mo">
        <i class="list__item-icon fa-solid fa-computer-mouse"></i>
        <div class="list__item-txt">Chuột & Lót chuột</div>
    </div>
    <div class="list__item"  onclick="Filter_Headphone()"  id="fil__he">
        <i class="list__item-icon fa-solid fa-headphones"></i>
        <div class="list__item-txt">Tai nghe</div>
    </div>
            <div class="list__item">
                <i class="list__item-icon fa-brands fa-usb"></i>
                <div class="list__item-txt">Khác</div>
            </div>
        </div>
        
        <div class="ad-mid">
            <a href="">
                <img class="w-100" src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=29472" alt="...">
            </a>
        </div>

        <div class="ad-right">
            <div class="store">
                <h3 class="store-head">Hệ thống các cửa hàng</h3>
                <div class="store-item">
                    <i class="store-icon fa-solid fa-location-dot"></i>
                    <ul class="store-list">585 Điện Biên Phủ, Phường 1, Quận 3, Việt Nam</ul>
                </div>
                <div class="store-item">
                    <i class="store-icon fa-solid fa-location-dot"></i>
                    <ul class="store-list">609 Lê Hồng Phong, Phường 10, Quận 10, Việt Nam</ul>
                </div>
            </div>
            <div class="ad-min">
                <a href="">
                    <img class="w-100" src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/zenbook%2014.png" alt="...">
                </a>
            </div>
        </div>

        
    </div>

    <!-- Laptop văn phòng -->
    <div class="container-product">
        <div class="feature-product">
            <div class="product-name">
                <div  onclick='containerHomeClose()' class="product-name__item">
                    <h3 class="product-name__txt">Laptop văn phòng nổi bật</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Asus</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Acer</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Hp</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Dell</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Lenovo</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">LG</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Huawei</h3>
                </div>
            </div>
            <div id="LapVanPhong_Recommend" class="product-box"></div>               
            <div class="product-page">
                <div onclick="Section_Office_1()" class="product-page__button">1</div>
                <div onclick="Section_Office_2()" class="product-page__button">2</div>
                <div onclick="Section_Office_3()" class="product-page__button">3</div>
            </div>
        </div>
    </div>

    <!-- Laptop gaming -->
    <div class="content-product">
        <div class="feature-product">
            <div class="product-name">
                <div class="product-name__item">
                    <h3 class="product-name__txt">Laptop gaming nổi bật</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Asus</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Acer</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Hp</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Dell</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Lenovo</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">LG</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Huawei</h3>
                </div>
            </div>
            <div id="LapGaming_Recommend" class="product-box"></div>            
            <div class="product-page">
                <div onclick="Section_Gaming_1()" class="product-page__button">1</div>
                <div onclick="Section_Gaming_2()" class="product-page__button">2</div>
                <div onclick="Section_Gaming_3()" class="product-page__button">3</div>
            </div>
        </div>
    </div>

    <!-- Bàn phím -->
    <div class="content-product">
        <div class="feature-product">
            <div class="product-name">
                <div class="product-name__item">
                    <h3 class="product-name__txt">Bàn phím nổi bật</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Akko</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Logitech</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Razer</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Corsair</h3>
                </div>
            </div>
            <div id ="Keyboard_Recommend" class="product-box"></div>            
            <div class="product-page">
                <div onclick="Section_Keyboard_1()" class="product-page__button">1</div>
                <div onclick="Section_Keyboard_2()" class="product-page__button">2</div>
                <div onclick="Section_Keyboard_3()" class="product-page__button">3</div>
            </div>
        </div>
    </div>

    <!-- Chuột và lót chuột -->
    <div class="content-product">
        <div class="feature-product">
            <div class="product-name">
                <div class="product-name__item">
                    <h3 class="product-name__txt">Chuột & Lót chuột nổi bật</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Akko</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Logitech</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Razer</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Corsair</h3>
                </div>
            </div>
            <div id="Mouse_Recommend" class="product-box"></div>
            <div class="product-page">
                <div onclick="Section_Mouses_1()" class="product-page__button">1</div>
                <div onclick="Section_Mouses_2()" class="product-page__button">2</div>
                <div onclick="Section_Mouses_3()" class="product-page__button">3</div>
            </div>
        </div>
    </div>

    <!-- Tai nghe -->
    <div class="content-product">
        <div class="feature-product">
            <div class="product-name">
                <div class="product-name__item">
                    <h3 class="product-name__txt">Tai nghe nổi bật</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Akko</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Logitech</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Razer</h3>
                </div>
                <div class="product-name__item">
                    <h3 class="product-name__brand">Corsair</h3>
                </div>
            </div>
            <div id="Headphone_Recommend" class="product-box"></div>
            <div class="product-page">
                <div onclick="Section_Headphones_1()" class="product-page__button">1</div>
                <div onclick="Section_Headphones_2()" class="product-page__button">2</div>
                <div onclick="Section_Headphones_3()" class="product-page__button">3</div>
            </div>
        </div>
    </div>  
    </div> `
    document.getElementById("content").innerHTML=str
}

function GoBack(){
    renderContent()
    start()
}
