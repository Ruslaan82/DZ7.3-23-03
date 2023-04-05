const list = document.querySelector(".card__list");

let posts = null;

/* Запрос за постами */
const fetchData = async () => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        renderingPosts(data);
      });
  } catch (error) {
    console.log(error + "Error fetching posts");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

function renderingPosts(data) {
  data.map((item) => {
    let li = document.createElement("li");
    li.className = "card__item";
    li.innerHTML = `
    <img class="card__img" src="${item.url}" />
      <p class="card__text">${item.title}</p>
    `;
    list.appendChild(li);
    return console.log(item);
  });
}
renderingPosts();
