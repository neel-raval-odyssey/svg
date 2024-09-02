function populateDots() {
  const svgElement = document.getElementById("dotsCanvas");
  svgElement.innerHTML = "";
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dotSpacing = 20;

  for (let y = dotSpacing; y < height; y += dotSpacing) {
    for (let x = dotSpacing; x < width; x += dotSpacing) {
      const dot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      dot.setAttribute("d", `M ${x} ${y} a 1 1 0 1 0 2 0 a 1 1 0 1 0 -2 0`);
      dot.setAttribute("fill-opacity", "1");
      dot.setAttribute("fill", "hsl(0, 0%, 68%)");
      svgElement.appendChild(dot);
    }
  }
}

populateDots();
window.onresize = populateDots;
