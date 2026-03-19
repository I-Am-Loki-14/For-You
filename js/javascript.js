// function checkPass(event){
//    event.preventDefault();
//         const input = document.getElementById('user-pass').value;
//     const key = "231020";
//     if (input === key) {
//         document.getElementById('form-box').style.display="none";
//         document.getElementById('show-photo').style.display="block";
//     } else {
//         document.getElementById('user-pass').value ="";
//         alert("Access denied !")
//     }
// }
function checkPass() {
    
    const input = document.getElementById('user-pass').value;
    const secretKey = "231020";
    if (input === secretKey) {
        document.getElementById('secret-gallery').style.display="block";
        document.getElementById('login-box').style.display="none";
        // alert("Correct !!!");
    } else {
        document.getElementById('user-pass').value ="";
        alert("Wrong password !!! Reenter Password");
        document.getElementById('user-pass').focus();
       
    }
}