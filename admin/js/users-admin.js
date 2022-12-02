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
					<td>${user.id}</td>
					<td class="d-none d-xl-table-cell">${user.Username}</td>
					<td class="d-none d-xl-table-cell">${user.Password}</td>
					<td class="d-none d-md-table-cell">${user.Permission}</td>
					<td><button onclick="editUserForm(this)" class="btn btn-primary" id_user="${user.id}">Sửa</button> <button onclick="deleteUser(this)" class="btn btn-danger" id_user="${user.id}">Xóa</button></td>					
				</tr>
        `
    });
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

edituser = () => {
    let getUserID=document.getElementById("id").value
    let getUserUname=document.getElementById("uname").value
    let getUserPwd=document.getElementById("pwd").value
    let getUserPer=document.getElementById("per").value
    var data={
        id: getUserID,
        Username: getUserUname,
        Password: getUserPwd,
        Permission: getUserPer
    }
    usersChange("http://localhost:3000/Account/"+getUserID,"PUT",data)
}

editUserForm = (user) => {
    let index = document.getElementById('content');
    //Lấy iduser và log ra console
    var id=user.getAttribute("id_user")
    var str
    //Lay user qua id
    fetch (userURL+'/'+id)
        .then (res => res.json())
        .then (detail =>  {
            str =`
            <div class="container-fluid p-0">
					<div style="display:flex; justify-content: space-between;" class="mb-3">
						<h1 class="h3 d-inline align-middle">Forms sửa thông tin tài khoản</h1>
                        <button style="margin-right: 30px;" class="btn btn-primary" onclick="edituser()">Sửa</button> 
					</div>

					<div class="row" id="row">
						<div class="col-12 ">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">ID Tài khoản</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" placeholder="1" id="id" value="${detail.id}" readonly>
								</div>
							</div>
						
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Tên tài khoản</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" placeholder="tk1@example.com" id="uname" value="${detail.Username}" readonly>
								</div>
							</div>
						
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Mật khẩu</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" placeholder="123abc" id="pwd" value="${detail.Password}">
								</div>
							</div>
						
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Permission</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" placeholder="Customer" id="per" value="${detail.Permission}" readonly>
								</div>
							</div>						
						</div>
			        </div>

                    </div>

					</div>
				</div>
                `
                index.innerHTML = str;
    })
}

deleteUser = (del) => {
    var id=del.getAttribute("id_user")
    let chose=confirm('Bạn có chắc muốn xóa tài khoản này khỏi hệ thống ?')
    if(chose == true){
        usersChange("http://localhost:3000/Account/"+id,"DELETE")
    }
}