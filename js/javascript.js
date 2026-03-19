function checkPass() {
    
    const input = document.getElementById('user-pass').value;
    const secretKey = "111111";
    if (input === secretKey) {
        document.getElementById('secret-gallery').style.display="block";
        document.getElementById('login-box').style.display="none";
        // alert("Correct !!!");
    } else {
        document.getElementById('user-pass').value ="";
        alert("Password မှားနေပါတယ်။ ပြန်လည်ကြိုးစားပါ။");
        document.getElementById('user-pass').focus();
       
    }
}