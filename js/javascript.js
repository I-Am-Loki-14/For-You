<<<<<<< HEAD

=======
// function checkPass(event){
//    event.preventDefault();
//         const input = document.getElementById('user-pass').value;
//     const key = "111111";
//     if (input === key) {
//         document.getElementById('form-box').style.display="none";
//         document.getElementById('show-photo').style.display="block";
//     } else {
//         document.getElementById('user-pass').value ="";
//         alert("Access denied !")
//     }
// }
>>>>>>> 15ce3f76df8f3aab7ea8b4239a96caba8f9244b7
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