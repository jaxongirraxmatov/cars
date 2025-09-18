import { log } from "winjs";
import { elcardContainer, elcardTemlate } from "./html-celectin.js";

export function ui(cars) {
    elcardContainer.innerHTML = "";

    cars.array.forEach(car => {
        const clone = elcardTemlate.cloneNode(true).content;
        const elName = clone.getElementById("name");
        const elDescription = clone.getElementById("description");
        const elCountry = clone.getElementById("country");
        const elCategory = clone.getElementById("category");
        const elColor = clone.getElementById("color");
        const elColorBadge = clone.getElementById("colorBadge");

        // content
        elName.innerText = car.name;
        elDescription.innerText = car.description;
        elCountry.innerText = car.country;
        elCategory.innerText = car.category;
        elColor.innerText = car.colorName;
        elColorBadge.style.backgraundColor = car.colorName;

        // append
        elcardContainer.appendChild(clone)
    });
}