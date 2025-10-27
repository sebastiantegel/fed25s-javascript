import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

const btn = document.createElement("button");
btn.type = "button";
btn.className = "btn btn-primary";
btn.innerHTML = "Spara";

document.body.appendChild(btn);
