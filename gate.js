
async function checkCode(attempt){
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
run(code);
// Set the code variable to whatever the user inputted into the input box

});
async function run(code){
if(await checkCode(code)){
    console.log(await checkCode(code));

    alert('welcome to goonrrhub')
    window.location.href='https://nahug4.github.io/GoonHub/niglet.html';
}
}
run();
