import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class UtilService {
    constructor() { }

    handleFormItemStatus(obj: any) {
        const inputs = Array.from(document.querySelectorAll("input, textarea"));
        const calendars = Array.from(
            document.querySelectorAll("input[type=calendar]")
        );
        inputs.forEach((input: HTMLInputElement) => {
            const sibling = input.previousElementSibling;
            if (sibling) {
                for (let prop in obj) {
                    const val = obj[prop] && obj[prop].toString();
                    // make sure the empty input field label text not float to top
                    if (val && input.value == val) {
                        sibling.classList.remove("big-label");
                        sibling.classList.add("small-label");
                    }
                }
            }
            // focus on email field
            if (input.type === "email") {
                input.parentElement.classList.add("focus-border");
                input.focus();
            }
        });

        // calendars
        calendars.forEach((cal: HTMLElement) => {
            if (cal.getAttribute("ng-reflect-model")) {
                const label = cal.previousElementSibling;
                label.classList.remove("big-label");
                label.classList.add("small-label");
            }
        });
    }

    getOffsetTop(elem, parent) {
        var offsetTop = 0;
        do {
            if (!isNaN(elem.offsetTop)) {
                if (elem.classList.contains(parent)) break;
                offsetTop += elem.offsetTop;
            }
        } while ((elem = elem.offsetParent));

        return offsetTop;
    }

}
