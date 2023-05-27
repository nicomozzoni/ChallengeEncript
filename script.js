var buttonEncrypt = document.querySelector(".btn-encrypt");
var buttonDecrypt = document.querySelector(".btn-decrypt");
var containerDraw = document.querySelector(".container-draw")
var containerParragraph = document.querySelector(".container-parragraph")
var textResult = document.querySelector(".text-result")


buttonEncrypt.onclick = encrypt;
buttonDecrypt.onclick = decrypt;

function encrypt(){
    hidefigure();
    var textbox = recovertext();
    var encryptedText = encryptText(textbox);
    textResult.textContent = encryptedText;
}

function decrypt(){
    hidefigure();
    var textbox = recovertext();
    textResult.textContent = decryptText(textbox);
}

function recovertext(){
    var textbox = document.querySelector(".text-box");
    return textbox.value;
}
function hidefigure(){
    containerDraw.classList.add("hide");
    containerParragraph.classList.add("hide");

}

function encryptText(message){
    console.log(message);
    var text = message;
    var finalText = "";

    for (var i = 0; i < text.length; i++){
        if (text[i] =="a"){
            finalText = finalText + "ai"
        }
        else if (text[i] == "e"){
            finalText = finalText + "enter"
        }
        else if (text[i] == "i"){
            finalText = finalText + "imes"
        }
        else if (text[i] == "o"){
            finalText = finalText + "ober"
        }
        else if (text[i] == "u"){
            finalText = finalText + "ufat"
        }
        else{
            finalText = finalText + text[i]
        }
    }

    return finalText;
}

function decryptText(message){
    var text = message;
    var finalText = "";

    for (var i = 0; i < text.length; i++){
        if (text[i] =="a"){
            finalText = finalText + "a"
            i = i+1;
        }
        else if (text[i] == "e"){
            finalText = finalText + "e"
            i = i+4;
        }
        else if (text[i] == "i"){
            finalText = finalText + "i"
            i = i+3;
        }
        else if (text[i] == "o"){
            finalText = finalText + "o"
            i = i+3;
        }
        else if (text[i] == "u"){
            finalText = finalText + "u"
            i = i+3;
        }
        else{
            finalText = finalText + text[i]
        }
    }

    return finalText;
}

const btnCopy = document.querySelector(".btn-copy");
    btnCopy.addEventListener("click", copy = () => {
        var content = document.querySelector(".text-result").textContent;
        navigator.clipboard.writeText(content);
        })
