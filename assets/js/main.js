// var productList = 
//     document.querySelector('.navbar__list-item-box');

// productList.onmouseenter = function (){
//     document.querySelector('.navbar__list-item-box-hover').style.display='block';
// }

function SignUpOpen() {
    var textHTLM = '<div class="sign-up-form"> \
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
        <div class="sign-up_btn btn">Đăng nhập</div>\
        <div class="register">\
            <p class="register_txt">Chưa có tài khoản</p>\
            <i class="fa-solid fa-arrow-right"></i>\
            <div onclick="RegisterOpen()" class="rigister_btn btn">Đăng ký</div>\
        </div>\
    </div>\
</div>';
    document.getElementById('modal').innerHTML=textHTLM;
    document.querySelector('.modal').style.display = "block";
    document.querySelector('.sign-up-form').style.display = "block";
}

function SignUpClose() {
    document.querySelector('.modal').style.display = 'none';
}

function RegisterOpen() {
    var textHTLM = '<div class="register-form">\
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
        <input class="form-input" id="pwd" name="pwd" type="password" placeholder="Nhập lại mật khẩu">\
        <br>\
        <span class="form-message"></span>\
    </div>\
    <div class="form-group">\
        <p class="register_privacy">Bằng việc đăng ký, bạn đã đồng ý với <a href="">Điều khoản dịch vụ</a> & <a href="">Chính sách bảo mật</a></p>\
    </div>\
    <div class="sign-up_control">\
        <div class="sign-up_btn btn">Đăng ký</div>\
        <div class="register">\
            <p class="register_txt">Đã có tài khoản</p>\
            <i class="fa-solid fa-arrow-right"></i>\
            <div onclick="SignUpOpenFromRegister()" class="rigister_btn btn">Đăng nhập</div>\
        </div>\
    </div>\
    </div>';
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



