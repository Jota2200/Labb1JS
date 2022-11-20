const news = [
  {
    headline: "Regeringen skjuter på publiklättnader",
    author: "Erik Wikén",
    href: "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
    summary:
      "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället.",
  },
  {
    headline: "Graffitin – så kom den till Sverige genom Public service",
    author: "",
    href: "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
    summary:
      "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon.",
  },
  {
    headline: "Louise Glück får Nobelpriset i litteratur",
    author: ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
    href: "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
    summary:
      "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna.",
  },
];

document.getElementById("ex01").innerHTML = "klar";

let element = document.querySelector(".ex02");
element.classList.add("red");

document.getElementsByTagName("blockquote")[0].innerHTML =
  "Stor i orden men liten på jorden";

var li = document.createElement("li");
li.innerHTML = "Mjölk";
document.getElementById("shopping-list").appendChild(li);

for (var i = 0; i < news.length; i++) {
  var header = document.createElement("h3");
  header.innerHTML = news[i].headline;
  var showHeader = document.getElementById("news");
  showHeader.appendChild(header);

  var author = document.createElement("h4");
  author.innerHTML = news[i].author;
  var showAuthor = document.getElementById("news");
  showAuthor.appendChild(author);

  var anchor = document.createElement("a");
  anchor.innerHTML = news[i].href;
  var showLink = document.getElementById("news");
  anchor.href = showLink.appendChild(anchor);

  var summary = document.createElement("p");
  summary.innerHTML = news[i].summary;
  var showSummary = document.getElementById("news");
  showSummary.appendChild(summary);
}
var countclicks = 0;
document.body.onclick = function () {
  clickFunction();
};

function clickFunction() {
  countclicks++;
  document.getElementById("click-counter").innerHTML = countclicks;
}
var count = 0;
var button = document.querySelector("button");

button.onclick = function () {
  count++;

  if (count >= 2) {
    button.disabled = true;
  }
};

var link = document.getElementById("link-to-svt");
link.removeAttribute("href");

document.querySelector("img").src =
  "https://images.unsplash.com/photo-1617374128851-c84e37dc9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

/**
 *
 * Här ska du skriva din javascript för att ändra innehållet på webbsidan.
 *
 */

console.log("js loaded!");
