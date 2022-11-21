function HienThi3 (TenLoaiChon_arr=[])
{
var list3 = document.getElementById('list3');
list3.innerHTML='';
for(i=0;i<arr.length;i++)
{
    HinhL=arr[i].Hinh;
    TenLoaiL=arr[i].TenLoai;
    TenL=arr[i].Ten;
    GiaL=arr[i].Gia;
    ThuongHieuL=arr[i].ThuongHieu;
    LinkChiTietL = arr[i].LinkChiTiet;

    if ( i==33 || i==35 || i==38 || i==41 )
    {
        list3.innerHTML+=`
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
HienThi3();