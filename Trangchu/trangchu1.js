
function HienThi1 (TenLoaiChon_arr=[])
{
var list1 = document.getElementById('list1');
list1.innerHTML='';
for(i=0;i<arr.length;i++)
{
    HinhL=arr[i].Hinh;
    TenLoaiL=arr[i].TenLoai;
    TenL=arr[i].Ten;
    GiaL=arr[i].Gia;
    ThuongHieuL=arr[i].ThuongHieu;
    LinkChiTietL = arr[i].LinkChiTiet;


    if ( i==18 || i==20 || i==22 || i==24 )
    {
        list1.innerHTML+=`
    <div class="lt">
    
            <img src="${HinhL}" alt="Đang chờ hình">
        <div class="product-cat">${TenLoaiL}</div>
        <a href="${LinkChiTietL}" class="product-name">${TenL}</a>
        <div class="product-price">${GiaL}</div>

    </div>  
    
    `; 
    }

}
}
HienThi1();

