import {saludo} from "./App.js";
import "./app.css";

//agregar estilo a div de html con app.css
var div = document.getElementById("root");
var t = document.createTextNode("Hello World");
div.setAttribute("class", "colorRojo");
div.appendChild(t);


alert(saludo());