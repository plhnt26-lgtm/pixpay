function saveProfile() {
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    alert("Profile Saved Successfully!");

    console.log({
        name,
        email,
        phone
    });
}
function submitDeposit() {
    const amount = document.querySelector('input[type="number"]').value;
    const method = document.querySelector('input[type="text"]').value;

    if (!amount || !method) {
        alert("Please fill in all fields.");
        return;
    }

    const deposits = JSON.parse(localStorage.getItem("deposits") || "[]");

    deposits.push({
        amount: amount,
        method: method,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("deposits", JSON.stringify(deposits));

    alert("Deposit request submitted successfully!");

    document.querySelector('input[type="number"]').value = "";
    document.querySelector('input[type="text"]').value = "";
}
function loadHistory() {

    const historyList = document.getElementById("historyList");

    if (!historyList) return;

    const deposits = JSON.parse(localStorage.getItem("deposits") || "[]");

    if (deposits.length === 0) {
        historyList.innerHTML = "<p>No transactions found.</p>";
        return;
    }

    historyList.innerHTML = "";

    deposits.forEach((item) => {
        historyList.innerHTML += `
            <div class="card" style="margin-top:15px;">
                <p><strong>Amount:</strong> $${item.amount}</p>
                <p><strong>Method:</strong> ${item.method}</p>
                <p><strong>Date:</strong> ${item.date}</p>
            </div>
        `;
    });

}

loadHistory();
