function generatePoem(event){
    event.preventDefault();
          new Typewriter("#poem", {
        strings: "Roses are red, and so are my eyes",
        autoStart: true,
        cursor: null,
        delay: 10,
      });
}



let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);