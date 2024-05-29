

const reviews = [
    {
        id: 1,
        name: "Virat Kohli",
        job: "cricketer",
        img: "https://www.forbesindia.com/media/images/2022/Aug/img_192351_viratkohli.jpg",
        text: "Virat Kohli (born November 5, 1988, Delhi, India) is an Indian international cricketer considered by many as one of the greatest batsmen in the history of the game. Kohli plays for (and previously captained) the Royal Challengers Bangalore (RCB) in the Indian Premier League (IPL)" ,
     },
    {
        
        id: 2,
        name: "Dhoni",
        job: "cricketer",
        img: "https://c.ndtvimg.com/2024-05/qiifq5r_ms-dhoni-bcci_625x300_19_May_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",

        text : "Dhoni has ventured into several businesses beyond cricket. Notable investments include Tagda Raho, a fitness startup based in Bengaluru, Cars24, Garuda Aerospace and Khatabook. Additionally, Dhoni has established his own production house, Dhoni Entertainment Private Limited, managed by his wife.",
    },
    {
        id: 3,
        name: "Ishan Kishan",
        job: "cricketer",
        img: "https://www.mumbaiindians.com/static-assets/waf-images/d4/2c/bc/16-9/1920-1080/9upMA2K4nf.jpg",
        text: "Ishan Kishan (born 18 July 1998) is an Indian international cricketer who plays for the Indian national cricket team as a wicket-keeper batsman. He made his international debut in March 2021 against England. He plays forJharkhand in domestic cricket. In the Indian Premier League (IPL) he plays for Mumbai Indians.",
    },
    {
        id: 4,
        name: "Shubman Gill",
        job: "cricketer",
        img: "https://femina.wwmindia.com/content/2023/dec/shubman-thumb1702372362.jpg",
        text: " Shubman Gill was appointed captain of Gujarat Titans (GT) for IPL 2024, his first captaincy stint in the Indian Premier League, after emerging as one of the most promising batting talents in the country." ,
     },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// Show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// Show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// Show random person
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});

// ***********************************************************************

















