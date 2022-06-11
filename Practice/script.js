console.log("Hellllllooo");
const sayName = document.createElement('h2');
const Name = document.createTextNode("Lalit");
sayName.appendChild(Name);
const h2 = document.getElementsByTagName('h2');
h2.appendChild(sayName);