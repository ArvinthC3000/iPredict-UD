
$(document).ready( () => {
    console.log('here')
    let data
    


    $.ajax({
        type:"GET",
        contentType:"application/JSON",
        url: "http://localhost:5099/api/predict", 
        success: (data) =>{
            console.log(data)
            for(i=0;i<Object.keys(data).length;i++){
                var ul = document.getElementById("immediateRequirementList");
                var li = document.createElement("li");
                console.log(data[i].itemName , data[i].qty)
                let averageRequirement = 
                li.innerHTML = `${data[i].itemName} ${data[i].itemID}  (${data[i].qty}) <span id="req"> ${data[i].previousData[0]}</span>`;
                ul.appendChild(li);
            }
        }
  })
  

})