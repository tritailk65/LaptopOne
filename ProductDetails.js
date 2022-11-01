window.onload=function(){
    PushTable();
    PushInformationImage();
    PushInformationContent();
}
function NextImage(){
    let lists= document.querySelectorAll('.productdetails__header--information--image--item--image');
    document.getElementById('image').appendChild(lists[0]);
}
function PreviousImage(){
    let lists= document.querySelectorAll('.productdetails__header--information--image--item--image');
    document.getElementById('image').prepend(lists[lists.length-1]);
}

function PushInformationImage(){
    var str="<div class='productdetails__header--information--image--item' id='image'>"+
    "<div class='productdetails__header--information--image--item--image' id='image-1' style='background-image: url("+"1.jpg"+") ;'></div>"+
    "<div class='productdetails__header--information--image--item--image' id='image-2' style='background-image: url("+"2.jpg"+") ;'></div>"+
    "<div class='productdetails__header--information--image--item--image' id='image-3' style='background-image: url("+"3.jpg"+") ;'></div>"+
    "<div class='productdetails__header--information--image--item--image' id='image-4' style='background-image: url("+"4.jpg"+") ;'></div>"+
    "<div class='productdetails__header--information--image--item--image' id='image-5' style='background-image: url("+"5.jpg"+") ;'></div>"+
    "<div class='productdetails__header--information--image--item--image' id='image-6' style='background-image: url("+"6.jpg"+") ;'></div>"+
    "</div>"+
    "<button class='productdetails__header--information--image--previous' onclick='PreviousImage()'><</button>"+
    "<button class='productdetails__header--information--image--next' onclick='NextImage()''>></button>";
    document.getElementById('product--image').innerHTML=str;
}
function PushInformationContent(){
    var str="<div class='productdetails__header--information--content--name' id='product-name'>Tên sản phẩm</div>"+
    "<div class='productdetails__header--information--content--info'>"+
    "<span class='productdetails__header--information--content--info--details1'>"+"Thông tin chung: "+"</span><br>"+
    "<span class='productdetails__header--information--content--info--details2'>"+"Bảo hành"+"</span><br>"+
    "<span class='productdetails__header--information--content--info--details2'>"+"Hãng"+"</span><br>"+
    "<span class='productdetails__header--information--content--info--details2'>"+"Window bản quyền"+"</span>"+
    "</div>"+
    "<div class='productdetails__header--information--content--price' id='product-price'>"+"Giá của sản phẩm"+"</div>"+
    "<div class='productdetails__header--information--content--order' onclick='OrderProduct()'>Đặt hàng</div>";
    document.getElementById('product--content').innerHTML=str;
}
function PushTable(){
    let list;
    var str="<div class='productdetails__details--title'><b>Thông số kỹ thuật</b></div>"+
    "<table class='productdetails__details--table' cellspacing='3' cellpadding='10' border='10' bordercolor='black' id='product--table'>"+
    "<tr><td><b>CPU:</b></td><td>"+"</td>"+
    "<tr><td><b>RAM:</b></td><td>"+"</td>"+
    "<tr><td><b>Ổ cứng:</b></td><td>"+"</td>"+
    "<tr><td><b>Card đồ họa:</b></td><td>"+"</td>"+
    "<tr><td><b>Màn hình:</b></td><td>"+"</td>"+
    "<tr><td><b>Cổng giao tiếp:</b></td><td>"+"</td>"+
    "<tr><td><b>Audio:</b></td><td>"+"</td>"+
    "<tr><td><b>Bàn phím:</b></td><td>"+"</td>"+
    "<tr><td><b>Đọc thẻ nhớ:</b></td><td>"+"</td>"+
    "<tr><td><b>Bluetooth:</b></td><td>"+"</td>"+
    "<tr><td><b>Webcam:</b></td><td>"+"</td>"+
    "<tr><td><b>Hệ điều hành:</b></td><td>"+"</td>"+
    "<tr><td><b>Pin:</b></td><td>"+"</td>"+
    "<tr><td><b>Trọng lượng:</b></td><td>"+"</td>"+
    "<tr><td><b>Màu sắc:</b></td><td>"+"</td>"+
    "<tr><td><b>Kích thước:</b></td><td>"+"</td></table>"+
    "<div class='productdetails__details--review'><b>Đánh giá chi tiết"+"</b></div>"+
    "<div class='productdetails__details--review'>"+"</div>"+
    "<div class='productdetails__details--review'>"+"</div>"+
    "<div class='productdetails__details--review'>"+"</div>"+
    "<div class='productdetails__details--review'>"+"</div>"+
    "<div class='productdetails__details--review'>"+"</div>"+
    "<div class='productdetails__details--review'>"+"</div>";
    document.getElementById('productdetail').innerHTML=str;
}
