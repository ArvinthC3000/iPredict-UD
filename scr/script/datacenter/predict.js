
$(document).ready( () => {
    console.log('here')
    let data
    


    $.ajax({
        type:"GET",
        // data: JSON.stringify(dataString),
        contentType:"application/JSON",
        // ContentSecurityPolicy: font-src 'self',
        url: "http://localhost:5099/api/predict", 
        success: (data) =>{
            console.log(data)
            for(i=0;i<Object.keys(data).length;i++){
                var ul = document.getElementById("immediateRequirementList");
                var li = document.createElement("li");
                console.log(data[i].itemName+' '+data[i].category)
                li.appendChild(document.createTextNode(data[i].itemName+' '+data[i].category));
                ul.appendChild(li);
            }
        }
  })
  

})

function function1() {
    li.appendChild(document.createTextNode("Four"));
    ul.appendChild(li);
  }