//Step1 - create onload handler
//We used onload because everytime browser will refresh it will save the root to root variable and btn to btn variable
window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  btn.addEventListener("click", function () {
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
  });
}
//Step 2 - random color generator function
function generateRGBColor() {
  //rgb(0,0,0), rgb(255,255,255)
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}
//Step 3 - collect all necessary reference

//Step 4 - handle the click event
