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
            tableHead.setAttribute("class", "tableHead");
            document.getElementById("bill").appendChild(tableHead);
        }
        else{
            void(0);
        }
    
}

document.getElementById("submit").addEventListener("submit", addItem);