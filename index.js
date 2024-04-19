const febHolidays = [
  "Dear Bebe,",
  "First of all, I love you with all my heart❤️",
  "You mean the world to me.",
  "You are my soulmate and my life partner.",
  "And of course...",
  "My future hubby!🤭",
  "I'll always be by your side, no matter the distance🥰",
  "You're the most handsome, charming, funniest,",
  "sweetest person I've ever known.",
  "Simply put, you're perfect to me.😍",
  "I'm the luckiest girl alive🥰",
  "I'm so thankful our paths crossed❤️",
  "I'll do everything I can to make you happy🥺",
  "You are the most important person in my life🥰",
  "I never want to lose you,",
  "And trust me, there's no one else for me.",
  "No one can compare to you❤️",
  "You're the best partner ever!",
  "Or should I say, my Mr. Rem Gamboa?",
  "Wow! Time flies, we've been together for four wonderful months.",
  "There have been challenges,",
  "but we've overcome them together.",
  "It's made me realize just how important you are in my life❤️",
  "This is for you,",
  "mein liebe",
  "mahal ko",
  "my love and my partner🤣❤️",
  "Happy 4 months, my sweet tol (husband-to-be🤭)!",
  "You are the love of my life,",
  "I Love You So Much❤️",
];

const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
      idx + 1
    }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor =
    window.getComputedStyle(newActiveEl).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
