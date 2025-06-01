
async function checkCode(attempt){
alert('test')
let result = await fetch('https://goonhub-passcode.vercel.app/?password=' + attempt);
let e = await result.json()

if (e['message'] == "Access Granted"){
    return true
} else{
    return false
}

}
document.getElementById("submitBtn").addEventListener("click", function () {
  const userInput = document.getElementById("codeInput").value;
  const errorMsg = document.getElementById("error");

 let code = userInput;

// Set the code variable to whatever the user inputted into the input box
if(checkCode(code)){
    console.log(checkCode(code));

    alert('welcome to goonhub')
    window.location.replace('https://nahug4.github.io/GoonHub/niglet.html');
}
});
