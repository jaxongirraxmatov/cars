import { checkAuth } from "./check-auth.js";
import { BASE_URL, LOADER_COUNT } from "./constants.js";
import {
    elCardLoader,
    elCardSkletonTemplate,
    elInfoModal,
    elLoginLogoutButton,
    elModalLoginButton,
} from "./html-selection.js";
import { ui } from "./ui.js";

if (checkAuth()) {
    elLoginLogoutButton.innerText = "⬅️ Tizimdan chiqish";
} else {
    elLoginLogoutButton.innerText = "Tizimga kirish ➡️";
}

function init() {
    loader(true);
    fetch(BASE_URL + "/cars")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            ui(res.data);
        })
        .catch(() => { })
        .finally(() => {
            loader(false);
        });
}

function loader(bool) {
    if (bool) {
        elCardLoader.innerHTML = "";
        elCardLoader.classList.remove("hidden");
        let i = 0;
        while (true) {
            if (i === LOADER_COUNT) break;
            const clone = elCardSkletonTemplate.cloneNode(true).content;
            elCardLoader.append(clone);
            i++;
        }
    } else {
        elCardLoader.classList.add("hidden");
    }
}

// crud
document.addEventListener("click", (evt) => {
    // delete
    if (evt.target.classList.contains("js-delete")) {
        if (checkAuth()) {
            //
        } else {
            elInfoModal.showModal();
        }
    }
    // edit
    if (evt.target.classList.contains("js-edit")) {
        if (checkAuth()) {
            //
        } else {
            elInfoModal.showModal();
        }
    }
});

// start
init();

// events
elLoginLogoutButton.addEventListener("click", () => {
    if (checkAuth()) {
        localStorage.removeItem("token");
    } else {
        location.href = "/pages/register.html";
    }

    location.reload();
});

elModalLoginButton.addEventListener("click", () => {
    location.href = "/pages/register.html";
});
