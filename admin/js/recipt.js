const userURL = "http://localhost:3000/Account";
const donhangURL = 'http://localhost:3000/DonHang';
const OfficeURL = 'http://localhost:3000/Product_LaptopVanPhong';
const GamingURL = 'http://localhost:3000/Product_LaptopGaming';
const keyboardURL = 'http://localhost:3000/Product_Keyboard';
const mouseURL = 'http://localhost:3000/Product_Mouses';
const headphoneURL = 'http://localhost:3000/Product_Headphone';

var listRecipt=[]
var listUser=[]
var listProduct=[]

getAllRecipt = () => {

    setTimeout(() => {

        //Lay du lieu don hang
        fetch(donhangURL)
        .then (res => res.json())
        .then (dataDH => {
            dataDH.forEach(recipt => {
                var listDh ={
                    id : recipt.id,
                    id_kh: recipt.id_kh,
                    ctdh : recipt.chitietdh,
                    tongcong :recipt.tongcong,
                    day:recipt.day,
                    tinhtrang : recipt.tinhtrang    
                }
                listRecipt.push(listDh);
            });
        })
    
        //Lay du lieu khach hang
       fetch(userURL)
            .then (res => res.json())
            .then (dataUser => {
                dataUser.forEach(user => {
                    var listUs = {
                        id: user.id,
                        Customer:user.Customer,
                        Address:user.Address
                    }
                    listUser.push(listUs)
                })
            })  

        //Lay du lieu Office
        fetch(OfficeURL)
            .then (res => res.json())
            .then (data => {
                data.forEach(prod => {
                    var listOffice = {
                        id: prod.id,
                        type:prod.type,
                        name:prod.name,
                        price:prod.new_price
                    }
                    listProduct.push(listOffice)
                })
            }) 

        //Lay du lieu Gaming
        fetch(GamingURL)
            .then (res => res.json())
            .then (data => {
                data.forEach(prod => {
                    var listGaming = {
                        id: prod.id,
                        type:prod.type,
                        name:prod.name,
                        price:prod.new_price
                    }
                    listProduct.push(listGaming)
                })
            })  
            
        //Lay du lieu Mouse
        fetch(mouseURL)
            .then (res => res.json())
            .then (data => {
                data.forEach(prod => {
                    var listMouse = {
                        id: prod.id,
                        type:prod.type,
                        name:prod.name,
                        price:prod.new_price
                    }
                    listProduct.push(listMouse)
                })
            })
        
        //Lay du lieu Headphone
        fetch(headphoneURL)
            .then (res => res.json())
            .then (data => {
                data.forEach(prod => {
                    var listHeadphone = {
                        id: prod.id,
                        type:prod.type,
                        name:prod.name,
                        price:prod.new_price
                    }
                    listProduct.push(listHeadphone)
                })
            })

        //Lay du lieu Keyboard
        fetch(keyboardURL)
            .then (res => res.json())
            .then (data => {
                data.forEach(prod => {
                    var listKeyboard = {
                        id: prod.id,
                        type:prod.type,
                        name:prod.name,
                        price:prod.new_price
                    }
                    listProduct.push(listKeyboard)
                })
            })
    }, 100);
    setTimeout(() => {
        var textHTML = "";
        for ( var i = 0; i < listRecipt.length; i++){
            for (var j =0; j <listUser.length;j++){
                if (listRecipt[i].id_kh == listUser[j].id){
                    if(listRecipt[i].tinhtrang==="Ch??a nh???n h??ng"){
                        textHTML += `
                        <tr>
                            <td>${listRecipt[i].id}</td>
                            <td class="d-none d-xl-table-cell">${listUser[j].Customer}</td>
                            <td class="d-none d-xl-table-cell">${listRecipt[i].day}</td>
                            <td class="d-none d-xl-table-cell">${listUser[j].Address}</td>
                            <td><span class="badge bg-danger">${listRecipt[i].tinhtrang}</span></td>
                            <td><button onclick="detailRecipt(this)" id-recipt='${listRecipt[i].id}' class="btn btn-info">Chi ti???t</button> <button onclick="editRecipt(this)" id-recipt="${listRecipt[i].id}" class="btn btn-primary">S???a</button> <button onclick="deleteRecipt(this)" id-recipt = "${listRecipt[i].id}" class="btn btn-danger">X??a</button></td>
                        </tr>
                    `
                    }else if (listRecipt[i].tinhtrang ==="???? giao h??ng"){
                        textHTML += `
                        <tr>
                            <td>${listRecipt[i].id}</td>
                            <td class="d-none d-xl-table-cell">${listUser[j].Customer}</td>
                            <td class="d-none d-xl-table-cell">${listRecipt[i].day}</td>
                            <td class="d-none d-xl-table-cell">${listUser[j].Address}</td>
                            <td><span class="badge bg-success">${listRecipt[i].tinhtrang}</span></td>
                            <td><button onclick="detailRecipt(this)" id-recipt='${listRecipt[i].id}' class="btn btn-info">Chi ti???t</button> <button onclick="editRecipt(this)" id-recipt="${listRecipt[i].id}" class="btn btn-primary">S???a</button> <button onclick="deleteRecipt(this)" id-recipt = "${listRecipt[i].id}" class="btn btn-danger">X??a</button></td>
                        </tr>
                        `
                    }
                    
                }
            }
        }
    document.getElementById('body').innerHTML = textHTML;
    }, 200);
    console.log(listRecipt)
}

getAllRecipt()

