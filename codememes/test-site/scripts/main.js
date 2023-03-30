
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "pics/fs-sheya2.jpg") {
    myImage.setAttribute("src", "pics/ks-sheya.jpg");
  } else {
    myImage.setAttribute("src", "pics/fs-sheya2.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Who are you?");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Greetings, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Greetings, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

document.querySelector("h1").addEventListener("click", function () {
alert("I'm listening~");
});




