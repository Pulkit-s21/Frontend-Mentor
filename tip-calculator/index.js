const btn = document.querySelector(".calculate");
const finalBill = document.querySelector(".total_bill");
const totalTip = document.querySelector(".total_tip");
const totalshare = document.querySelector(".total_share");

btn.addEventListener("click", () => {

    let bill = document.querySelector(".bill").value;
    let tip = document.querySelector(".tip").value;
    let person = document.querySelector(".person").value;

    if (person == '' || person <= 0) {
        person = 1;
    } else {
        let person = document.querySelector(".person").value;
    }

    if (bill == '' || tip == '') {
        alert("Enter valid values");
    } else {
        let tipAmount = bill * tip / 100;
        // parseFloat() is imp cz if we dont do this it will just concatinate the strings and form 50 + 5 = 505 and not 55
        let billAmount = parseFloat(parseFloat(bill) + parseFloat(tipAmount)).toFixed(2);
        let share = parseFloat(billAmount / person).toFixed(2);
        
        totalTip.innerHTML = `Tip amount: $${tipAmount}`;
        finalBill.innerHTML = `Total bill: $${billAmount}`;
        totalshare.innerHTML = `Share/Person: $${share}`;
        setBackToDefault();
    }
});

function setBackToDefault() {
    let bill = document.querySelector(".bill").value = '';
    let tip = document.querySelector(".tip").value = '';
    let person = document.querySelector(".person").value = '';
}