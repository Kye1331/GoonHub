
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
    localStorage.setItem('hasAccess','true')
    window.location.href='niglet.html';
} else{
    alert('Please enter the correct code you non-gooner');
    localStorage.setItem('hasAccess','false')
}
}

