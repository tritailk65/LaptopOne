editUserForm = () => {
    //Mở form edit đè lên trang hiện tại
    window.open('user-edit.html','_self');
    //Lấy iduser và log ra console
    let userID = document.getElementById('user_id').innerText;
    console.log(userID);
}

deleteUser = () => {
    confirm('Bạn có chắc muốn xóa tài khoản này khỏi hệ thống ?')
}