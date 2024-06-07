import "./style.css";
import "flowbite";
import navigate from "./scripts/navigation";

function reset() {
    const targets = document.querySelectorAll('[drawer-backdrop=""]');
    if (targets.length > 1) {
        targets[0].remove();
    }
}

window.reset = reset;
window.navigate = navigate;
