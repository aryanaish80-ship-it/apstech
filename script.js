// Convert text to sign language
function convertText() {
    let loading = document.getElementById("loading");
    let text = document.getElementById("textInput").value.toUpperCase();
    let outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "";
    loading.style.display = "block";

    let i = 0;

    function showNext() {
        if (i >= text.length) {
            loading.style.display = "none";
            return;
        }

        let char = text[i];

        if (char >= 'A' && char <= 'Z') {
            let img = document.createElement("img");

            // You can replace this with real images later
            img.src = "https://dummyimage.com/60x60/000/fff&text=" + char;

            outputDiv.appendChild(img);
        }

        i++;
        setTimeout(showNext, 400); // animation delay
    }

    showNext();
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
