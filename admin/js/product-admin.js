const lapOfficeApi = 'http://localhost:3000/Product_LaptopVanPhong';
const lapGamingApi = 'http://localhost:3000/Product_LaptopGaming';
const keyboardApi = 'http://localhost:3000/Product_Keyboard';
const mouseApi = 'http://localhost:3000/Product_Mouses';
const headphoneApi = 'http://localhost:3000/Product_Headphone';

start()

prodOffice = () => {
    getOffice(renderOffice);
}

prodGaming = () => {
    getGaming(renderGaming);
}

prodMouse = () => {
    getMouse(renderMouse);
}


prodKeyboard = () => {
    getKeyboard(renderKeyboard);
}


prodHeadphone = () => {
    getHeadphone(renderHeadphone);
}


function start (){
    getOffice(renderOffice);   
}

function getOffice(callback) {
    fetch(lapOfficeApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderOffice(Products){ 
    var tableProd = document.getElementById("body");
    let buttonAdd = `
    <tr>
       <td colspan = '6'> <button onclick="addProduct(this)" style="margin: 10px 70px 10px 0; float:right;" class="btn btn-success" type = 'Office'>Thêm</button> </td> 
    </tr>
    `
    let htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">${product.type}</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editLaptopForm(this)" class="btn btn-primary" id_product = "${product.id}" type_product="${product.type}" >Sửa</button> <button id_product = "${product.id}" type_product="${product.type}" onclick="deleteProduct(this)" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML = htmls.join("") + buttonAdd;
}

function getGaming(callback) {
    fetch(lapGamingApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderGaming(Products){ 
    var tableProd = document.getElementById("body");
    let buttonAdd = `
    <tr>
       <td colspan = '6'> <button type ='Gaming' onclick="addProduct(this)" style="margin: 10px 70px 10px 0; float:right;" class="btn btn-success">Thêm</button> </td> 
    </tr>
    `
    let htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">${product.type}</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editLaptopForm(this)" class="btn btn-primary" id_product = "${product.id}" type_product="${product.type}" >Sửa</button> <button id_product = "${product.id}" type_product="${product.type}" onclick="deleteProduct(this)" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML = htmls.join("") + buttonAdd;
}

function getMouse(callback) {
    fetch(mouseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderMouse(Products){ 
    var tableProd = document.getElementById("body");
    let buttonAdd = `
    <tr>
       <td colspan = '6'> <button type = 'Mouse' onclick="addProduct(this)" style="margin: 10px 70px 10px 0; float:right;" class="btn btn-success">Thêm</button> </td> 
    </tr>
    `
    let htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">${product.type}</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editLaptopForm(this)" class="btn btn-primary" id_product = "${product.id}" type_product="${product.type}" >Sửa</button> <button id_product = "${product.id}" type_product="${product.type}" onclick="deleteProduct(this)" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML = htmls.join("") + buttonAdd;
}

function getKeyboard(callback) {
    fetch(keyboardApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderKeyboard(Products){ 
    var tableProd = document.getElementById("body");
    let buttonAdd = `
    <tr>
       <td colspan = '6'> <button type = 'Keyboard' onclick="addProduct(this)" style="margin: 10px 70px 10px 0; float:right;" class="btn btn-success">Thêm</button> </td> 
    </tr>
    `
    let htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">${product.type}</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editLaptopForm(this)" class="btn btn-primary" id_product = "${product.id}" type_product="${product.type}" >Sửa</button> <button id_product = "${product.id}" type_product="${product.type}" onclick="deleteProduct(this)" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML = htmls.join("") + buttonAdd;
}

function getHeadphone(callback) {
    fetch(headphoneApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderHeadphone(Products){ 
    var tableProd = document.getElementById("body");
    let buttonAdd = `
    <tr>
       <td colspan = '6'> <button type = 'Headphone' onclick="addProduct(this)" style="margin: 10px 70px 10px 0; float:right;" class="btn btn-success">Thêm</button> </td> 
    </tr>
    `
    let htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">${product.type}</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editLaptopForm(this)" class="btn btn-primary" id_product = "${product.id}" type_product="${product.type}" >Sửa</button> <button id_product = "${product.id}" type_product="${product.type}" onclick="deleteProduct(this)" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML = htmls.join("") + buttonAdd;
}

fetchData = (url,type,inform) => {
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

editLaptopForm = (laptop) => {

    let index = document.getElementById('content');

    var id = laptop.getAttribute("id_product");
    let type = laptop.getAttribute("type_product");
    var str

    if(type==='Office'){
        fetch (lapOfficeApi+'/'+id)
                .then (res => res.json())
                .then (product =>  {
                    str =`
                    <div class="container-fluid p-0">

					<div style="display:flex; justify-content: space-between;" class="mb-3">
						<h1 class="h3 d-inline align-middle">Forms sửa thông tin sản phẩm Laptop Office</h1>
                        <button style="margin-right: 30px;" class="btn btn-primary" onclick = 'editOffice(this)'>Sửa</button> 
					</div>

                    <!-- Form-edit left -->
					<div class="row">
						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">ID Sản phẩm</h5>
								</div>
								<div class="card-body">
									<input id = "id" type="text" class="form-control" value="${product.id}" readonly>
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Tên sản phẩm</h5>
								</div>
								<div class="card-body">
									<input id = "name" type="text" class="form-control" value="${product.name}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Giá cũ</h5>
								</div>
								<div class="card-body">
									<input id = "old_price" type="text" class="form-control" value="${product.old_price}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Giá mới</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" id = 'new_price' value="${product.new_price}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Tỷ lệ % giảm</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" id = 'new_productt_percent' value="${product.new_productt_percent}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Link ảnh chính</h5>
								</div>
								<div class="card-body">
                                    <textarea class="form-control" rows="2" id = 'img' >${product.img}</textarea>
								</div>
							</div>
                            
                            <!-- chỉnh sửa 5 ảnh nhỏ -->
                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Link ảnh phụ</h5>
								</div>
								<div class="card-body">
									<div class="mb-3">
										<label class="form-label">Ảnh 1</label>
										<textarea class="form-control" rows="2" id ='img_1' >${product.img_1}</textarea>
									</div>
									<div class="mb-3">
										<label class="form-label">Ảnh 2</label>
										<textarea class="form-control" rows="2" id ='img_2'>${product.img_2}</textarea>
									</div>
									<div class="mb-3">
										<label class="form-label">Ảnh 3</label>
										<textarea class="form-control" rows="2" id ='img_3'>${product.img_3}</textarea>
									</div>
                                    <div class="mb-3">
										<label class="form-label">Ảnh 4</label>
										<textarea class="form-control" rows="2" id ='img_4'>${product.img_4}</textarea>
									</div>
                                    <div class="mb-3">
										<label class="form-label">Ảnh 5</label>
										<textarea class="form-control" rows="2" id ='img_5'>${product.img_5}</textarea>
									</div>
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">CPU</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" id ='CPU' value="${product.CPU}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Ram</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" id ='RAM' value="${product.RAM}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Hardware</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Hardware' value="${product.Hardware}">
								</div>
						    </div>

                        </div>

						<div class="col-12 col-lg-6">
                            
                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Card màn hình</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Card' value="${product.Card}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Màn hình</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'screen' value="${product.screen}">
								</div>
						    </div>


                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Cổng giao tiếp</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'CGT' value="${product.CGT}">
								</div>
						    </div>
                        
                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Bàn phím</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'keyboard' value="${product.keyboard}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">SDcard</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'SDcard' value="${product.SDcard}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Audio</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Audio' value="${product.Audio}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Bluetooth</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Bluetooth' value="${product.Bluetooth}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Webcam</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Webcam' value="${product.Webcam}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Hệ điều hành</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'OS' value="${product.OS}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Pin</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id ='Pin' value="${product.Pin}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Trọng lượng</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Weigth' value="${product.Weigth}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Màu sắc</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'color' value="${product.color}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Kích cỡ</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'size' value="${product.size}">
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
    } else if(type ==="Gaming") {
        fetch (lapGamingApi+'/'+id)
                .then (res => res.json())
                .then (product =>  {
                    str =`
                    <div class="container-fluid p-0">

					<div style="display:flex; justify-content: space-between;" class="mb-3">
						<h1 class="h3 d-inline align-middle">Forms sửa thông tin sản phẩm Laptop Gaming</h1>
                        <button style="margin-right: 30px;" class="btn btn-primary" onclick = 'editGaming(this)'>Sửa</button> 
					</div>

                    <!-- Form-edit left -->
					<div class="row">
						<div class="col-12 col-lg-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">ID Sản phẩm</h5>
								</div>
								<div class="card-body">
									<input id = "id" type="text" class="form-control" value="${product.id}" readonly>
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Tên sản phẩm</h5>
								</div>
								<div class="card-body">
									<input id = "name" type="text" class="form-control" value="${product.name}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Giá cũ</h5>
								</div>
								<div class="card-body">
									<input id = "old_price" type="text" class="form-control" value="${product.old_price}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Giá mới</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" id = 'new_price' value="${product.new_price}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Tỷ lệ % giảm</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" id = 'new_productt_percent' value="${product.new_productt_percent}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Link ảnh chính</h5>
								</div>
								<div class="card-body">
                                    <textarea class="form-control" rows="2" id = 'img' >${product.img}</textarea>
								</div>
							</div>
                            
                            <!-- chỉnh sửa 5 ảnh nhỏ -->
                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Link ảnh phụ</h5>
								</div>
								<div class="card-body">
									<div class="mb-3">
										<label class="form-label">Ảnh 1</label>
										<textarea class="form-control" rows="2" id ='img_1' >${product.img_1}</textarea>
									</div>
									<div class="mb-3">
										<label class="form-label">Ảnh 2</label>
										<textarea class="form-control" rows="2" id ='img_2'>${product.img_2}</textarea>
									</div>
									<div class="mb-3">
										<label class="form-label">Ảnh 3</label>
										<textarea class="form-control" rows="2" id ='img_3'>${product.img_3}</textarea>
									</div>
                                    <div class="mb-3">
										<label class="form-label">Ảnh 4</label>
										<textarea class="form-control" rows="2" id ='img_4'>${product.img_4}</textarea>
									</div>
                                    <div class="mb-3">
										<label class="form-label">Ảnh 5</label>
										<textarea class="form-control" rows="2" id ='img_5'>${product.img_5}</textarea>
									</div>
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">CPU</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" id ='CPU' value="${product.CPU}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Ram</h5>
								</div>
								<div class="card-body">
									<input type="text" class="form-control" id ='RAM' value="${product.RAM}">
								</div>
							</div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Hardware</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Hardware' value="${product.Hardware}">
								</div>
						    </div>

                        </div>

						<div class="col-12 col-lg-6">
                            
                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Card màn hình</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Card' value="${product.Card}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Màn hình</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'screen' value="${product.screen}">
								</div>
						    </div>


                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Cổng giao tiếp</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'CGT' value="${product.CGT}">
								</div>
						    </div>
                        
                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Bàn phím</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'keyboard' value="${product.keyboard}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">SDcard</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'SDcard' value="${product.SDcard}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Audio</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Audio' value="${product.Audio}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Bluetooth</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Bluetooth' value="${product.Bluetooth}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Webcam</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Webcam' value="${product.Webcam}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Hệ điều hành</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'OS' value="${product.OS}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Pin</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id ='Pin' value="${product.Pin}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Trọng lượng</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'Weigth' value="${product.Weigth}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Màu sắc</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'color' value="${product.color}">
								</div>
						    </div>

                            <div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Kích cỡ</h5>
								</div>
                                <div class="card-body">
									<input type="text" class="form-control" id = 'size' value="${product.size}">
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
    
}

editDifProdForm = (difProd) => {

    let index = document.getElementById('content');

    var id = difProd.getAttribute("id_product");
    let type = difProd.getAttribute("type_product");
    var str
    if (type === 'Mouse'){
        fetch (mouseApi+'/'+id)
                .then (res => res.json())
                .then (product =>  {
                    str =`
                    <div class="container-fluid p-0">

					<div style="display:flex; justify-content: space-between;" class="mb-3">
						<h1 class="h3 d-inline align-middle">Forms sửa thông tin sản phẩm Chuột</h1>
                        <button style="margin-right: 30px;" class="btn btn-primary" onclick = 'editMouse(this)'>Sửa</button> 
					</div>

					<div class="row">
						<div class="col-12">
                        <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">ID Sản phẩm</h5>
                        </div>
                        <div class="card-body">
                            <input id = "id" type="text" class="form-control" value="${product.id}" readonly>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Tên sản phẩm</h5>
                        </div>
                        <div class="card-body">
                            <input id = "name" type="text" class="form-control" value="${product.name}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Giá cũ</h5>
                        </div>
                        <div class="card-body">
                            <input id = "old_price" type="text" class="form-control" value="${product.old_price}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Giá mới</h5>
                        </div>
                        <div class="card-body">
                            <input type="text" class="form-control" id = 'new_price' value="${product.new_price}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Tỷ lệ % giảm</h5>
                        </div>
                        <div class="card-body">
                            <input type="text" class="form-control" id = 'new_productt_percent' value="${product.new_productt_percent}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Link ảnh chính</h5>
                        </div>
                        <div class="card-body">
                            <textarea class="form-control" rows="2" id = 'img' >${product.img}</textarea>
                        </div>
                    </div>
                    
                    <!-- chỉnh sửa 5 ảnh nhỏ -->
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Link ảnh phụ</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">Ảnh 1</label>
                                <textarea class="form-control" rows="2" id ='img_1' >${product.img_1}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 2</label>
                                <textarea class="form-control" rows="2" id ='img_2'>${product.img_2}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 3</label>
                                <textarea class="form-control" rows="2" id ='img_3'>${product.img_3}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 4</label>
                                <textarea class="form-control" rows="2" id ='img_4'>${product.img_4}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 5</label>
                                <textarea class="form-control" rows="2" id ='img_5'>${product.img_5}</textarea>
                            </div>
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
    } else if (type === 'Keyboard'){
        fetch (keyboardApi+'/'+id)
                .then (res => res.json())
                .then (product =>  {
                    str =`
                    <div class="container-fluid p-0">

					<div style="display:flex; justify-content: space-between;" class="mb-3">
						<h1 class="h3 d-inline align-middle">Forms sửa thông tin sản phẩm Bàn phím</h1>
                        <button style="margin-right: 30px;" class="btn btn-primary" onclick = 'editKeyboard(this)'>Sửa</button> 
					</div>

					<div class="row">
						<div class="col-12">
                        <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">ID Sản phẩm</h5>
                        </div>
                        <div class="card-body">
                            <input id = "id" type="text" class="form-control" value="${product.id}" readonly>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Tên sản phẩm</h5>
                        </div>
                        <div class="card-body">
                            <input id = "name" type="text" class="form-control" value="${product.name}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Giá cũ</h5>
                        </div>
                        <div class="card-body">
                            <input id = "old_price" type="text" class="form-control" value="${product.old_price}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Giá mới</h5>
                        </div>
                        <div class="card-body">
                            <input type="text" class="form-control" id = 'new_price' value="${product.new_price}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Tỷ lệ % giảm</h5>
                        </div>
                        <div class="card-body">
                            <input type="text" class="form-control" id = 'new_productt_percent' value="${product.new_productt_percent}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Link ảnh chính</h5>
                        </div>
                        <div class="card-body">
                            <textarea class="form-control" rows="2" id = 'img' >${product.img}</textarea>
                        </div>
                    </div>
                    
                    <!-- chỉnh sửa 5 ảnh nhỏ -->
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Link ảnh phụ</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">Ảnh 1</label>
                                <textarea class="form-control" rows="2" id ='img_1' >${product.img_1}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 2</label>
                                <textarea class="form-control" rows="2" id ='img_2'>${product.img_2}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 3</label>
                                <textarea class="form-control" rows="2" id ='img_3'>${product.img_3}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 4</label>
                                <textarea class="form-control" rows="2" id ='img_4'>${product.img_4}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 5</label>
                                <textarea class="form-control" rows="2" id ='img_5'>${product.img_5}</textarea>
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
    } else if (type === 'Headphone'){
        fetch (headphoneApi+'/'+id)
                .then (res => res.json())
                .then (product =>  {
                    str =`
                    <div class="container-fluid p-0">

					<div style="display:flex; justify-content: space-between;" class="mb-3">
						<h1 class="h3 d-inline align-middle">Forms sửa thông tin sản phẩm Tai nghe</h1>
                        <button style="margin-right: 30px;" class="btn btn-primary" onclick ='editHeadphone(this)'>Sửa</button> 
					</div>

					<div class="row">
						<div class="col-12">
                        <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">ID Sản phẩm</h5>
                        </div>
                        <div class="card-body">
                            <input id = "id" type="text" class="form-control" value="${product.id}" readonly>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Tên sản phẩm</h5>
                        </div>
                        <div class="card-body">
                            <input id = "name" type="text" class="form-control" value="${product.name}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Giá cũ</h5>
                        </div>
                        <div class="card-body">
                            <input id = "old_price" type="text" class="form-control" value="${product.old_price}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Giá mới</h5>
                        </div>
                        <div class="card-body">
                            <input type="text" class="form-control" id = 'new_price' value="${product.new_price}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Tỷ lệ % giảm</h5>
                        </div>
                        <div class="card-body">
                            <input type="text" class="form-control" id = 'new_productt_percent' value="${product.new_productt_percent}">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Link ảnh chính</h5>
                        </div>
                        <div class="card-body">
                            <textarea class="form-control" rows="2" id = 'img' >${product.img}</textarea>
                        </div>
                    </div>
                    
                    <!-- chỉnh sửa 5 ảnh nhỏ -->
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Link ảnh phụ</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label">Ảnh 1</label>
                                <textarea class="form-control" rows="2" id ='img_1' >${product.img_1}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 2</label>
                                <textarea class="form-control" rows="2" id ='img_2'>${product.img_2}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 3</label>
                                <textarea class="form-control" rows="2" id ='img_3'>${product.img_3}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 4</label>
                                <textarea class="form-control" rows="2" id ='img_4'>${product.img_4}</textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Ảnh 5</label>
                                <textarea class="form-control" rows="2" id ='img_5'>${product.img_5}</textarea>
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
}

editOffice = () => {
    let id=document.getElementById("id").value
    let type = 'Office'
    let name=document.getElementById("name").value
    let old_price=document.getElementById("old_price").value
    let new_price=document.getElementById("new_price").value
    let new_productt_percent = document.getElementById("new_productt_percent").value
    let img=document.getElementById("img").value
    let img_1=document.getElementById("img_1").value
    let img_2=document.getElementById("img_2").value
    let img_3=document.getElementById("img_3").value
    let img_4=document.getElementById("img_4").value
    let img_5=document.getElementById("img_5").value
    let CPU=document.getElementById("CPU").value
    let RAM=document.getElementById("RAM").value
    let Hardware=document.getElementById("Hardware").value
    let Card=document.getElementById("Card").value
    let screen=document.getElementById("screen").value
    let CGT =document.getElementById("CGT").value
    let keyboard=document.getElementById("keyboard").value
    let SDcard=document.getElementById("SDcard").value
    let Audio=document.getElementById("Audio").value
    let Bluetooth=document.getElementById("Bluetooth").value
    let Webcam=document.getElementById("Webcam").value
    let OS=document.getElementById("OS").value
    let Pin=document.getElementById("Pin").value
    let Weigth=document.getElementById("Weigth").value
    let color=document.getElementById("color").value
    let size=document.getElementById("size").value

    var data={
        id : id,
        type :type,
        name: name,
        old_price: old_price,
        new_price: new_price,
        new_productt_percent: new_productt_percent,
        img: img,
        img_1: img_1,
        img_2: img_2,
        img_3: img_3,
        img_4: img_4,
        img_5: img_5,
        CPU: CPU,
        RAM: RAM,
        Hardware: Hardware,
        Card: Card,
        screen: screen,
        CGT: CGT,
        keyboard: keyboard,
        SDcard: SDcard,
        Audio: Audio,
        Bluetooth: Bluetooth,
        Webcam: Webcam,
        OS: OS,
        Pin: Pin,
        Weigth: Weigth,
        color: color,
        size: size
    }
    fetchData(lapOfficeApi+'/'+id,"PUT",data)
}

editGaming = () => {
    let id=document.getElementById("id").value
    let type = 'Gaming'
    let name=document.getElementById("name").value
    let old_price=document.getElementById("old_price").value
    let new_price=document.getElementById("new_price").value
    let new_productt_percent = document.getElementById("new_productt_percent").value
    let img=document.getElementById("img").value
    let img_1=document.getElementById("img_1").value
    let img_2=document.getElementById("img_2").value
    let img_3=document.getElementById("img_3").value
    let img_4=document.getElementById("img_4").value
    let img_5=document.getElementById("img_5").value
    let CPU=document.getElementById("CPU").value
    let RAM=document.getElementById("RAM").value
    let Hardware=document.getElementById("Hardware").value
    let Card=document.getElementById("Card").value
    let screen=document.getElementById("screen").value
    let CGT =document.getElementById("CGT").value
    let keyboard=document.getElementById("keyboard").value
    let SDcard=document.getElementById("SDcard").value
    let Audio=document.getElementById("Audio").value
    let Bluetooth=document.getElementById("Bluetooth").value
    let Webcam=document.getElementById("Webcam").value
    let OS=document.getElementById("OS").value
    let Pin=document.getElementById("Pin").value
    let Weigth=document.getElementById("Weigth").value
    let color=document.getElementById("color").value
    let size=document.getElementById("size").value

    var data={
        id : id,
        type :type,
        name: name,
        old_price: old_price,
        new_price: new_price,
        new_productt_percent: new_productt_percent,
        img: img,
        img_1: img_1,
        img_2: img_2,
        img_3: img_3,
        img_4: img_4,
        img_5: img_5,
        CPU: CPU,
        RAM: RAM,
        Hardware: Hardware,
        Card: Card,
        screen: screen,
        CGT: CGT,
        keyboard: keyboard,
        SDcard: SDcard,
        Audio: Audio,
        Bluetooth: Bluetooth,
        Webcam: Webcam,
        OS: OS,
        Pin: Pin,
        Weigth: Weigth,
        color: color,
        size: size
    }
    fetchData(lapGamingApi+'/'+id,"PUT",data)
}

editMouse = () => {
    let id=document.getElementById("id").value
    let type = 'Mouse'
    let name=document.getElementById("name").value
    let old_price=document.getElementById("old_price").value
    let new_price=document.getElementById("new_price").value
    let new_productt_percent = document.getElementById("new_productt_percent").value
    let img=document.getElementById("img").value
    let img_1=document.getElementById("img_1").value
    let img_2=document.getElementById("img_2").value
    let img_3=document.getElementById("img_3").value
    let img_4=document.getElementById("img_4").value
    let img_5=document.getElementById("img_5").value

    var data={
        id : id,
        type :type,
        name: name,
        old_price: old_price,
        new_price: new_price,
        new_productt_percent: new_productt_percent,
        img: img,
        img_1: img_1,
        img_2: img_2,
        img_3: img_3,
        img_4: img_4,
        img_5: img_5,
    }
    fetchData(mouseApi+'/'+id,"PUT",data)
}

editKeyboard = () => {
    let id=document.getElementById("id").value
    let type = 'Keyboard'
    let name=document.getElementById("name").value
    let old_price=document.getElementById("old_price").value
    let new_price=document.getElementById("new_price").value
    let new_productt_percent = document.getElementById("new_productt_percent").value
    let img=document.getElementById("img").value
    let img_1=document.getElementById("img_1").value
    let img_2=document.getElementById("img_2").value
    let img_3=document.getElementById("img_3").value
    let img_4=document.getElementById("img_4").value
    let img_5=document.getElementById("img_5").value

    var data={
        id : id,
        type :type,
        name: name,
        old_price: old_price,
        new_price: new_price,
        new_productt_percent: new_productt_percent,
        img: img,
        img_1: img_1,
        img_2: img_2,
        img_3: img_3,
        img_4: img_4,
        img_5: img_5,
    }
    fetchData(keyboardApi+'/'+id,"PUT",data)
}

editHeadphone = () => {
    let id=document.getElementById("id").value
    let type = 'Headphone'
    let name=document.getElementById("name").value
    let old_price=document.getElementById("old_price").value
    let new_price=document.getElementById("new_price").value
    let new_productt_percent = document.getElementById("new_productt_percent").value
    let img=document.getElementById("img").value
    let img_1=document.getElementById("img_1").value
    let img_2=document.getElementById("img_2").value
    let img_3=document.getElementById("img_3").value
    let img_4=document.getElementById("img_4").value
    let img_5=document.getElementById("img_5").value

    var data={
        id : id,
        type :type,
        name: name,
        old_price: old_price,
        new_price: new_price,
        new_productt_percent: new_productt_percent,
        img: img,
        img_1: img_1,
        img_2: img_2,
        img_3: img_3,
        img_4: img_4,
        img_5: img_5,
    }
    fetchData(headphoneApi+'/'+id,"PUT",data)
}

deleteProduct = (product) => {
    let id = product.getAttribute('id_product')
    let type = product.getAttribute ('type_product')
    let chose=confirm('Bạn có chắc muốn xóa sản phẩm này khỏi hệ thống ?')
    if(chose == true){
        if (type === 'Office'){
            fetchData(lapOfficeApi+'/'+id,'DELETE')
        } else if (type === 'Gaming'){
            fetchData(lapGamingApi+'/'+id,'DELETE')
        } else if (type === 'Mouse'){
            fetchData(mouseApi+'/'+id,'DELETE')
        } else if (type === 'Keyboard'){
            fetchData(keyboardApi+'/'+id,'DELETE')
        } else if (type === 'Headphone'){
            fetchData(headphoneApi+'/'+id,'DELETE')
        } 
    }
}


addProduct = (prod) => {
    // window.open('product-add.html','_self');
    let type = prod.getAttribute('type')

    if (type === 'Office'){
        fetch (lapOfficeApi)
            .then(res => res.json())
            .then(officeProd => {
                let lengthOffice = officeProd.length;
                let formThemProdLaptop = `
                    <div class="container-fluid p-0">
                        <div style="display:flex; justify-content: space-between;" class="mb-3">
                            <h1 class="h3 d-inline align-middle">Forms thêm sản phẩm Laptop</h1>
                            <button onclick='addOffice()' style="margin-right: 30px;" class="btn btn-success">Thêm</button>
                        </div>

                        <!-- Form-edit left -->
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">ID Sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id='1' value="${lengthOffice+1}" readonly>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Tên sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '2' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Loại sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id='3' value="Office" readonly>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Giá cũ</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '4' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Giá mới</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id ='5' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Tỷ lệ % giảm giá</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id ='6' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Link ảnh chính</h5>
                                    </div>
                                    <div class="card-body">
                                        <textarea class="form-control" id ='7' rows="2"></textarea>
                                    </div>
                                </div>
                                
                                <!-- chỉnh sửa 5 ảnh nhỏ -->
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Link ảnh phụ</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 1</label>
                                            <textarea class="form-control" id = '8' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 2</label>
                                            <textarea class="form-control" id= '9' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 3</label>
                                            <textarea class="form-control" id ='10' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 4</label>
                                            <textarea class="form-control" id = '11' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 5</label>
                                            <textarea class="form-control" id = '12' rows="2"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">CPU</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '13' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Ram</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '14' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Hardware</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '15' value="">
                                    </div>
                                </div>

                            </div>

                            <div class="col-12 col-lg-6">
                                
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Card màn hình</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '16' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Màn hình</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '17' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Cổng giao tiếp</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '18' value="">
                                    </div>
                                </div>
                            
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Bàn phím</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '19' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">SDcard</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '20' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Audio</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '21' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Bluetooth</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '22' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Webcam</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '23' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Hệ điều hành</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '24' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Pin</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '25' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Trọng lượng</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '26' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Màu sắc</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '27' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Kích cỡ</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '28' value="">
                                    </div> 
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                `
                let index = document.getElementById('content')
                index.innerHTML = formThemProdLaptop

                addOffice = () => setTimeout(() => {
                    let id = document.getElementById("1").value
                    let name=document.getElementById("2").value
                    let type = document.getElementById("3").value
                    let old_price=document.getElementById("4").value
                    let new_price=document.getElementById("5").value
                    let new_productt_percent = document.getElementById("6").value
                    let img=document.getElementById("7").value
                    let img_1=document.getElementById("8").value
                    let img_2=document.getElementById("9").value
                    let img_3=document.getElementById("10").value
                    let img_4=document.getElementById("11").value
                    let img_5=document.getElementById("12").value
                    let CPU=document.getElementById("13").value
                    let RAM=document.getElementById("14").value
                    let Hardware=document.getElementById("15").value
                    let Card=document.getElementById("16").value
                    let screen=document.getElementById("17").value
                    let CGT =document.getElementById("18").value
                    let keyboard=document.getElementById("19").value
                    let SDcard=document.getElementById("20").value
                    let Audio=document.getElementById("21").value
                    let Bluetooth=document.getElementById("22").value
                    let Webcam=document.getElementById("23").value
                    let OS=document.getElementById("24").value
                    let Pin=document.getElementById("25").value
                    let Weigth=document.getElementById("26").value
                    let color=document.getElementById("27").value
                    let size=document.getElementById("28").value

                    let data={
                        id : id,
                        type :type,
                        name: name,
                        old_price: old_price,
                        new_price: new_price,
                        new_productt_percent: new_productt_percent,
                        img: img,
                        img_1: img_1,
                        img_2: img_2,
                        img_3: img_3,
                        img_4: img_4,
                        img_5: img_5,
                        CPU: CPU,
                        RAM: RAM,
                        Hardware: Hardware,
                        Card: Card,
                        screen: screen,
                        CGT: CGT,
                        keyboard: keyboard,
                        SDcard: SDcard,
                        Audio: Audio,
                        Bluetooth: Bluetooth,
                        Webcam: Webcam,
                        OS: OS,
                        Pin: Pin,
                        Weigth: Weigth,
                        color: color,
                        size: size
                    }
                    if (name === ''){
                        alert('"Tên sản phẩm" không được bỏ trống !!')
                    } else if (new_price === ''){
                        alert('"Giá của sản phẩm" không được bỏ trống !!')
                    } else if (img === ''){
                        alert('Sản phẩm bắt buộc phải có một ảnh chính để hiển thị trên trang chủ !!')
                    } else {
                        fetchData (lapOfficeApi,'POST',data)
                    }
                }, 1000);
            })
    } else if (type === "Gaming"){
        fetch (lapGamingApi)
        .then(res => res.json())
        .then(officeProd => {
            let lengthOffice = officeProd.length;
            let formThemProdLaptop = `
                <div class="container-fluid p-0">
                    <div style="display:flex; justify-content: space-between;" class="mb-3">
                        <h1 class="h3 d-inline align-middle">Forms thêm sản phẩm Laptop</h1>
                        <button onclick = 'addGaming()' style="margin-right: 30px;" class="btn btn-success">Thêm</button> 
                    </div>

                    <!-- Form-edit left -->
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">ID Sản phẩm</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id='1' value="${lengthOffice+1}" readonly>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Tên sản phẩm</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '2' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Loại sản phẩm</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id='3' value="Gaming">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Giá cũ</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '4' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Giá mới</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id ='5' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Tỷ lệ % giảm giá</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id ='6' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Link ảnh chính</h5>
                                </div>
                                <div class="card-body">
                                    <textarea class="form-control" id ='7' rows="2"></textarea>
                                </div>
                            </div>
                            
                            <!-- chỉnh sửa 5 ảnh nhỏ -->
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Link ảnh phụ</h5>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label class="form-label">Ảnh 1</label>
                                        <textarea class="form-control" id = '8' rows="2"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Ảnh 2</label>
                                        <textarea class="form-control" id= '9' rows="2"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Ảnh 3</label>
                                        <textarea class="form-control" id ='10' rows="2"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Ảnh 4</label>
                                        <textarea class="form-control" id = '11' rows="2"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Ảnh 5</label>
                                        <textarea class="form-control" id = '12' rows="2"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">CPU</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '13' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Ram</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '14' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Hardware</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '15' value="">
                                </div>
                            </div>

                        </div>

                        <div class="col-12 col-lg-6">
                            
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card màn hình</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '16' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Màn hình</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '17' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Cổng giao tiếp</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '18' value="">
                                </div>
                            </div>
                        
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Bàn phím</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '19' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">SDcard</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '20' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Audio</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '21' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Bluetooth</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '22' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Webcam</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '23' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Hệ điều hành</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '24' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Pin</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '25' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Trọng lượng</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '26' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Màu sắc</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '27' value="">
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Kích cỡ</h5>
                                </div>
                                <div class="card-body">
                                    <input type="text" class="form-control" id = '28' value="">
                                </div> 
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            `
            let index = document.getElementById('content')
            index.innerHTML = formThemProdLaptop

            addGaming = () => setTimeout(() => {
                let id = document.getElementById("1").value
                    let name=document.getElementById("2").value
                    let type = document.getElementById("3").value
                    let old_price=document.getElementById("4").value
                    let new_price=document.getElementById("5").value
                    let new_productt_percent = document.getElementById("6").value
                    let img=document.getElementById("7").value
                    let img_1=document.getElementById("8").value
                    let img_2=document.getElementById("9").value
                    let img_3=document.getElementById("10").value
                    let img_4=document.getElementById("11").value
                    let img_5=document.getElementById("12").value
                    let CPU=document.getElementById("13").value
                    let RAM=document.getElementById("14").value
                    let Hardware=document.getElementById("15").value
                    let Card=document.getElementById("16").value
                    let screen=document.getElementById("17").value
                    let CGT =document.getElementById("18").value
                    let keyboard=document.getElementById("19").value
                    let SDcard=document.getElementById("20").value
                    let Audio=document.getElementById("21").value
                    let Bluetooth=document.getElementById("22").value
                    let Webcam=document.getElementById("23").value
                    let OS=document.getElementById("24").value
                    let Pin=document.getElementById("25").value
                    let Weigth=document.getElementById("26").value
                    let color=document.getElementById("27").value
                    let size=document.getElementById("28").value

                    let data={
                        id : id,
                        type :type,
                        name: name,
                        old_price: old_price,
                        new_price: new_price,
                        new_productt_percent: new_productt_percent,
                        img: img,
                        img_1: img_1,
                        img_2: img_2,
                        img_3: img_3,
                        img_4: img_4,
                        img_5: img_5,
                        CPU: CPU,
                        RAM: RAM,
                        Hardware: Hardware,
                        Card: Card,
                        screen: screen,
                        CGT: CGT,
                        keyboard: keyboard,
                        SDcard: SDcard,
                        Audio: Audio,
                        Bluetooth: Bluetooth,
                        Webcam: Webcam,
                        OS: OS,
                        Pin: Pin,
                        Weigth: Weigth,
                        color: color,
                        size: size
                    }
                    if (name === ''){
                        alert('"Tên sản phẩm" không được bỏ trống !!')
                    } else if (new_price === ''){
                        alert('"Giá của sản phẩm" không được bỏ trống !!')
                    } else if (img === ''){
                        alert('Sản phẩm phải có một ảnh chính để hiển thị !!')
                    } else {
                        fetchData (lapGamingApi,'POST',data)
                    }
            }, 1000);
        })

    } else if (type === "Mouse"){
        fetch (mouseApi)
            .then(res => res.json())
            .then(officeProd => {
                let lengthOffice = officeProd.length;
                let formThemProdLaptop = `
                    <div class="container-fluid p-0">
                        <div style="display:flex; justify-content: space-between;" class="mb-3">
                            <h1 class="h3 d-inline align-middle">Forms thêm sản phẩm Chuột</h1>
                            <button onclick='addMouse()' style="margin-right: 30px;" class="btn btn-success">Thêm</button>
                        </div>

                        <!-- Form-edit left -->
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">ID Sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id='1' value="${lengthOffice+1}" readonly>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Tên sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '2' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Loại sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id='3' value="Mouse" readonly>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Giá cũ</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '4' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Giá mới</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id ='5' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Tỷ lệ % giảm giá</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id ='6' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Link ảnh chính</h5>
                                    </div>
                                    <div class="card-body">
                                        <textarea class="form-control" id ='7' rows="2"></textarea>
                                    </div>
                                </div>
                                
                                <!-- chỉnh sửa 5 ảnh nhỏ -->
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Link ảnh phụ</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 1</label>
                                            <textarea class="form-control" id = '8' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 2</label>
                                            <textarea class="form-control" id= '9' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 3</label>
                                            <textarea class="form-control" id ='10' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 4</label>
                                            <textarea class="form-control" id = '11' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 5</label>
                                            <textarea class="form-control" id = '12' rows="2"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                `
                let index = document.getElementById('content')
                index.innerHTML = formThemProdLaptop

                addMouse = () => setTimeout(() => {
                    let id = document.getElementById("1").value
                    let name=document.getElementById("2").value
                    let type = document.getElementById("3").value
                    let old_price=document.getElementById("4").value
                    let new_price=document.getElementById("5").value
                    let new_productt_percent = document.getElementById("6").value
                    let img=document.getElementById("7").value
                    let img_1=document.getElementById("8").value
                    let img_2=document.getElementById("9").value
                    let img_3=document.getElementById("10").value
                    let img_4=document.getElementById("11").value
                    let img_5=document.getElementById("12").value
                  
                    let data={
                        id : id,
                        type :type,
                        name: name,
                        old_price: old_price,
                        new_price: new_price,
                        new_productt_percent: new_productt_percent,
                        img: img,
                        img_1: img_1,
                        img_2: img_2,
                        img_3: img_3,
                        img_4: img_4,
                        img_5: img_5
                    }
                    if (name === ''){
                        alert('"Tên sản phẩm" không được bỏ trống !!')
                    } else if (new_price === ''){
                        alert('"Giá của sản phẩm" không được bỏ trống !!')
                    } else if (img === ''){
                        alert('Sản phẩm bắt buộc phải có một ảnh chính để hiển thị trên trang chủ !!')
                    } else {
                        fetchData (mouseApi,'POST',data)
                    }
                }, 1000);
            })
    } else if (type === "Keyboard"){
        fetch (keyboardApi)
            .then(res => res.json())
            .then(officeProd => {
                let lengthOffice = officeProd.length;
                let formThemProdLaptop = `
                    <div class="container-fluid p-0">
                        <div style="display:flex; justify-content: space-between;" class="mb-3">
                            <h1 class="h3 d-inline align-middle">Forms thêm sản phẩm Bàn phím</h1>
                            <button onclick='addKeyboard()' style="margin-right: 30px;" class="btn btn-success">Thêm</button>
                        </div>

                        <!-- Form-edit left -->
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">ID Sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id='1' value="${lengthOffice+1}" readonly>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Tên sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '2' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Loại sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id='3' value="Keyboard" readonly>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Giá cũ</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '4' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Giá mới</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id ='5' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Tỷ lệ % giảm giá</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id ='6' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Link ảnh chính</h5>
                                    </div>
                                    <div class="card-body">
                                        <textarea class="form-control" id ='7' rows="2"></textarea>
                                    </div>
                                </div>
                                
                                <!-- chỉnh sửa 5 ảnh nhỏ -->
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Link ảnh phụ</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 1</label>
                                            <textarea class="form-control" id = '8' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 2</label>
                                            <textarea class="form-control" id= '9' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 3</label>
                                            <textarea class="form-control" id ='10' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 4</label>
                                            <textarea class="form-control" id = '11' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 5</label>
                                            <textarea class="form-control" id = '12' rows="2"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                `
                let index = document.getElementById('content')
                index.innerHTML = formThemProdLaptop

                addKeyboard = () => setTimeout(() => {
                    let id = document.getElementById("1").value
                    let name=document.getElementById("2").value
                    let type = document.getElementById("3").value
                    let old_price=document.getElementById("4").value
                    let new_price=document.getElementById("5").value
                    let new_productt_percent = document.getElementById("6").value
                    let img=document.getElementById("7").value
                    let img_1=document.getElementById("8").value
                    let img_2=document.getElementById("9").value
                    let img_3=document.getElementById("10").value
                    let img_4=document.getElementById("11").value
                    let img_5=document.getElementById("12").value
                  
                    let data={
                        id : id,
                        type :type,
                        name: name,
                        old_price: old_price,
                        new_price: new_price,
                        new_productt_percent: new_productt_percent,
                        img: img,
                        img_1: img_1,
                        img_2: img_2,
                        img_3: img_3,
                        img_4: img_4,
                        img_5: img_5
                    }
                    if (name === ''){
                        alert('"Tên sản phẩm" không được bỏ trống !!')
                    } else if (new_price === ''){
                        alert('"Giá của sản phẩm" không được bỏ trống !!')
                    } else if (img === ''){
                        alert('Sản phẩm bắt buộc phải có một ảnh chính để hiển thị trên trang chủ !!')
                    } else {
                        fetchData (keyboardApi,'POST',data)
                    }
                }, 1000);
            })
    } else if (type === "Headphone"){
        fetch (headphoneApi)
            .then(res => res.json())
            .then(officeProd => {
                let lengthOffice = officeProd.length;
                let formThemProdLaptop = `
                    <div class="container-fluid p-0">
                        <div style="display:flex; justify-content: space-between;" class="mb-3">
                            <h1 class="h3 d-inline align-middle">Forms thêm sản phẩm Tai nghe</h1>
                            <button onclick='addHeadphone()' style="margin-right: 30px;" class="btn btn-success">Thêm</button>
                        </div>

                        <!-- Form-edit left -->
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">ID Sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id='1' value="${lengthOffice+1}" readonly>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Tên sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '2' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Loại sản phẩm</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id='3' value="Headphone" readonly>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Giá cũ</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id = '4' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Giá mới</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id ='5' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Tỷ lệ % giảm giá</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control" id ='6' value="">
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Link ảnh chính</h5>
                                    </div>
                                    <div class="card-body">
                                        <textarea class="form-control" id ='7' rows="2"></textarea>
                                    </div>
                                </div>
                                
                                <!-- chỉnh sửa 5 ảnh nhỏ -->
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Link ảnh phụ</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 1</label>
                                            <textarea class="form-control" id = '8' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 2</label>
                                            <textarea class="form-control" id= '9' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 3</label>
                                            <textarea class="form-control" id ='10' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 4</label>
                                            <textarea class="form-control" id = '11' rows="2"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Ảnh 5</label>
                                            <textarea class="form-control" id = '12' rows="2"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                `
                let index = document.getElementById('content')
                index.innerHTML = formThemProdLaptop

                addHeadphone = () => setTimeout(() => {
                    let id = document.getElementById("1").value
                    let name=document.getElementById("2").value
                    let type = document.getElementById("3").value
                    let old_price=document.getElementById("4").value
                    let new_price=document.getElementById("5").value
                    let new_productt_percent = document.getElementById("6").value
                    let img=document.getElementById("7").value
                    let img_1=document.getElementById("8").value
                    let img_2=document.getElementById("9").value
                    let img_3=document.getElementById("10").value
                    let img_4=document.getElementById("11").value
                    let img_5=document.getElementById("12").value
                  
                    let data={
                        id : id,
                        type :type,
                        name: name,
                        old_price: old_price,
                        new_price: new_price,
                        new_productt_percent: new_productt_percent,
                        img: img,
                        img_1: img_1,
                        img_2: img_2,
                        img_3: img_3,
                        img_4: img_4,
                        img_5: img_5
                    }
                    if (name === ''){
                        alert('"Tên sản phẩm" không được bỏ trống !!')
                    } else if (new_price === ''){
                        alert('"Giá của sản phẩm" không được bỏ trống !!')
                    } else if (img === ''){
                        alert('Sản phẩm bắt buộc phải có một ảnh chính để hiển thị trên trang chủ !!')
                    } else {
                        fetchData (headphoneApi,'POST',data)
                    }
                }, 1000);
            })
    }
}