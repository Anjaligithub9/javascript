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

//ITALIC BTN
const btnItalic = document.createElement("button");
btnItalic.textContent = "Italic";

//LEFT ALIGN BTN
const leftAlign = document.createElement("button");
leftAlign.innerHTML = "<img src = leftalign.png>";

//CENTER ALIGN BTN
const centerAlign = document.createElement("button");
centerAlign.innerHTML = "<img src = aligncenter.png>";

//RIGTH ALIGN BTN
const rigthAlign = document.createElement("button");
rigthAlign.innerHTML = "<img src = alignright.png>";

//UPPERCASE BTN
const btnUpperCase = document.createElement("button");
btnUpperCase.textContent = "Upper Case";

//LOWERCASE BTN
const btnLowerCase = document.createElement("button");
btnLowerCase.textContent = "Lower Case";

//CAPITALIZE BTN
const btnCapitalize = document.createElement("button");
btnCapitalize.textContent = "Capitalize";

//CLEARTEXT BTN
const btnClearText = document.createElement("button");
btnClearText.textContent = "Clear Text";

//SECTION TEXTAREA
const sectionTextArea = document.createElement("section");
sectionTextArea.id = "sectionTextArea";
const textarea = document.createElement("textarea");
sectionTextArea.append(textarea);


//FUNCTIONS

//BOLD
function bold() {
  if (textarea.style.fontWeight === "bold") {
    textarea.style.fontWeight = "";
  } else {
    textarea.style.fontWeight = "bold";
  }
  console.log();
}

//ITALIC 
function italic() {
  if(textarea.style.fontStyle === "italic"){
    textarea.style.fontStyle = "";
  }
  else{
    textarea.style.fontStyle = "italic"
  }
}

//LEFT ALIGN
function alignTextLeft() {
  textarea.style.textAlign = "left";
}

//CENTER ALIGN 
function alignTextCenter() {
  textarea.style.textAlign = "center";
}

//RIGTH ALIGN
function alignTextRight() {
  textarea.style.textAlign = "right";
}

//UPPERCASE
function upperCase() {
  if(textarea.style.textTransform === "uppercase"){
    textarea.style.textTransform = "";
  }
  else{
    textarea.style.textTransform = "uppercase";
  }
}

//LOWERCASE
function lowerCase() {
  if( textarea.style.textTransform === "lowercase"){
    textarea.style.textTransform = "";
  }
  else{
    textarea.style.textTransform = "lowercase";
  }
}

//CAPITALIZE
function capitalize() {
  if(textarea.style.textTransform === "capitalize"){
    textarea.style.textTransform = "";
  }
  else{
    textarea.style.textTransform = "capitalize";
  }
}

//CLEARTEXT
function clearText() {
  textarea.value = "";
  textarea.style.fontStyle = "";
  textarea.style.textAlign = "";
  textarea.style.textTransform = "";
}

//EVENT BINDING
btnBold.addEventListener("click", bold);
btnItalic.addEventListener("click", italic);
leftAlign.addEventListener("click", alignTextLeft);
centerAlign.addEventListener("click", alignTextCenter);
rigthAlign.addEventListener("click", alignTextRight);
btnUpperCase.addEventListener("click", upperCase);
btnLowerCase.addEventListener("click", lowerCase);
btnCapitalize.addEventListener("click", capitalize);
btnClearText.addEventListener("click", clearText);


//APPENDING
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

div.append(sectionBtn, sectionTextArea);
document.body.appendChild(div);
