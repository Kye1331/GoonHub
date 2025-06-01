
async function checkCode(attempt){

let result = await fetch('https://goonhub-passcode.vercel.app/?password=' + attempt);
let e = await result.text()
if (e == "Access Granted"){
    return true
} else{
    return false
}

}
document.getElementById("submitBtn").addEventListener("click", function () {
  const userInput = document.getElementById("codeInput").value;
  const errorMsg = document.getElementById("error");

 code = userInput;

// Set the code variable to whatever the user inputted into the input box
if(checkCode(code) ){
    window.location.replace('https://nahug4.github.io/GoonHub/niglet.html');
}
});
