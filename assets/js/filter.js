function Search1(){
    var detail="Office"
    
    var product=""
    fetch(lapOfficeApi)
    .then(res=> res.json())
    .then(data => { console.log(detail)
        data.forEach(item => {
            var type=item.type
            console.log(type)
            if(type.includes(detail)){
                console.log(item)
                product+=SearchProduct(item,"Office")
            }
        });
    })

    setTimeout(function(){
        document.getElementById("content-home").innerHTML='<div class = "product-search"> <h1>Laptop Văn Phòng</h1>'+product+'</div>'
    },500)
    }
    
    function Search2(){
        var detail="Gaming"
        var product =""
        fetch(lapGamingApi)
    .then(res=> res.json())
    .then(data => {
        data.forEach(item => {
            var type=item.type
            console.log(type)
            if(type.includes(detail)){
                product+=SearchProduct(item,"Gaming")
            }
        });
    })
        setTimeout(function(){
            document.getElementById("content-home").innerHTML='<div class = "product-search"> <h1>Laptop Gaming</h1>'+product+'</div>'
        },500)
    }

    function Search3(){
        var detail="Keyboard"
        var product =""
        fetch(keyboardApi)
    .then(res=> res.json())
    .then(data => {
        data.forEach(item => {
            var type=item.type
            console.log(type)
            if(type.includes(detail)){
                product+=SearchProduct(item,"Keyboard")
            }
        });
    })
        setTimeout(function(){
            document.getElementById("content-home").innerHTML='<div class = "product-search"> <h1>Bàn phím</h1>'+product+'</div>'
        },500)
    }

    function Search4(){
        var detail="Mouse"
        var product =""
        fetch(mouseApi)
    .then(res=> res.json())
    .then(data => {
        data.forEach(item => {
            var type=item.type
            console.log(type)
            if(type.includes(detail)){
                product+=SearchProduct(item,"Mouse")
            }
        });
    })
        setTimeout(function(){
            document.getElementById("content-home").innerHTML='<div class = "product-search"> <h1>Chuột</h1>'+product+'</div>'
        },500)
    }

    function Search5(){
        var detail="Headphone"
        var product =""
        fetch(headphoneApi)
        .then(res=> res.json())
        .then(data => {
            data.forEach(item => {
                var type=item.type
                console.log(type)
                if(type.includes(detail)){
                    product+=SearchProduct(item,"Headphone")
                }
            });
        })
        setTimeout(function(){
            document.getElementById("content-home").innerHTML='<div class = "product-search"> <h1>Tai nghe</h1>'+product+'</div>'
        },500)
    }