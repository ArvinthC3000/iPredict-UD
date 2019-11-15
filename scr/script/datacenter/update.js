
$(document).ready(()=>{
    console.log('here again')
    $('#filterButton').click(() =>{
        const filter ={}
        let itemIDSmall = $('#itemId').val()
        filter.itemID = itemIDSmall.toUpperCase()
        // filter.itemID = "MIL500S";
        // filter.itemName = $('#itemName').val();
        // filter.category = $('#category').val();

        console.log(filter)
        $.ajax({
            type: "POST",
            data: JSON.stringify(filter),
            contentType:"application/JSON",
            url:"http://localhost:5099/api/update"
        })
    });
})