detailRecipt = (recipt) => {
    document.getElementById("header").innerHTML=`
    <tr>
                                            <th>STT</th>
                                            <th class="d-none d-xl-table-cell">ID S???n ph???m</th>
                                            <th class="d-none d-xl-table-cell">T??n s???n ph???m</th>
                                            <th class="d-none d-xl-table-cell">S??? l?????ng</th>
                                            <th class="d-none d-xl-table-cell">Th??nh ti???n</th>
                                        </tr>
    `
    let textHTLM = "";
    let id= recipt.getAttribute('id-recipt')
    let total;
    for(i = 0 ;i < listRecipt.length;i++){
        if(listRecipt[i].id===id){
            for(h=0;h < listRecipt[i].ctdh.length;h++){
                for (j=0;j<listProduct.length;j++){
                    if(listRecipt[i].ctdh[h].id_sp === listProduct[j].id && listRecipt[i].ctdh[h].phanloai === listProduct[j].type){
                        textHTLM += `
                        <tr>
                            <td>${h+1}</td>
                            <td class="d-none d-xl-table-cell">${listRecipt[i].id}</td>
                            <td class="d-none d-xl-table-cell">${listProduct[j].name}</td>
                            <td class="d-none d-xl-table-cell">${listRecipt[i].ctdh[h].sl}</td>
                            <td class="d-none d-xl-table-cell">${listRecipt[i].ctdh[h].price}</td>
                        </tr>
                        
                        `
                        total = listRecipt[i].tongcong;
                    }
                }
        }
        }
    }
    document.getElementById('body').innerHTML=textHTLM+'<tr><td colspan=5 style="margin-right: 30px; font-weight:600;"> T???ng c???ng <span style = "margin-left:10px" class="badge bg-success">'+total+'??'+'</span></td></tr>'
}

// editRecipt = () => {
//     window.open('recipt-edit.html','_self')
// }

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

deleteRecipt = (del) => {
    var id=del.getAttribute("id-recipt")
    let chose=confirm('B???n c?? ch???c mu???n x??a ????n h??ng n??y kh???i h??? th???ng ?')
    if(chose == true){
        fetchData("http://localhost:3000/Donhang/"+id,"DELETE")
    }
}

function editRecipt  (recipt) {
    let html=document.getElementById("content");
    var id = recipt.getAttribute("id-recipt");
    let flag = false;
    setTimeout(() => {
        for (i=0;i<listRecipt.length;i++){
            if(id == listRecipt[i].id){
                if(listRecipt[i].tinhtrang==='???? giao h??ng'){
                    let str = `
                    <div class="container-fluid p-0">
                            <div style="display:flex; justify-content: space-between;" class="mb-3">
                                <h1 class="h3 d-inline align-middle">Forms s???a tr???ng th??i giao h??ng</h1>
                                <button style="margin-right: 30px;" onclick="updateRecipt(this)" class="btn btn-primary" id-recipt = "${listRecipt[i].id}">S???a</button> 
                            </div>

                            <!-- Form-edit left -->
                            <div class="row">
                                <div class="col-12 ">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5 class="card-title mb-0">Tr???ng th??i</h5>
                                        </div>
                                        <div class="card-body">
                                            <label class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="checkDone" value="option1" checked>
                                                <span class="badge bg-success">???? giao h??ng</span>
                                            </label>
                                            <label class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="checkNone" value="option2" >
                                                <span class="badge bg-danger">Ch??a nh???n h??ng</span>
                                            </label>
                                        <div>
                                    </div>                 
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    `
                    html.innerHTML = str;
                } else if (listRecipt[i].tinhtrang==='Ch??a nh???n h??ng'){
                    let str = `
                    <div class="container-fluid p-0">
                            <div style="display:flex; justify-content: space-between;" class="mb-3">
                                <h1 class="h3 d-inline align-middle">Forms s???a tr???ng th??i giao h??ng</h1>
                                <button style="margin-right: 30px;" onclick="updateRecipt(this)" class="btn btn-primary" id-recipt = "${listRecipt[i].id}">S???a</button> 
                            </div>

                            <!-- Form-edit left -->
                            <div class="row">
                                <div class="col-12 ">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5 class="card-title mb-0">Tr???ng th??i</h5>
                                        </div>
                                        <div class="card-body">
                                            <label class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="checkDone" value="option1">
                                                <span class="badge bg-success">???? giao h??ng</span>
                                            </label>
                                            <label class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="checkNone"  checked value="option2">
                                                <span class="badge bg-danger">Ch??a nh???n h??ng</span>
                                            </label>
                                        <div>
                                    </div>                 
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    `
                    html.innerHTML = str;
                }

            }
        }
    }, 200);
}

function updateRecipt (recipt){
    let checkDone = document.getElementById("checkDone");
    let checkNone = document.getElementById("checkNone");
    let idrecipt =  recipt.getAttribute("id-recipt")

    setTimeout(() => {
        if((checkDone.checked === true && checkNone.checked === true) || (checkDone.checked === false && checkNone.checked === false)){
            confirm("Vui l??ng ch???n duy nh???t 1 tr???ng th??i cho ????n h??ng !")
        } else if (checkDone.checked === true && checkNone.checked === false) {
            for(i =0 ; i < listRecipt.length ; i++){
                if(idrecipt === listRecipt[i].id){
                    let data = listRecipt[i];
                    data.tinhtrang = "???? giao h??ng"
                    console.log(data)
                    fetchData(donhangURL+'/'+idrecipt,"PUT",data)
                }
            }
        } else if (checkDone.checked === false && checkNone.checked === true) {
            for(j =0 ; j < listRecipt.length ; j++){
                if(idrecipt === listRecipt[j].id){
                    let data = listRecipt[j];
                    data.tinhtrang = "Ch??a nh???n h??ng"
                    console.log(data)
                    fetchData(donhangURL+'/'+idrecipt,"PUT",data)
                }
            }
        }
    }, 100);
}