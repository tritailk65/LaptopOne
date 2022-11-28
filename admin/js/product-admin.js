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
    let htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">Office Laptop</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editProduct()" class="btn btn-primary">Sửa</button> <button onclick="deleteProduct()" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML = htmls.join("");
}

function getGaming(callback) {
    fetch(lapGamingApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderGaming(Products){ 
    var tableProd = document.getElementById("body");;
    var htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">Gaming Laptop</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editProduct()" class="btn btn-primary">Sửa</button> <button onclick="deleteProduct()" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML=htmls.join("")
}

function getMouse(callback) {
    fetch(mouseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderMouse(Products){ 
    var tableProd = document.getElementById("body");;
    var htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">Mousep</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editProduct()" class="btn btn-primary">Sửa</button> <button onclick="deleteProduct()" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML=htmls.join("")
}

function getKeyboard(callback) {
    fetch(keyboardApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderKeyboard(Products){ 
    var tableProd = document.getElementById("body");;
    var htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">Keyboard</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editProduct()" class="btn btn-primary">Sửa</button> <button onclick="deleteProduct()" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML=htmls.join("")
}

function getHeadphone(callback) {
    fetch(headphoneApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function renderHeadphone(Products){ 
    var tableProd = document.getElementById("body");;
    var htmls = Products.map(function (product){
        return `
        <tr>
			<td>${product.id}</td>
			<td class="d-none d-xl-table-cell">${product.name}</td>
				<td class="d-none d-xl-table-cell">Headphone</td>
				<td class="d-none d-xl-table-cell">${product.new_price}</td>
				<td class="d-none d-xl-table-cell"><img class="avatar" src="${product.img}"></td>
				<td><button onclick="editProduct()" class="btn btn-primary">Sửa</button> <button onclick="deleteProduct()" class="btn btn-danger">Xóa</button></td>
        </tr>
        `
    });
    tableProd.innerHTML=htmls.join("")
}

editProduct =  () => {
    window.open('product-edit.html','_self');
}

deleteProduct = () => {
    confirm("Bạn có chắc muốn xóa sản phẩm này ra khỏi hệ thống ?")
}

addProduct = () => {
    window.open('product-add.html','_self');
}

