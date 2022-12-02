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
					<td><button onclick="editUserForm(this)" class="btn btn-primary" id_user="${user.id}">Sửa</button> <button onclick="deleteUser(this)" class="btn btn-danger" id_user="${user.id}">Xóa</button></td>					
				</tr>
        `
    });
    console.log(htmls)
    dataUser.innerHTML = htmls.join("")
}
usersChange = (url,type,inform) => {
    if(type=="POST"||type=="PUT"){
        fetch(url,{
            method: type,
            headers:{
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify(inform)
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    }
    if(type=="GET"){
        fetch(url,{
            method: type,
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error))
    }
    if(type=="DELETE"){
        fetch(url,{
            method: type,
            headers:{
                    'Content-Type': 'application/json'
            }
        })
        .catch(error => console.log(error))
    }
}
edituser= () => {
    var getuser=document.querySelector(".form-control").value
    var id=getuser[0]
    var data={
        id: getuser[0],
        Username: getuser[1],
        Password: getuser[2],
        Permission: getuser[3]
    }
    usersChange("http://localhost:3000/Account/"+id,"PUT",data)
}
editUserForm = (user) => {
    //Mở form edit đè lên trang hiện tại
    window.open('user-edit.html');
    //Lấy iduser và log ra console
    var id=user.getAttribute("id_user")
    fetch("http://localhost:3000/Account/"+id)
    .then(res => res.json())
    .then(data =>{
        var str=`<div class="col-12 ">
    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">ID Tài khoản</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" placeholder="1" value="${data.id}" readonly>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Tên tài khoản</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" placeholder="tk1@example.com" value="${data.Username}" readonly>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Mật khẩu</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" placeholder="123abc" value="${data.Password}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Permission</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" placeholder="Customer" value="${data.Permission}" readonly>
        </div>
    </div>						
</div>`
        document.getElementById("row").innerHTML=str
    })
//     var detail=usersChange("http://localhost:3000/Account/"+id,"GET")
//     console.log(detail)
//     var str=`<div class="col-12 ">
//     <div class="card">
//         <div class="card-header">
//             <h5 class="card-title mb-0">ID Tài khoản</h5>
//         </div>
//         <div class="card-body">
//             <input type="text" class="form-control" placeholder="1" value="${detail.id}" readonly>
//         </div>
//     </div>

//     <div class="card">
//         <div class="card-header">
//             <h5 class="card-title mb-0">Tên tài khoản</h5>
//         </div>
//         <div class="card-body">
//             <input type="text" class="form-control" placeholder="tk1@example.com" value="${detail.Username}" readonly>
//         </div>
//     </div>

//     <div class="card">
//         <div class="card-header">
//             <h5 class="card-title mb-0">Mật khẩu</h5>
//         </div>
//         <div class="card-body">
//             <input type="text" class="form-control" placeholder="123abc" value="${detail.Password}">
//         </div>
//     </div>

//     <div class="card">
//         <div class="card-header">
//             <h5 class="card-title mb-0">Permission</h5>
//         </div>
//         <div class="card-body">
//             <input type="text" class="form-control" placeholder="Customer" value="${detail.Permission}" readonly>
//         </div>
//     </div>						
// </div>`
    // var getuser=document.querySelector(".form-control")
    // getuser[0].value=detail.id
    // getuser[1].value=detail.Username
    // getuser[2].value=detail.Password
    // getuser[3].value=detail.Permission

    
}

deleteUser = (del) => {
    var id=del.getAttribute("id_user")
    let chose=confirm('Bạn có chắc muốn xóa tài khoản này khỏi hệ thống ?')
    if(chose == true){
        usersChange("http://localhost:3000/Account/"+id,"DELETE")
    }
}