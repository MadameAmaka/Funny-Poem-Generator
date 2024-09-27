function displayPoem(response){
         new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 20,
      });
}



function generatePoem(event){
    event.preventDefault();
let instructionsInput=document.querySelector("#given-instructions");
    let apiKey = "2f43379oac5f7ffe8tde5aff442f0cdb";
    let prompt = `Generate a very short funny poem about ${instructionsInput.value}`;
    let context = "You are a funny AI who loves to write short funny poems. Your task is to generate a 4-line short poem in basic html format and separate each line with a <br/>. Do not type the html out and please sign the poem with 'SheCodes AI' in <strong> and <small> element";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey} `

    let poemDisplay = document.querySelector("#poem");
 poemDisplay.innerHTML = "Generating your poem...";

axios.get(apiUrl).then(displayPoem);
}


     



let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);