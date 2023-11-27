function variablesExample() {
  console.log(true);
  console.info("page loaded");
  console.debug(5 - 2);
  console.warn(10 / 2);
  console.error("hello " + " there");

  var employed = false;
  var age = 23;
  var name = "Gioni Cornea";
  console.info("i'm employed", employed);
  console.info(typeof employed);
  console.warn("age", age, typeof age);
  console.info("My name is", name, typeof name);

  age = 33;
  console.warn("age", age, typeof age);

  age = false;
  console.warn("age", age, typeof age);

  var skills = ["HTML", "CSS", `JS`];
  console.debug(skills, typeof skills);

  var person = {
    employed: true,
    age: 29,
  };
  console.info(person, typeof person);
}

function updateTitle(title) {
  var jobTitle = document.getElementById("job-title");
  console.warn(jobTitle, typeof jobTitle);

  console.info(jobTitle.innerHTML);
  jobTitle.innerHTML = title;
  console.info(jobTitle.innerHTML);
}

variablesExample();

updateTitle("Student at FastTrackIt");
