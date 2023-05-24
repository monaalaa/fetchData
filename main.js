let data;
async function fetchDataFromApi(URL) {
  let res = await fetch(URL);
  data = await res.json();
  addArticles(data.results);
}

function loadDataFromURL(url) {
  let dataContainer = document.getElementById("results");
  dataContainer.innerHTML = "";
  fetchDataFromApi(url);
}

function addArticles(data) {
  console.log(data);
  let index = 0;
  let dataContainer = document.getElementById("results");

  data.forEach((element) => {
    let parent = document.createElement("div");
    parent.id = index.toString();

    let title = document.createElement("h2");
    title.innerText = element.title;
    parent.appendChild(title);

    let summary = document.createElement("p");
    summary.innerText = element.summary;
    parent.appendChild(summary);

    createImage(newDiv, element.image_url);
    // creteIframe(element.url, newDiv);
    dataContainer.appendChild(parent);
    index++;
  });
}

function creteIframe(url, parent) {
  var frame = document.createElement("IFRAME");
  frame.setAttribute("src", url);
  frame.style.height = "300px";
  frame.style.width = "300px";
  parent.appendChild(frame);
}

function createImage(parent, url) {
  let img = document.createElement("img");
  img.src = url;

  img.style.height = "300px";
  img.style.length = "300px";

  /* new simpleParallax(img, {
    orientation: "right",
  });*/

  parent.appendChild(img);
}

async function renderArticls() {
  await fetchDataFromApi("https://api.spaceflightnewsapi.net/v4/articles/");

  let next = document.getElementById("next");
  next.addEventListener("click", function () {
    loadDataFromURL(data.next);
  });

  let prev = document.getElementById("previous");
  prev.addEventListener("click", function () {
    loadDataFromURL(data.next);
  });
}

renderArticls();

/*window.onload = function () {
  if (data.previous == null) {
    document.getElementById("previous").style.visibility = "hidden";
  } else {
    document.getElementById("previous").style.visibility = "visible";
  }
};*/
