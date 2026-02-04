const textInput = document.getElementById("textInput");
const fontSize = document.getElementById("fontSize");
const lineHeight = document.getElementById("lineHeight");
const letterSpacing = document.getElementById("letterSpacing");
const align = document.getElementById("align");
const previewText = document.getElementById("previewText");
const shapeButtons = document.querySelectorAll(".shape");

function updatePreview() {
  previewText.textContent = textInput.value;
  previewText.style.fontSize = fontSize.value + "px";
  previewText.style.lineHeight = lineHeight.value;
  previewText.style.letterSpacing = letterSpacing.value + "em";
  previewText.style.textAlign = align.value;
}

shapeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    shapeButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    previewText.style.fontFamily = btn.dataset.font;
  });
});

[textInput, fontSize, lineHeight, letterSpacing, align].forEach(el => {
  el.addEventListener("input", updatePreview);
});

updatePreview();
