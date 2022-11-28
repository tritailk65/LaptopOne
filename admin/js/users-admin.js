const userURL = "http://localhost:3000/Account";

start = () => {
    getAllUsers(renderUser);
}

start()

function getAllUsers(callback) {
    fetch(userURL)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderUser(Users){ 
    let dataUser = document.getElementById("body");
    var htmls = Users.map(function (user){
        return `
        <tr>
					<td id = 'user_id'>${user.id}</td>
					<td class="d-none d-xl-table-cell">${user.Username}</td>
					<td class="d-none d-xl-table-cell">${user.Password}</td>
					<td class="d-none d-md-table-cell">${user.Permission}</td>
					<td><button onclick="editUserForm()" class="btn btn-primary">Sửa</button> <button onclick="deleteUser()" class="btn btn-danger">Xóa</button></td>					
				</tr>
        `
    });
    dataUser.innerHTML = htmls.join("")
}

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