function HienThi5 (TenLoaiChon_arr=[])
{
var list5 = document.getElementById('list5');
list5.innerHTML='';
for(i=0;i<arr.length;i++)
{
    HinhL=arr[i].Hinh;
    TenLoaiL=arr[i].TenLoai;
    TenL=arr[i].Ten;
    GiaL=arr[i].Gia;
    ThuongHieuL=arr[i].ThuongHieu;
    LinkChiTietL = arr[i].LinkChiTiet;


    if ( i==71 || i==73 || i==75 || i==77 )
    {
        list5.innerHTML+=`
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
HienThi5();