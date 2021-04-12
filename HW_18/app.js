let items = [];

class Record {
  constructor(title, body) {
    this._title = title;
    this._body = body;
  }

  delete() {
    this._isDeleted = true;
  }

  restore() {
    this._isDeleted = false;
  }

  get isDeleted() {
    return this._isDeleted;
  }

  get title() {
    return this.isDeleted ? "" : this._title;
  }

  get body() {
    return this.isDeleted ? "" : this._body;
  }
}

function render(items) {
  let id = 1;
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  for (let record of items) {
    tbody.innerHTML += renderRecord(id++, record);
  }
}

function renderRecord(id, record) {
  const deleteBtn = `
    <button class="btn-delete" style="background-color: red" data-id = ${id}>delete</button>
  `;

  const restoreBtn = `
    <button class="btn-restore" style="background-color: green" data-id = ${id}>restore</button>
  `;

  const button = record.isDeleted ? restoreBtn : deleteBtn;

  return `
    <tr>
        <td>${id}</td>
        <td>${record.title}</td>
        <td>${record.body}</td>
        <td>
          ${button}
        </td> 
    </tr>
    `;
}

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
  for (let object of JSON.parse(xhr.response)) {
    let record = new Record(object.title, object.body);
    items.push(record);
  }
  render(items);
};

xhr.send();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete")) {
    items[e.target.dataset.id - 1].delete();
    render(items);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-restore")) {
    items[e.target.dataset.id - 1].restore();
    render(items);
  }
});

const form = document.querySelector("#form");
const title = document.querySelector("#title");
const body = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let record = new Record(title.value, body.value);
  if (title.value == "" || body.value == "") {
    alert("Please enter title and body");
    return;
  }
  items.unshift(record);
  form.reset();
  render(items);
});
