document.getElementById("output").style.visibility = "hidden";

document.getElementById("lbsinput").addEventListener("input", (e) => {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("grams-output").innerHTML = lbs / 0.0022046;
  document.getElementById("kilograms-output").innerHTML = lbs / 2.2046;
  document.getElementById("ounces-output").innerHTML = lbs * 16;
});
