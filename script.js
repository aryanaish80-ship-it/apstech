// Convert text to sign images
function convertText() {
    let text = document.getElementById("textInput").value.toUpperCase();
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char >= 'A' && char <= 'Z') {
            let img = document.createElement("img");
            img.src = "https://dummyimage.com/60x60/000/fff&text=" + char;
            outputDiv.appendChild(img);
        }
    }
}

// Voice input
function startVoice() {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        let speechText = event.results[0][0].transcript;
        document.getElementById("textInput").value = speechText;
        convertText();
    };

    recognition.start();
}

// Clear output
function clearOutput() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("textInput").value = "";
}
