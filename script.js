var bg = document.querySelector(".bg");
var isiSurat = document.querySelector(".pesan");
var audio = new Audio(musik);
audio.loop = true;
audio.autoplay = true;
bg.style = "background-image: url('" + background + "')";

document.querySelector(".foto").src = foto;

function ketik(text, elem, next) {
  let i = 0;
  const speed = 80;
  typeWriter(text, elem);
  function typeWriter(text, elem) {
    let element = document.querySelector(elem);
    if (i < text.length) {
      let char = text.charAt(i);
      element.innerHTML += char;
      i++;
      setTimeout(() => {
        typeWriter(text, elem);
      }, speed);
      element.scrollTop = element.scrollHeight;
    } else {
      next();
    }
  }
}

for (let i = 0; i < konten.length; i++) {
  console.log(konten[i]);

  let nextText = "Lanjut";

  if (i == konten.length - 1) {
    nextText = "Kirim Pesan";
  }

  const html = `
      <div class="paper" id="content2">
        <div class="paper-content">
          <textarea oncontextmenu="return false" class="pesan pesan-${i}" disabled></textarea>
        </div>
      </div>
      <div class="btn-c">
        <button class="btn-next" onclick="nextContent()">${nextText}</button>
      </div>
      `;

  const content2E = document.createElement("div");
  content2E.classList.add("content2", `content-paper-${i}`);

  content2E.innerHTML = html;
  document.querySelector("body").appendChild(content2E);
}

const mlBtn = document.querySelector(".surat");
mlBtn.onclick = () => {
  audio.play();
  document.querySelector(".card").style = "transition: 0.5s all ease;transform: scale(0);opacity: 0;";
  setTimeout(() => {
    document.querySelector(".content").remove();
    nextContent();
  }, 500);
};

var pldr = document.querySelector(".pldr");
var isRemove = false;
function pldrRemove() {
  pldr.style = "transition: .5s ease all; opacity: 0";
  setTimeout(() => {
    pldr.remove();
    document.querySelector(".content").classList.add("show");
  }, 500);
}

setTimeout(() => {
  if (!isRemove) {
    pldrRemove();
  }
}, 15000);

window.addEventListener("load", () => {
  pldrRemove();
  isRemove = true;
});
