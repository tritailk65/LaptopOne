function HienThi4 (TenLoaiChon_arr=[])
{
var list4 = document.getElementById('list4');
list4.innerHTML='';
for(i=0;i<arr.length;i++)
{
    HinhL=arr[i].Hinh;
    TenLoaiL=arr[i].TenLoai;
    TenL=arr[i].Ten;
    GiaL=arr[i].Gia;
    ThuongHieuL=arr[i].ThuongHieu;
    LinkChiTietL = arr[i].LinkChiTiet;

    if ( i==44 || i==47 || i==49 || i==53
       || i==61 || i==57 || i==59 || i==63 )
    {
        list4.innerHTML+=`
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
HienThi4();