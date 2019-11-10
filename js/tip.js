function calculate_tip()
{
    var x = document.getElementById("bill_amount").value;
    var e = document.getElementById("service");
    var y = e.options[e.selectedIndex].value;
   
    if(x == "")
    {
        alert("Bill amount must be specified");
    }
    if(x <= 0)
    {
        alert("Bill amount must be positive");
    }
    var z =(y*x) /100;
    document.getElementById("ans").innerHTML = z;
}
