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

// -----------------------------
// ハンバーガーメニュー（全ページ共通）
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger__btn");
  const menuLists = document.querySelector(".menu-lists");

  if (hamburgerBtn && menuLists) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("close");
      menuLists.classList.toggle("show");
    });
  }
});


// -----------------------------
// ふわっと表示
// -----------------------------
gsap.utils.toArray(".greet span").forEach((line, i) => {
  gsap.to(line, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: line,
      scrub: 1,
      start: "top 90%",
      end: "top 60%"
    }
  });
});
