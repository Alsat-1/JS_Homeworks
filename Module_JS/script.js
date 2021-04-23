// To temporarily unlock access to the demo - https://cors-anywhere.herokuapp.com/corsdemo 
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
  };
}

const http = customHttp();

const newsService = (() => {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiKey = "e4e878be1f9946f1adfbcc84d55af642";
  const apiUrl = "https://newsapi.org/v2/";

  return {
    topHeadLines(country = "ua", callback) {
      http.get(
        `${proxyUrl}${apiUrl}top-headlines?country=${country}&apiKey=${apiKey}`,
        callback
      );
    },
    everything(query, callback) {
      http.get(
        `${proxyUrl}${apiUrl}everything?q=${query}&apiKey=${apiKey}`,
        callback
      );
    },
  };
})();

const form = document.querySelector("form");
const countrySelect = document.querySelector("#country");
const input = document.querySelector("#autocomplete-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadNews();
});

document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  loadNews();
});

function loadNews() {
  const country = countrySelect.value;
  const searchText = input.value;
  showPreloader();

  if (!searchText) {
    newsService.topHeadLines(country, onGetResponse);
  } else {
    newsService.everything(searchText, onGetResponse);
  }
}

function onGetResponse(err, res) {
  removePreloader();
  if (err) {
    showMessage(err, "error-msg");
    return;
  }

  if (!res.articles.length) {
    showEmptyMessage();
    return;
  }
  renderNews(res.articles);
}

function renderNews(news) {
  const newsContainer = document.querySelector(".news-container .row");
  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  }
  let fragment = "";

  news.forEach((newsItem) => {
    const element = newsTemplate(newsItem);
    fragment += element;
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

function clearContainer(container) {
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

function newsTemplate({ urlToImage, title, url, description }) {
  return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}">
          <span class="card-title">${title || ""}</span>
        </div>
        <div class="card-content">
          <p>${description || ""}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}

function showMessage(message, type = "success") {
  M.toast({ html: message, classes: type });
}

function showEmptyMessage(message = "no news on this topic") {
  M.toast({ html: message });
}

function showPreloader() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    `
  );
}

function removePreloader() {
  const loader = document.querySelector(".progress");
  if (loader) {
    loader.remove();
  }
}
