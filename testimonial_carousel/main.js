import './style.css'
import 'tw-elements';

const testimonials = [
        {
            src: "https://i.postimg.cc/SRnbkgbZ/image-tanya.jpg",
            testimonial: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
            I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
            excited about the future. ”`,
            name: "Tanya Sinclair",
            job: "UX Engineer",
        },

        {
            src: "https://i.postimg.cc/VvkLM9QM/image-john.jpg",
            testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
            The depth the instructors go into is incredible. I now feel so confident about 
            starting up as a professional developer.”`,
            name: "John Tarkpor",
            job: "Junior Front-end developer",
        },

        {
            src: "https://i.postimg.cc/s2bpTXDv/image-sara.jpg",
            testimonial: `"I used to spend hours writing creative copy, but now all I do is tell Rytr what I need and it writes everything for me. It's the ultimate AI content writer, and a must-have tool for bloggers, marketers, & entrepreneurs."`,
            name: "Sara Holland",
            job: "Back-end developer",
        },

        {
            src: "https://i.postimg.cc/qvLbD29g/image-chrisi.jpg",
            testimonial: `"I used to watch a lot of tutorials and tried to learn and understand how the concept works and its totally okay to do so but you have to practice in order to master it and dont watch the topics you get stuck on youtbe and try searching it on stackoverflow or google first to do it yourself."`,
            name: "Chrisi Conner",
            job: "Founded, Spicy Mix",
        }
]

const personImg = document.querySelector(".personImg");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const testimonial = document.querySelector(".testimonial");
const name = document.querySelector(".name");
const job = document.querySelector(".job");

let currentSlide = 0;
let totalSlide = testimonials.length;

async function changeTestimonial(){
    personImg.src = testimonials[currentSlide].src;
    await personImg.src;
    testimonial.textContent = testimonials[currentSlide].testimonial;
    name.textContent = testimonials[currentSlide].name;
    job.textContent = testimonials[currentSlide].job;
}

nextBtn.addEventListener("click",()=>{
    currentSlide = (totalSlide + currentSlide + 1) % totalSlide;
    changeTestimonial();
});

prevBtn.addEventListener("click",()=>{
    currentSlide = (totalSlide + currentSlide - 1) % totalSlide;
    changeTestimonial();
});

window.onload = changeTestimonial;