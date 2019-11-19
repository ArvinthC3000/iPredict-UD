$('#add').click(()=>{
    dataString={}
    let itemIDSmall = $('#itemID').val()
    let itemID = itemIDSmall.toUpperCase()
    dataString.itemName = $('#itemName').val()
    dataString.category = $('#category').val()
    dataString.qty = $('#qty').val()
    dataString.rate = $('#rate').val()
    dataString.itemID = itemID

    dataString.itemName === ''?$('#itemName').css('border','1px solid red'):null
    dataString.category === ''?$('#category').css('border','1px solid red'):null
    dataString.qty === ''?$('#qty').css('border','1px solid red'):null
    dataString.rate === ''?$('#rate').css('border','1px solid red'):null
    // dataString.itemID === ''?$('#itemID').css('border','1px solid red'):null

    if(dataString.itemName !=='' && dataString.category !== '' && dataString.qty !== '' &&
    dataString.rate !== '' ){
        console.log(dataString)
        $.ajax({
            type:"POST",
            data: JSON.stringify(dataString),
            contentType:"application/JSON",
            url: "https://ipredict-inventory-module.herokuapp.com/api/user/add", 
            success: (data) =>{
                console.log(data)
            }
        })
    }
})
