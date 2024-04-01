var activePage = "home";

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.debug("show page", page);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);
  hide(activePage);
  show(id);
  activePage = id;
}

function initEvents() {
  var toolbar = document.querySelector("#top-menu-bar");
  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      var page = e.target.dataset.page;
      console.warn("click", page);
      showPage(page);
    }
  });
}

function showSkills() {
  var ul = document.querySelector(`#skills ul`);

  var skills = [
    {
      name: "HTML",
      endorcements: 6,
    },
    {
      name: "CSS",
      endorcements: 5,
    },
    {
      name: "JS-3",
      endorcements: 3,
    },
  ];

  var text = skills.map(function (skill) {
    console.info("inside %o map", skill);
    return `<li>${skill.name} <span> - ${skill.endorcements}</span?</li>`;
  });
  console.warn(text);

  ul.innerHTML = text.join("");
}
//executii
showSkills();
showPage(activePage);
initEvents();
