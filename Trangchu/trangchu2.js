function HienThi2 (TenLoaiChon_arr=[])
{
    var list2 = document.getElementById('list2');
    list2.innerHTML='';
    for(i=0;i<arr.length;i++)
    {
        HinhL=arr[i].Hinh;
        TenLoaiL=arr[i].TenLoai;
        TenL=arr[i].Ten;
        GiaL=arr[i].Gia;
        ThuongHieuL=arr[i].ThuongHieu;
        LinkChiTietL = arr[i].LinkChiTiet;

        if (i==0 || i==8 || i==5 || i==12 )
        {
            list2.innerHTML+=`
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
HienThi2();