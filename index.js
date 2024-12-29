// //Exercise 1 
// leap = prompt("Enter year:")
// if (leap % 4 == 0){
//     alert("it is leap year")
// }
// else{
//     alert("it is not")
// }
// // //Exercise 2 way1 without for loop
// // // var myColor = ["Red","Green","White","Black"]
// // // var string = myColor.join(",")
 
// // alert(string)
// // //Exercise 2 way2 with for loop
// var myColor = ["Red","Green","White","Black"];
// var string = "";
// for (let i = 0 ; i < myColor.length; i++){
//     if(i === myColor.length -1){
//         string += myColor[i]
//     }
//     else{
//     string += myColor[i] + ","
//     }
// }
// alert(`"${string}"`)
// // // Exercise 3
// function check(){
// const d = new Date()
// let hour = d.getHours()
// alert(hour)
// if (hour >= 5 && hour <= 12){
//     alert("Good morning!")
// }
// else if (hour >= 12 && hour <= 17) {
//     alert("Good afternoon")
// } 
// else if(hour >=17 && hour <=22){
//     alert("Good evening")
// }
// else{
//     alert("Good night! ;)")
// }
// }
// check()

function encryptText() {
    const plainText = document.getElementById("plainText").value;
    const shift = parseInt(document.getElementById("shift").value);
    if (!plainText || isNaN(shift)) {
        document.getElementById("resultText").textContent = "...";
        return;
    }
    let encryptedText = '';
    for (let i = 0; i < plainText.length; i++) {
        const char = plainText[i];
        if (char === ' ') {
            encryptedText += ' ';
        } else {
            const ascii = char.charCodeAt(0);
            encryptedText += String.fromCharCode(ascii + shift);
        }
    }
    document.getElementById("resultText").textContent = encryptedText;
}

function decryptText() {
    const cipherText = document.getElementById("cipherText").value;
    const shift1 = parseInt(document.getElementById("shift1").value);
    if (!cipherText || isNaN(shift1)) {
        document.getElementById("resultText1").textContent = "...";
        return;
    }
    let decryptedText = '';
    for (let i = 0; i < cipherText.length; i++) {
        const char = cipherText[i];
        if (char === ' '){
            decryptedText += ' ';
        }else{
          const ascii = char.charCodeAt(0);
          decryptedText += String.fromCharCode(ascii - shift1);
        }
    }
    document.getElementById("resultText1").textContent = decryptedText;
}
