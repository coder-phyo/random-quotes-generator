let btn = document.querySelector(".btn");
let quote_txt = document.querySelector("#quote-txt");
let author = document.querySelector(".author");
btn.addEventListener("click", () => {
  btn.innerText = "Loading...";
  btn.classList.add("load");
  fetch("https://api.quotable.io/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      btn.innerText = "New Quote";
      btn.classList.remove("load");
      quote_txt.innerText = data.content;
      author.innerText = "By " + data.author;
    })
    .catch((reject) => {
      console.log(reject);
    });
});

let speech = document.querySelector("#speech");
speech.addEventListener("click", (_) => {
  let txtToSpeech = new SpeechSynthesisUtterance(
    `${quote_txt.innerText} By ${author.innerText}`
  );
  speechSynthesis.speak(txtToSpeech);
});

let copy = document.getElementById("copy");
copy.addEventListener("click", (_) => {
  navigator.clipboard.writeText(quote_txt.innerText);
});

let twitter_share = document.getElementById("twitter_share");
twitter_share.addEventListener("click", (_) => {
  let url = `https://twitter.com/intent/tweet?url=${quote_txt.innerText}`;
  window.open(url, "_blank");
});
