const body = document.querySelector("body");

const div = document.createElement("div");
div.id = "container";

//HEADING
const heading = document.createElement("h1");
heading.textContent = "TEXT EDITOR";


//HR TAG
const line = document.createElement("hr");


//SECTION BUTTON
const sectionBtn = document.createElement("section");
sectionBtn.id = "sectionBtn";


//BOLD BTN
const btnBold = document.createElement("button");
btnBold.textContent = "Bold";
btnBold.onclick = function bold() {
  textarea.style.fontWeight = "bold";
  return;
};
btnBold.addEventListener("dblclick", () => {
  textarea.style.fontWeight = "";
});


//ITALIC BTN
const btnItalic = document.createElement("button");
btnItalic.textContent = "Italic";
btnItalic.onclick = function italic() {
  textarea.style.fontStyle = "italic";
};
btnItalic.addEventListener("dblclick", () => {
  textarea.style.fontStyle = "";
});


//LEFT ALIGN BTN
const leftAlign = document.createElement("button");
leftAlign.innerHTML = "<img src = leftalign.png>";
leftAlign.onclick = function alignTextLeft() {
  textarea.style.textAlign = "left";
};
leftAlign.addEventListener("dblclick", () => {
  textarea.style.textAlign = "";
});


//CENTER ALIGN BTN
const centerAlign = document.createElement("button");
centerAlign.innerHTML = "<img src = aligncenter.png>";
centerAlign.onclick = function alignTextCenter() {
  textarea.style.textAlign = "center";
};
centerAlign.addEventListener("dblclick", () => {
  textarea.style.textAlign = "";
});


//RIGTH ALIGN BTN
const rigthAlign = document.createElement("button");
rigthAlign.innerHTML = "<img src = alignright.png>";
rigthAlign.onclick = function alignTextRight() {
  textarea.style.textAlign = "right";
};
rigthAlign.addEventListener("dblclick", () => {
  textarea.style.textAlign = "";
});


//UPPERCASE BTN
const btnUpperCase = document.createElement("button");
btnUpperCase.textContent = "Upper Case";
btnUpperCase.onclick = function upperCase() {
  textarea.style.textTransform = "uppercase";
};
btnUpperCase.addEventListener("dblclick", () => {
  textarea.style.textTransform = "";
});


//LOWERCASE BTN
const btnLowerCase = document.createElement("button");
btnLowerCase.textContent = "Lower Case";
btnLowerCase.onclick = function lowerCase() {
  textarea.style.textTransform = "lowercase";
};
btnLowerCase.addEventListener("dblclick", () => {
  textarea.style.textTransform = "";
});


//CAPITALIZE BTN
const btnCapitalize = document.createElement("button");
btnCapitalize.textContent = "Capitalize";
btnCapitalize.onclick = function capitalize() {
  textarea.style.textTransform = "capitalize";
};
btnCapitalize.addEventListener("dblclick", () => {
  textarea.style.textTransform = "";
});


//CLEARTEXT BTN
const btnClearText = document.createElement("button");
btnClearText.textContent = "Clear Text";
btnClearText.onclick = clearText;
function clearText() {
  textarea.value = "";
  textarea.style.fontStyle = "";
  textarea.style.textAlign = "";
  textarea.style.textTransform = "";
}


//APPENDING SECTION BTN ELEMENTS
sectionBtn.append(
  heading,
  line,
  btnBold,
  btnItalic,
  leftAlign,
  centerAlign,
  rigthAlign,
  btnUpperCase,
  btnLowerCase,
  btnCapitalize,
  btnClearText
);


//SECTION TEXTAREA
const sectionTextArea = document.createElement("section");
sectionTextArea.id = "sectionTextArea";
const textarea = document.createElement("textarea");
sectionTextArea.append(textarea);


//APPENDING DIV AND BODY ELEMENTS
div.append(sectionBtn, sectionTextArea);
document.body.appendChild(div);
