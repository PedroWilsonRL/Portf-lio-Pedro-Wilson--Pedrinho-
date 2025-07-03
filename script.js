function mostrarHora() {
  const agora = new Date();
  const horaFormatada = agora.toLocaleTimeString();
  document.getElementById("footer-text").innerText = `Hora atual: ${horaFormatada}`;
}

function mudarCorFundo() {
  const cores = ["#f0f8ff", "#ffe4e1", "#e6ffe6", "#fffacd", "#e0ffff"];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
}

function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("active");
}

function alternarTema() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("light");

  const isLight = body.classList.contains("light");
  icon.src = isLight ? "./src/images/switch1.png" : "./src/images/switch2.png";
}

function typeWriter(element, text, speed = 50, callback) {
  let i = 0;
  element.textContent = "";
  element.classList.add("typing-cursor");

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      element.classList.remove("typing-cursor");
      if (callback) callback();
    }
  }

  type();
}

window.addEventListener("load", () => {
  const nome = document.querySelector(".highlight-name");
  const descricao = document.querySelector(".profile-text p");
  const downloadBtn = document.querySelector(".download-cv-btn");

  if (nome && descricao) {
    const nomeTexto = nome.textContent;
    const descTexto = descricao.textContent;

    nome.textContent = "";
    descricao.textContent = "";
    descricao.style.opacity = "0"; 
    descricao.classList.remove("slide-in-right");

    typeWriter(nome, nomeTexto, 80, () => {
      descricao.textContent = descTexto; 
      descricao.style.opacity = "1";
      descricao.classList.add("slide-in-right");
      if(downloadBtn) {
        downloadBtn.classList.add("slide-in-right");
      }
    });
  }
});

function copiarTelefone() {
  const telefone = '+55 62 998429470'; 

  navigator.clipboard.writeText(telefone)
    .then(() => {
      alert('Telefone copiado para a área de transferência!');
    })
    .catch(err => {
      console.error('Erro ao copiar o telefone:', err);
      alert('Falha ao copiar o telefone.');
    });
}

function copiarEmail() {
  const email = 'pedrowilsonrl@gmail.com';
  navigator.clipboard.writeText(email)
    .then(() => {
      alert('E-mail copiado para a área de transferência!');
    })
    .catch(err => {
      console.error('Erro ao copiar e-mail:', err);
    });
}


document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-section');
      } else {
        entry.target.classList.remove('visible-section');
      }
    });
  }, {
    threshold: 0.15, 
  });

  const sections = document.querySelectorAll('.hidden-section');
  sections.forEach(section => observer.observe(section));
});

