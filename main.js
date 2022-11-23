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
    document.getElementById('modal').innerHTML=textHTLM;
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
    document.getElementById('modal').innerHTML=textHTLM;
    document.querySelector('.register-form').style.display='block';
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
var home=" http://localhost:3000"
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
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderProductLapOffice(Products){
    var listProduct = document.getElementById('LapVanPhong_Recommend');
    var htmls = Products.map(function (product) {
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

function renderProductLapGaming(Products){
    var listProduct = document.getElementById('LapGaming_Recommend');
    var htmls = Products.map(function (product) {
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

function renderKeyboards(Products){
    var listProduct = document.getElementById('Keyboard_Recommend');
    var htmls = Products.map(function (product) {
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

function renderMouses(Products){
    var listProduct = document.getElementById('Mouse_Recommend');
    var htmls = Products.map(function (product) {
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

function containerHomeClose(){
    var htmls ='<div class="productdetails">\
                <div class="productdetails__header">\
                    <div class="productdetails__header--information">\
                        <div class="productdetails__header--information--image" id="product--image"></div>\
                        <div class="productdetails__header--information--content" id="product--content"></div>\
                    </div>\
                </div>\
                <div class="productdetails__detailss" id="productdetail"></div>\
            </div>';
    document.getElementById('content-home').style.display='none';
    document.getElementById('content-productdetails').style.display='block'
}
function Register(){
    var user=document.RegisterForm.uname.value
    var flag=false
    fetch(userURL)
    .then(response=>response.json())
    .then(data=>{
        data.forEach(item => {
            if(item.Username===user){
                alert("Tài khoản đã tồn tại")
                flag=true
            }
        });
    })
    if(flag===false){
    var pass=document.RegisterForm.pwd.value
    var repass=document.RegisterForm.repwd.value
    if(pass===repass){
    const json={
        "Username": user,
        "Password": pass,
        "Permission": "Customer"
    }
    const post={
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(json)
    }
    fetch(userURL,post)
    .then(response => response.json())
    document.querySelector('.register-form').style.display='none';
    document.querySelector('.modal').style.display='none';
    }
    else{
        alert("Mật khẩu không trùng khớp")
    }
}
}
function SignUp(){
    var user=document.SignUpForm.uname.value
    var pass=document.SignUpForm.pwd.value
    var flag=false
    fetch(userURL)
    .then(response => response.json())
    .then(data =>{
        for(var i=0;i<data.length;i++){
            if(data[i].Username==user && data[i].Password==pass && data[i].Permission=="Admin"){
                document.querySelector('.modal').style.display = 'none';
                var str=`<div class="navbar__user-item navbar__user-item-txt navbar__user-order">
                        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
                        Tra cứu đơn hàng
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-id" value="${data[i].Username}">
                        <i class="navbar__user-icon fa-solid fa-user"></i><a href="" target="_blank"</a>
                        ${data[i].Permission}
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-cart">
                        <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
                        Giỏ hàng
                    </div>`
                    document.getElementById("User").innerHTML=str;
                    alert("Chào mừng "+data[i].Username)
                    flag=true
                    break
            }            
            else if(data[i].Username==user && data[i].Password==pass && data[i].Permission=="Customer"){
                document.querySelector('.modal').style.display = 'none';
                var str=`<div class="navbar__user-item navbar__user-item-txt navbar__user-order">
                        <i class="navbar__user-icon fa-solid fa-truck-fast"></i>
                        Tra cứu đơn hàng
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-id" value="${data[i].Username}">
                        <i class="navbar__user-icon fa-solid fa-user"></i>
                        ${data[i].Username}
                    </div>
                    <div class="navbar__user-item navbar__user-item-txt navbar__user-cart">
                        <i class="navbar__user-icon fa-solid fa-cart-shopping"></i>
                        Giỏ hàng
                    </div>` 
                    document.getElementById("User").innerHTML=str; 
                    alert("Chào mừng "+item.Username)   
                    flag=true  
                    break    
            }
        }
        if(flag===false){
            alert("Thông tin đăng nhập không đúng")
        }
    })
}
function LogOut(){
    var str=`<div class="navbar__user-item navbar__user-item-txt navbar__user-order">
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
                    document.getElementById("User").innerHTML=str;
}


