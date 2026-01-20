<script>
const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");
const slopeSlider = document.getElementById("slope");

function drawGraph(m) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Axes
  ctx.strokeStyle = "#64748b";
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  // Line: y = mx
  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = -canvas.width / 2; x < canvas.width / 2; x++) {
    let y = -m * x;
    ctx.lineTo(
      canvas.width / 2 + x,
      canvas.height / 2 + y
    );
  }
  ctx.stroke();
}

slopeSlider.addEventListener("input", () => {
  drawGraph(parseFloat(slopeSlider.value));
});

// Initial draw
drawGraph(1);

document.getElementById("eli5").addEventListener("change", function () {
  if (this.checked) {
    alert("Simple explanation mode ON");
  } else {
    alert("Normal explanation mode ON");
  }
});
</script>
