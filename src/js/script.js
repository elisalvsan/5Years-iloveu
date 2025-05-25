const messages = [
    "Te amo muitíssimo ❤️",
    "Obrigado por estar na minha vida 🌟",
    "Você é minha pessoa favorita 💕",
    "Juntos para sempre 🥰",
    "Você e eu, para sempre 💖",
    "Seu sorriso me ilumina 💫",
    "Você é a melhor coisa que me aconteceu 😍",
    "Cada momento com você é mágico ✨",
    "Sempre penso em você 💭",
    "Meu coração é seu 💘",
    "Você me faz sorrir todos os dias 😊",
    "Meu mundo é melhor com você nele 🌎",
    "Adoro cada detalhe seu 😘",
    "Com você, tudo faz sentido ✨",
    "Você é meu porto seguro ⚓",
    "Quero estar ao seu lado sempre 🤗",
    "Você é meu sonho realizado 💭",
    "Amo compartilhar a vida com você 💑",
    "Você é minha inspiração diária 🌹",
    "Nada é impossível quando estamos juntos 💪"
];


function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newLeft}px`;
        }

        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newTop}px`;
        }

        if (rect.left < 0) {
            bubble.style.left = "10px";
        }

        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 2000);

window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    if (audio) {
        audio.play().catch(() => {
            // Se o navegador bloquear, tente tocar após o primeiro clique
            document.body.addEventListener('click', () => {
                audio.play();
            }, { once: true });
        });
    }
});

const playlist = [
    "src/assets/audio/Fallingforyou.mp3",
    "src/assets/audio/ThisIsHome.mp3",
    "src/assets/audio/Liniker - TUDO.mp3",
    "src/assets/audio/Vanguart - Demorou Pra Ser.mp3",
    "src/assets/audio/13-o-anjo-mais-velho-teatro-magico.mp3",
    "src/assets/audio/VIDEOCLUB - amour plastique.mp3",
    "src/assets/audio/Exagerado.mp3",
    "src/assets/audio/Katamoi.mp3",    
];

let currentTrack = 0;
const audio = document.getElementById('audio');
const nextBtn = document.getElementById('next-audio');

function playTrack(index) {
    audio.src = playlist[index];
    audio.play().catch(() => {
        // Se o navegador bloquear, tente tocar após o primeiro clique
        document.body.addEventListener('click', () => {
            audio.play();
        }, { once: true });
    });
}

audio.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    playTrack(currentTrack);
});

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        playTrack(currentTrack);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    playTrack(currentTrack);
});
