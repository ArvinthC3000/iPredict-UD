let startFlag = 0;
let totalFlag = 0;
let amount = [];
let items = [];
let total = 0;





addItem = () => {
        
    let item = document.getElementById("item").value;
    let qnty = document.getElementById("qnty").value;
    items.push(item);

    createTableHeader();

    addNewItem(item, qnty);        

    addTotal();
        

        
}

document.getElementById("submit").addEventListener("click", addItem);



createTableHeader = () =>{
    if (startFlag == false){
        
        let tHead = document.createElement("thead");
        let tR = document.createElement("tr");
        tHead.appendChild(tR);

        for(i=0; i<5; i++){
            let tableHeader = ["S.No", "Items", "Quantity", "Unit Price", "Amount"];
            let tH = document.createElement("th");
            let content = document.createTextNode(tableHeader[i]);
            tH.appendChild(content);
            tR.appendChild(tH);
        }
        bill.appendChild(tR);
        startFlag += 1;
    }
}

addNewItem = (item, qnty) =>{        
    let tBody = document.createElement("tbody");
    let tR = document.createElement("tr");
    tBody.appendChild(tR);

    //To be deleted in future
    let unitPrice = Math.floor(Math.random()*100);
    let amnt = unitPrice*qnty;
    //To be deleted in future

    amount.push(amnt);
    total += amnt;

        for(i=0; i<5; i++){
            let data = [startFlag, item, qnty, unitPrice, amnt];
            let tD = document.createElement("td");
            tD.setAttribute("class", "tableValues");
            let content = 0;
            if(i===2){
                content = document.createElement("input");
                content.setAttribute("class", "tableQnty");
                content.setAttribute("type", "number");
                content.setAttribute("value", qnty);              
            }
            else{
                content = document.createTextNode(data[i]);
                if(i>2){
                    tD.setAttribute("class", "moneyValues");
                }
            }
            
            tD.appendChild(content);
            tR.appendChild(tD);
        }

    bill.appendChild(tR);
    startFlag += 1;
}

addTotal = () =>{

    let tBody = document.createElement("tbody");
    let tRTot = document.createElement("tr");
    tRTot.setAttribute("id", "totalRow");
    tBody.appendChild(tRTot);

    if(totalFlag == false){
        for(i=0; i<5; i++){
            let head = ["", "", "", "Total", total];
            let tH = document.createElement("th");
            tH.setAttribute("id", "totalContents");
            let content = document.createTextNode(head[i]);
            tH.appendChild(content);
            tRTot.appendChild(tH);
            totalFlag += 1;
            bill.appendChild(tBody);
        }
    }

    else{
        for(i=0; i<5; i++){
            let child = document.getElementById("totalContents");
            child.remove();
            let head = ["", "", "", "Total", total];
            let tH = document.createElement("th");
            tH.setAttribute("id", "totalContents")
            let content = document.createTextNode(head[i]);
            tH.appendChild(content);
            tRTot.appendChild(tH);
            bill.appendChild(tBody);
        }
    }
}