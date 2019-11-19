
$(document).ready(()=>{
    $('#filterButton').click(() =>{
        const filter ={}
        let itemIDSmall = $('#itemId').val()
        filter.itemID = itemIDSmall.toUpperCase()
        console.log(filter.itemID)

        // console.log(filter)
        $.ajax({
            type: "POST",
            data: JSON.stringify(filter),
            contentType:"application/JSON",
            url:"https://ipredict-inventory-module1.herokuapp.com/api/update",
            success: data => {
                const [datastring] = data;
                console.log(datastring)
                document.getElementById("itemDetails").innerText = "Name:"+datastring.itemName+"; Category:"+datastring.category;
                document.getElementById("recipient-name").innerText = "Quantity: "+datastring.qty;
            }
        })
    });

    
    $('#addContent').click(() =>{
        let addContent = $("#message-text").val()
        $.ajax({
            type: "POST",
            data: JSON.stringify(addContent),
            contentType:"application/JSON",
            url:"https://ipredict-inventory-module1.herokuapp.com/api/update/qty",
            success: data => {
                const [datastring] = data;
                console.log(datastring)
                document.getElementById("flash").innerText = "Updated successfully";
                document.getElementById("recipient-name").innerText = "Quantity: "+datastring.qty;
            }
        })
    });
})
