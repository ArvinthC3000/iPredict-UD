let startFlag = 0;
let particulars = [];
let amount = [];

addItem = () => {
    let item = document.getElementById("item").value;
    let qnty = document.getElementById("qnty").value;
    let bill = document.createElement("table");
    bill.setAttribute("id", "bill");
    document.body.appendChild(bill);

        if (startFlag == false){
            let tableRow = document.createElement("tr");
            tableRow.setAttribute("id", "tableRow");
            let th = document.createElement("th");
            th.setAttribute("id", "yy")
            let td = document.createElement("td");
            td.setAttribute("id", "xx")

            let head = ["S.No", "Items", "Quantity", "Unit Price", "Amount"];

            for(i=0; i<4; i++){
                let content = document.createTextNode(head[i]);
                console.log(head[i]);
                th.appendChild(content);
            }
            tableRow.appendChild(th);
            bill.appendChild(tableRow);
            startFlag += 1;
        }
        else{
            void(0);
        }
    
        let tableRow = document.createElement("tr");
        tableRow.setAttribute("id", "tableRow");
        let td = document.createElement("td");
        td.setAttribute("id", "xx")

        let head = [startFlag, item, qnty, 100, 200];

        for(i=0; i<4; i++){
            let content = document.createTextNode(head[i]);
            td.appendChild(content);
        }
        tableRow.appendChild(td);
        bill.appendChild(tableRow);
        startFlag += 1;
}

document.getElementById("submit").addEventListener("click", addItem);