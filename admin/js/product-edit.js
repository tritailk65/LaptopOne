productChange = (url,type,inform) => {
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
        var detail
        fetch(url,{
            method: type,
            headers:{
                    'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => detail=data)
        .catch(error => console.log(error))
        return detail
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
const lapOfficeApi = 'http://localhost:3000/Product_LaptopVanPhong';
const lapGamingApi = 'http://localhost:3000/Product_LaptopGaming';
const keyboardApi = 'http://localhost:3000/Product_Keyboard';
const mouseApi = 'http://localhost:3000/Product_Mouses';
const headphoneApi = 'http://localhost:3000/Product_Headphone';
editProduct =  (product) => {
    var mywindow=window.open('product-edit.html','_self');
    var id=product.getAttribute("id_product")
    var detail=productChange("/"+id,"GET")
    //Xử lý đẩy lên các input
    var upload=mywindow.document.getElementById("row")
    upload.innerHTML=`<div class="col-12 col-lg-6">
    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">ID Sản phẩm</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.id}" readonly>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Tên sản phẩm</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.name}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Giá cũ</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.old_price}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Giá mới</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.new_price}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Link ảnh chính</h5>
        </div>
        <div class="card-body">
            <textarea class="form-control" rows="2">${detail.img}</textarea>
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
                <textarea class="form-control" rows="2">${detail.img_1}</textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Ảnh 2</label>
                <textarea class="form-control" rows="2">${detail.img_2}</textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Ảnh 3</label>
                <textarea class="form-control" rows="2">${detail.img_3}</textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Ảnh 4</label>
                <textarea class="form-control" rows="2">${detail.img_4}</textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Ảnh 5</label>
                <textarea class="form-control" rows="2">${detail.img_5}</textarea>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">CPU</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.CPU}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Ram</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.RAM}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Hardware</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.Hardware}">
        </div>
    </div>

</div>

<div class="col-12 col-lg-6">
    
    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Card màn hình</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.Card}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Màn hình</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.screen}">
        </div>
    </div>


    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Cổng giao tiếp</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.CGT}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Bàn phím</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.keyboard}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">SDcard</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.SDcard}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Audio</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.Audio}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Bluetooth</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.Bluetooth}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Webcam</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.Webcam}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Hệ điều hành</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.OS}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Pin</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.Pin}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Trọng lượng</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.Wiegth}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Màu sắc</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.color}">
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">Kích cỡ</h5>
        </div>
        <div class="card-body">
            <input type="text" class="form-control" value="${detail.size}">
        </div> 
    </div>
</div>`
    //Xử lý lưu lại dữ liệu
    var edit=document.getElementById("edit")
    edit.onclick=function(){
        var newDetail={

        }
    }
    productChange("/"+id,"PUT",newDetail)
}

deleteProduct = (del) => {
    var id=del.getAttribute("id_product")
    var origin=del.getAttribute("origin")
    let chose=confirm("Bạn có chắc muốn xóa sản phẩm này ra khỏi hệ thống ?")
    if(origin==="Office"){
        url=lapOfficeApi
    }

    if(origin==="Gaming"){
        url=lapGamingApi
    }

    if(origin==="Keyboard"){
        url=keyboardApiKeyboard
    }

    if(origin==="Mouse"){
        url=mouseApi
    }

    if(origin === "Headphone"){
        url = headphoneApi
    }
    if(chose == true){
        productChange(url+"/"+id,"DELETE")
    }
}

addProduct = () => {
    window.open('product-add.html','_self');
}