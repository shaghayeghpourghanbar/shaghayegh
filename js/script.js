import { links } from "./links.js";
import { info } from "./info.js";

const linkContainer = document.getElementById("links");

function addLink(link, icon) {
  return ` 
  <a href="${link}" target="blank">
    <i class="${icon}"></i>
  </a> 
  `;
}

let allLinks = "";
links.forEach((ele) => {
  let link = ele.link;
  let icon = ele.icon;

  allLinks += addLink(link, icon);
});

linkContainer.innerHTML = allLinks;

const aboutContainer = document.getElementById("info");

function addInfo(pfp, name, bio, number) {
  return `
  <div class="logoContainer">
    <img class="logo" src="image/${pfp}" alt="${name}">
  </div>
  <div class="greetings">
    <div>${name}</div>
  </div>
  <div class="about">
    <div>${bio}</div>
  </div>
  <div class="number">
    <div> <a href="tel:+98${number}">0${number}</a></div>
  </div>
  `;
}
let allInfo = "";
info.forEach((ele) => {
  let pfp = ele.pfp;
  let name = ele.name;
  let bio = ele.bio;
  let number = ele.number;

  allInfo += addInfo(pfp, name, bio, number);
});

aboutContainer.innerHTML = allInfo;