$('#add').click(()=>{
    dataString={}
    dataString.itemName = $('#itemName').val()
    dataString.category = $('#category').val()
    dataString.qty = $('#qty').val()
    dataString.rate = $('#rate').val()
    dataString.itemID = $('#itemID').val()

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
            url: "http://localhost:3001/api/shop/booking"
        })
    }
})