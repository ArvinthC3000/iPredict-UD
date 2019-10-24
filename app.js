let startFlag = 0;
let totalFlag = 0;
let particulars = [];
let amount = [];
let items = [];
let total = 0;

addItem = () => {
    let item = document.getElementById("item").value;
    let qnty = document.getElementById("qnty").value;
    items.push(item);

        if (startFlag == false){
            let tHead = document.createElement("thead");
            let tR = document.createElement("tr");
            tHead.appendChild(tR);

            for(i=0; i<5; i++){
                let head = ["S.No", "Items", "Quantity", "Unit Price", "Amount"];
                let tH = document.createElement("th");
                let content = document.createTextNode(head[i]);
                tH.appendChild(content);
                tR.appendChild(tH);
            }
            let bill = document.getElementById("bill");
            bill.appendChild(tR);
            startFlag += 1;
        }

        else{
            void(0);
        }

    let tBody = document.createElement("tbody");
    let tR = document.createElement("tr");
    tBody.appendChild(tR);
    let unitPrice = Math.floor(Math.random()*100);
    let amnt = unitPrice*qnty;
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

        let bill = document.getElementById("bill");
        bill.appendChild(tR);
        startFlag += 1;

        let tRTot = document.createElement("tr");
        tRTot.setAttribute("id", "totalRow");
        tBody.appendChild(tRTot);
        console.log(totalFlag);

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

document.getElementById("submit").addEventListener("click", addItem);