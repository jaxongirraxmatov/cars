import { BASE_URL, LOADER_COUNT } from "./constants.js";
import { elCardLoader } from "./html-celectin.js";
import { ui } from "./ui.js";

function init() {
    loader(true)
    fetch(BASE_URL + "/cars")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            ui(res.data);

        })
        .catch(() => { })
        .finally(() => {
            loader(false)
        })
}

function loader(bool) {

    if (bool) {
        elCardLoader.innerHTML = "";
        elCardLoader.classList.remove("hidden");
        let i = 0;
        while (true) {
            if (i === LOADER_COUNT) break;
            const clone = elCardTemplateSkleton.cloneNode(true).content;
            elCardLoader.append(clone)
            i++;
        }
    } else {
        elCardLoader.classList.add("hidden");

    }
}

init()