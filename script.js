// Character Limitations to Create Password
// Upper Case Limitations
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var abcUpperArr = abcUpper.split("");
  //  Lower Case Limitations
   var abcLower = "abcdefghijklmnopqrstuvwxyz";
   var abcLowerArr = abcLower.split("");
  //  NUmber Limitations
   var num = "0123456789";
   var numArr = num.split("");
  //  Symbol and/or Character Limitations
   var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
   var symArr = sym.split("");

//  My Welcome Message When Page Opens
window.onload = alert("Greetings! Click the button 'Generate password' to generate a password now!");

// My Main Function = My Password Generator
function generatePass(){
    var allChars = [];
    var resultPass = "";

// My Dynamic Variables
    var Totlength = prompt("How many characters do you wish your password to possess?");
    if(Totlength <8 || Totlength > 128){
        alert("IT IS HIGHLY RECOMMENDED TO HAVE A PASSWORD BETWEEN 8 AND 128 CHARACTERS LONG! PLEASE TRY AGAIN!");
    }

// Character Conditions Confirmed
    else{
        if(confirm(" Do you wish for your password to possess upper case letters?")){
            Array.prototype.push.apply(allChars, abcUpperArr);
        }
        if(confirm(" Do you wish for your password to possess lower case letters?")){
            Array.prototype.push.apply(allChars, abcLowerArr);
        }
        if(confirm(" Do you wish for your password to possess numbers?")){
            Array.prototype.push.apply(allChars, numArr);
        }
        if(confirm(" Do you wish for your password to possess symbols?")){
            Array.prototype.push.apply(allChars, symArr);
        }
        if(allChars.length===0){
            alert("YOU MUST SELECT AT LEAST ONE TYPE OF SPECIAL CHARACTER TO GENERATE A PASSWORD! PLEASE TRY AGAIN!");
        }

// oop information to generate your password
        else{
            for(var i=0; i<Totlength; i++){
                var random = Math.floor(Math.random()*allChars.length);
                resultPass += allChars[random];
            }
        }
      }

//  Expected Result
        document.getElementById("password").innerHTML = resultPass;
   }

// Function to Copy Password to Your Clipboard
function copyPass(){
    document.querySelector("textarea").select();
    document.execCommand("Copy");
    alert(" Congrats! The password generated has been copied to your clipboard! Godspeed!");
}