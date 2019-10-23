let startFlag = 0;
let particulars = [];
let amount = [];

addItem = () => {
    let item = document.getElementById("item");
    let qnty = document.getElementById("qnty");
    let bill = document.createElement("table");
    bill.setAttribute("id", "bill")
    document.body.appendChild(bill);
        if (startFlag == false){
            let tableHead = document.createElement("tr");
            tableHead.setAttribute("id", "tableHead");
            let td = document.createElement("td");
            td.setAttribute("id", "xx")

            let head = ["S.No", "Items", "Quantity", "Unit Price", "Amount"];

            for(i=0; i<4; i++){
                let content = document.createTextNode(head[i]);
                console.log(head[i]);
                td.appendChild(content);
            }
            tableHead.appendChild(td);
            bill.appendChild(tableHead);
            startFlag += 1;
        }
        else{
            void(0);
        }
}

document.getElementById("submit").addEventListener("click", addItem);