/* ===============================
   HTML要素を取得
   =============================== */

   const textInput = document.getElementById("textInput");
   const fontSize = document.getElementById("fontSize");
   const lineHeight = document.getElementById("lineHeight");
   const letterSpacing = document.getElementById("letterSpacing");
   const align = document.getElementById("align");
   const shapeButtons = document.querySelectorAll(".shape");
   const previewText = document.getElementById("previewText");
   
   /* ===============================
      プレビュー更新関数
      =============================== */
   
   function updatePreview() {
     // 入力されたテキストを反映
     previewText.innerText = textInput.value;
   
     // サイズ・行間・字間・配置を反映
     previewText.style.fontSize = fontSize.value + "px";
     previewText.style.lineHeight = lineHeight.value;
     previewText.style.letterSpacing = letterSpacing.value + "em";
     previewText.style.textAlign = align.value;
   }
   
   /* ===============================
      フォント切り替え（形ボタン）
      =============================== */
   
   shapeButtons.forEach(button => {
     button.addEventListener("click", () => {
   
       // 選択状態をリセット
       shapeButtons.forEach(b => b.classList.remove("active"));
   
       // 押された形をアクティブに
       button.classList.add("active");
   
       // フォントを切り替え
       previewText.style.fontFamily = button.dataset.font;
     });
   });
   
   /* ===============================
      入力イベント監視
      =============================== */
   
   [textInput, fontSize, lineHeight, letterSpacing, align].forEach(el => {
     el.addEventListener("input", updatePreview);
   });
   
   /* 初期表示 */
   updatePreview();
   
