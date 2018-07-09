import _ from "lodash"
import print from "./print"
function component(){
    var elemet  = document.createElement("div");
    var button  = document.createElement("button");
    elemet.innerHTML = _.join(["Hello","Webpack"]," ");
    button.innerHTML = "Click me and Check the console.";
    button.onclick = print;
    elemet.appendChild(button);
    return elemet;    
}

document.body.appendChild(component());
global.jQuery = require("jquery")
import "expose-loader?$!jquery";