// document.body.style.border = "5px solid brown";
//console.log("hello world");
//var p = document.createElement("p");
//p.textContent = "This paragraph was added by a page script.";
//p.setAttribute("id", "page-script-para");
//document.body.appendChild(p);

//console.log("Done1.");
//var theText = document.body.innerText;
//
//console.log("Done2.");
//console.log(theText);
//
//console.log("Done3.");

// Taken from
// https://stackoverflow.com/questions/18474497/replace-text-in-a-website

function piggifyText(text){
  console.log("\nText")
  console.log(text)
    
  var response = fetch("http://leslienate.tech:81/piglatin", {
    method: 'POST',
    body: text,
    headers: {'Content-Type':'text/plain'}
  })
  
  console.log("\nResponse")
  console.log(response)
  
//  fetch("http://leslienate.tech:81/piglatin", {
//    method: 'POST',
//    body: text,
//    headers: {'Content-Type':'text/plain'}
//  })
//    
//  .then(response => {
//   console.log("response?");
//   if (response.ok) {
//     return response;
//   } else {
//     let errorMessage = `${response.status} (${response.statusText})`,
//     error = new Error(errorMessage);
//     throw(error);
//   }
//  })
//  .then(response => response.text())
//  .then(body => {
//   console.log("\nBody")
//   console.log(body);
//  })
//  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

function piggifyNode(node){
  if(node.childNodes.length)
    for(var i = 0; i < node.childNodes.length; i++)
      piggifyNode(node.childNodes[i]);
  else if(node.nodeType == Node.TEXT_NODE)
    node.textContent = piggifyText(node.textContent);
}

console.log("start");
piggifyNode(document.body);