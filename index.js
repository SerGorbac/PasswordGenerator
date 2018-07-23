var submitbutton = document.createElement("button");
var submitbuttontext = document.createTextNode("SUBMIT!");
submitbutton.id = "sbmt";
submitbutton.appendChild(submitbuttontext);
document.body.appendChild(submitbutton);

function passGen({
  servn,
  pass
}) {
  const firstchar = servn.substr(0, 1);
  const lastchar = servn.slice(-1);
  const tvowels = (servn.match(/[aeiou]/gi) || []).length;
  const charIndex = tvowels - 1 > -1 ? tvowels - 1 : 0;
  const charatvowelscount = servn.substr(charIndex, charIndex);
  const nvowels = servn.length - tvowels;
  document.getElementById("password").innerHTML = lastchar + charatvowelscount + pass + nvowels + firstchar;
}

document.getElementById("sbmt").addEventListener("click", function () {
  var servicename = document.getElementById("inone").value;
  var password = document.getElementById("intwo").value;
  var data = {
    servn: servicename,
    pass: password
  }
  passGen(data);
})