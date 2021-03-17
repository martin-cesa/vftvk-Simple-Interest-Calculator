function compute() {
    principal = document.getElementById("principal").value;
    if (principal <= 0) { // Validation for "Principal" input box
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100;
    yearEnd = new Date().getFullYear() + parseInt(years); // Code to convert "No of Years" into the actual year in the future
    document.getElementById("result").innerHTML = // Filling "result" span
    "If you deposit <mark>" + principal + "</mark>,<br>" +
    "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br>" +
    "in the year <mark>" + yearEnd + "</mark>";
}
function rateDisplay() { // Function to display he slider value dynamically
    rate = document.getElementById("rate").value;
    document.getElementById("rateSpan").innerHTML = rate + "%";
}