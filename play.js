// -----------------------------
// あそぶページ用（存在するときだけ）
// -----------------------------

const textInput = document.getElementById("textInput");
const fontSize = document.getElementById("fontSize");
const lineHeight = document.getElementById("lineHeight");
const letterSpacing = document.getElementById("letterSpacing");
const align = document.getElementById("align");
const previewText = document.getElementById("previewText");
const shapeButtons = document.querySelectorAll(".shape");

function updatePreview() {
  if (!previewText || !textInput) return;

  previewText.textContent = textInput.value;
  previewText.style.fontSize = fontSize.value + "px";
  previewText.style.lineHeight = lineHeight.value;
  previewText.style.letterSpacing = letterSpacing.value + "em";
  previewText.style.textAlign = align.value;
}

if (textInput) {
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

    const defaultBtn = document.querySelector('[data-font="Triangle2"]');
  if (defaultBtn) {
    shapeButtons.forEach(b => b.classList.remove("active"));
    defaultBtn.classList.add("active");
    previewText.style.fontFamily = "Triangle2";
  }
}
