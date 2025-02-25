function revealConfession() {
  const message = "Hi Kim, miss you";
  const confessionMessageElement = document.getElementById("confessionMessage");
  const valentineGifElement = document.getElementById("valentineGif");
  const buttonElement = document.querySelector(".confession-button");
  const originalTextElements = [document.querySelector("h1"), document.querySelector("h2")];

  // Replace the GIF instantly
  valentineGifElement.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2lzM2piY2Y0cDU2OWg1dGhlbmRmZXVhMzFqa2kweG14aHV4Y21ldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aAf0Ul7WNZRkvmUi8W/giphy.gif"; // New GIF URL

  // Show the confession message
  confessionMessageElement.innerText = message;
  confessionMessageElement.style.opacity = 1;

  // Hide original text
  originalTextElements.forEach(element => {
    element.style.display = "none";
  });

  // Hide the button
  buttonElement.style.display = "none";

  // Font style for the confession message
  confessionMessageElement.style.color = "white";  
  confessionMessageElement.style.fontFamily = "cursive"; 
  confessionMessageElement.style.position = "fixed";
  confessionMessageElement.style.top = "50%";
  confessionMessageElement.style.left = "50%";
  confessionMessageElement.style.transform = "translate(-50%, -50%)"; 
  confessionMessageElement.style.fontSize = "29px";
  confessionMessageElement.style.backgroundColor = "#f25857";
  confessionMessageElement.style.padding = "10px"; 
  confessionMessageElement.style.borderRadius = "8px"; 
}
