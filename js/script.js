const quotes = [
    {
        text: "Memaafkan belum tentu membuat kita lebih baik atau bahkan merasa lebih baik, tetapi yang jelas membuka jalan kebaikan.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Rahasia dari kesuksesan kita adalah bahwa kita tidak pernah menyerah.",
        author: "Ilma Mankiller"
    },
    {
        text: "Kesuksesan dan kegagalan adalah sama-sama bagian dalam hidup. Keduanya hanyalah sementara.",
        author: "Shah Rukh Khan"
    },
    {
        text: "Jangan biarkan opini orang lain menenggelamkan suara dari dalam diri Anda.",
        author: "Steve Jobs"
    },
    {
        text: "Keyakinan, keberanian, dan semangat yang teguh sangat penting untuk bertahan dari masa-masa sulit.",
        author: "Lailah Gifty Akita"
    },
    {
        text: "Masalah adalah kesempatan bagi Anda untuk melakukan yang terbaik.",
        author: "Duke Ellington"
    },
    {
        text: "Selain mencoba dan menang, hal terbaik adalah mencoba dan gagal.",
        author: "LM Montgomery"
    },
    {
        text: "Terimalah kesulitan sebagai disiplin yang diperlukan.",
        author: "Lailah Gifty Akita"
    }
];

const count = quotes.length;

const text = document.querySelector(".text");
const author = document.querySelector(".author");
const generate = document.querySelector(".btn");


generate.addEventListener("click", () => {
    const random = Math.floor(Math.random() * count);
    text.innerHTML = `<h1>"${quotes[random].text}"</h1>`;
    author.innerHTML = `<h5>- ${quotes[random].author}</h5>`;
})
