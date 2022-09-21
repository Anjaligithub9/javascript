let body = document.getElementsByName("body");

// HEADER
const header = document.createElement(`header`);
header.setAttribute("id", `navBar`);

const dropDown = document.createElement(`select`);
value1 = document.createElement("option");
value2 = document.createElement("option");
value3 = document.createElement("option");
value4 = document.createElement("option");
value5 = document.createElement("option");

value1.innerHTML = "All Products";
value2.value = "Apple";
value2.innerHTML = "Apple";
value3.value = "Vivo";
value3.innerHTML = "Vivo";
value4.value = "Samsung";
value4.innerHTML = "Samsung";
value5.value = "Motto";
value5.innerHTML = `Motto`;

dropDown.classList.add("select");
dropDown.append(value1, value2, value3, value4, value5);

const search = document.createElement(`input`);
search.setAttribute(`type`, `text`);
search.placeholder = "Search Item, Zip code...";

const sellingNowButton = document.createElement(`button`);
sellingNowButton.innerHTML = `Start Selling Now`;

header.append(dropDown, search, sellingNowButton);
document.body.appendChild(header);
header.classList.add(`header`);

//IMAGES
let image = document.createElement("section");
image.classList.add("image");

const grid = document.createElement("span");
grid.classList.add("imageGrid");

const img1 = document.createElement("img");
img1.src = "Rectangle-1.jpg";

const img2 = document.createElement("img");
img2.src = "Rectangle-2.jpg";

const img3 = document.createElement("img");
img3.src = "Rectangle.jpg";

const span = document.createElement("span");
const largeImg = document.createElement("img");
largeImg.classList.add("large");

grid.append(img1, img2, img3);

largeImg.src = "Rectangle-1.jpg";
largeImg.alt = "image";
span.append(largeImg);

image.append(grid, span);
document.body.append(image);

// HEADING AND LOCATION
let details = document.createElement("div");
details.classList.add("details");

const div = document.createElement(`div`);
div.classList.add(`div`);

const productDetails = document.createElement(`div`);
productDetails.classList.add(`productDetails`);

const heading = document.createElement(`h2`);
heading.innerHTML = `Apple Iphone 11 Pro Max `;

let locationSvg = document.createElement(`img`);
locationSvg.src = `location-sign-svgrepo-com.svg`;
locationSvg.classList.add("locationSvg");
const locationName = document.createElement(`small`);
locationName.setAttribute(`id`, `lightShade`);

const distanceSvg = document.createElement(`img`);
distanceSvg.src = `icons8-select-16.png`;

const distance = document.createElement(`small`);
distance.innerHTML = `5 miles away`;
distance.setAttribute(`id`, `lightShade`);

const viewsSvg = document.createElement(`img`);
viewsSvg.src = `icons8-eye-16.png`;

const views = document.createElement(`small`);
views.innerHTML = `14,323 Viewed`;
locationName.append(locationSvg, "San Jose CA");

productDetails.append(
  heading,
  locationName,
  distanceSvg,
  distance,
  viewsSvg,
  views
);
div.append(productDetails);
details.append(div);
document.body.append(details);

//DESCRIPTION OF PHONE
const descriptionDetail = document.createElement(`span`);

