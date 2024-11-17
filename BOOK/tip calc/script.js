let bill = document.getElementById("billAmount");
let percentage = document.getElementById("percentageTip");
let tip = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let errorvalue = document.getElementById("errorMessage");
let error = "Please Enter a Valid input";
let check = true;

function calculate() {
    if (check === true) {
        let billvalue = bill.value;
        let percentagevalue = percentage.value;
        if (billvalue === "") {
            errorvalue.textContent = error;
        } else if (percentagevalue === "") {
            errorvalue.textContent = error;
        } else {
            let billvalues = parseInt(billvalue);
            let percentagevalues = parseInt(percentagevalue);

            let tipvalue = (percentagevalues / 100) * billvalues;
            tip.value = tipvalue;
            total.value = billvalues + tipvalue;
            errorvalue.textContent = "";
        }

    } else {
        bill.value = "";
        tip.value = "";
        percentage.value = "";
        total.value = "";
        check = true;
    }
}