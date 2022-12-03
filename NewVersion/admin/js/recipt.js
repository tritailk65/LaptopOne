reciptChange = (url,type,inform) => {
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
detailRecipt = (recipt) => {
    window.open('recipt-detail.html','_self')
    var id=recipt.getAttribute("id_recipt")
    var detail=reciptChange("/"+id,"GET")
    //xử lý đẩy lên bảng
}

editRecipt = (recipt) => {
    window.open('recipt-edit.html','_self')
    var id=recipt.getAttribute("id_recipt")
    var detail=reciptChange("/"+id,"GET")
    //Xử lý đẩy lên các input
}
deleteRecipt = (del) => {
    var id=del.getAttribute("id_recipt")
    let chose=confirm("Bạn có chắc muốn xóa đơn hàng này ?")
    if(chose == true){
        reciptChange("/"+id,"DELETE")
    }
}