descriptionDetail.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. <br>`;
descriptionDetail.setAttribute(`id`, `description`);

const price = document.createElement(`span`);
price.setAttribute(`id`, `rate`);
price.innerHTML = `$1999.99`;

//COLOR BUTTONS
const color = document.createElement(`span`);
color.innerHTML = `Color:`;
color.setAttribute("id", "lightShade");

let phoneOfColor = document.createElement("p");
phoneOfColor.setAttribute("id", "phoneOfColor");

const colorButton = document.createElement("span");

const grey = document.createElement("button");
grey.setAttribute("id", "phoneOfColor");
grey.classList.add("grey");
grey.addEventListener("click", () => {
  phoneOfColor.innerHTML = "Grey";
});

const red = document.createElement("button");
red.setAttribute("id", "phoneOfColor");
red.classList.add("red");
red.addEventListener("click", () => {
  phoneOfColor.innerHTML = "Red";
});

const green = document.createElement("button");
green.setAttribute("id", "phoneOfColor");
green.classList.add("green");
green.addEventListener("click", () => {
  phoneOfColor.innerHTML = "Green";
});

const skyWhite = document.createElement("button");
skyWhite.setAttribute("id", "phoneOfColor");
skyWhite.classList.add("skywhite");
skyWhite.addEventListener("click", () => {
  phoneOfColor.innerHTML = "SkyWhite";
});

colorButton.append(grey, red, green, skyWhite);
color.append(phoneOfColor);
productDetails.append(descriptionDetail, price, color, colorButton);

//DELIVERY BUTTONS
let deliveryBtn = document.createElement(`div`);

const delivery = document.createElement(`small`);
delivery.innerHTML = `Delivery :`;
delivery.setAttribute(`id`, `lightShade`);
delivery.classList.add("deliveryTypes");

const storePickup = document.createElement(`button`);
storePickup.innerHTML = `Store Pickup`;
storePickup.setAttribute(`id`, `deliveryTypeButton`);

const deliverys = document.createElement(`button`);
deliverys.innerHTML = `Delivery`;
deliverys.setAttribute(`id`, `deliveryTypeButton`);

div.append(delivery, storePickup, deliverys);

//QUANTITY COUNTER
const quantity = document.createElement(`span`);

quantitys = document.createElement("small");
quantitys.innerHTML = "Quantity:";
quantitys.setAttribute("id", "lightShade");

const decrease = document.createElement("button");
decrease.classList.add("decrease");
decrease.innerHTML = "-";
decrease.addEventListener("click", () => {
  let counter = Number(number.innerHTML);
  if (counter > 1) {
    counter = counter - 1;
    number.innerHTML = counter;
  }
});

const increase = document.createElement("button");
increase.classList.add("increase");
increase.innerHTML = "+";
increase.addEventListener("click", () => {
  let counter = Number(number.innerHTML);
  counter = counter + 1;
  number.innerHTML = counter;
});

const number = document.createElement("p");
number.innerText = 1;
number.setAttribute("id", "quantitySize");

quantity.append(quantitys, decrease, number, increase);

//DELIVERY CHARGES AND SHIPPING TIME
const shippingFee = document.createElement(`span`);

const shipping = document.createElement(`small`);
shipping.innerHTML = `(2-3 business days, $40 shipping) to`;

const place = document.createElement(`span`);
place.innerHTML = `<u> NEWYORK, NY</u>`;

shippingFee.append(shipping, place);
div.append(shippingFee);

//BUY NOW BUTTON
const buyBtn = document.createElement(`div`);

const buy = document.createElement(`button`);
buy.innerHTML = `Buy Now`;

buy.addEventListener("click", () => {
  if (buyAttri.innerHTML == "Buy Now") {
    buy.addEventListener("click", (event) => {
      event.target.innerHTML = "Buy Now";
      event.target.style.backgroundColor = "green";
    });
  }
});

//MAKE AN OFFER BUTTON
const offer = document.createElement(`button`);
offer.innerHTML = `Make an Offer`;

buy.setAttribute("id", "buyAttri");
offer.setAttribute("id", "offerAttri");
buyBtn.append(buy, offer);
div.append(buyBtn);

offer.addEventListener("click", () => {
  dialogBox.classList.toggle("dialogBox");
});

//DIALOG BOX CONTENT
const box = document.createElement("span");
box.classList.add("block");
const dialogBox = document.createElement("div");
dialogBox.classList.add("dialogBox");
dialogBox.setAttribute("id", `dialogBox`);

const makeOffer = document.createElement("h4");
makeOffer.innerHTML = "Make offer";

const offfer = document.createElement("input");
offfer.setAttribute("id", "offfer");

const deliveryOfferText = document.createElement(`small`);
deliveryOfferText.innerHTML = `Delivery`;

const storePickupOffer = document.createElement(`button`);
storePickupOffer.innerHTML = `Store Pickup`;

const deliveryOffer = document.createElement(`button`);
deliveryOffer.innerHTML = `Delivery`;

const deliveryTo = document.createElement(`small`);
deliveryTo.innerHTML = `Delivery to`;

const input = document.createElement(`input`);
input.innerHTML = `San Jose CA - 5 miles way`;

const deliveryCharges = document.createElement(`span`);
deliveryCharges.innerHTML = `Delivery: $40`;

const shippingDays = document.createElement(`small`);
shippingDays.innerHTML = `(2-3 business days, $40 shipping)`;

const paymentMode = document.createElement(`small`);
paymentMode.innerHTML = `Payment`;

const online = document.createElement(`button`);
online.innerHTML = `Online`;

const payInPerson = document.createElement("button");
payInPerson.innerHTML = `Pay in Person`;

const submitOffer = document.createElement(`button`);
submitOffer.innerHTML = `Submit Offer`;

box.append(makeOffer, offfer);

productDetails.append(dialogBox);
box.append(
  offfer,
  deliveryOfferText,
  storePickupOffer,
  deliveryOffer,
  deliveryTo,
  input,
  deliveryCharges,
  shippingDays,
  paymentMode,
  online,
  payInPerson,
  submitOffer
);

productDetails.append(quantity, shippingFee, buyBtn, dialogBox);
details.append(productDetails);
div.append(box);


