document.querySelector("#btn").addEventListener("click", () => {
  const input = document.querySelector("#input");
  const task = `<div class="task">
     <li class="text">${input.value}</li>
     <input type="checkbox" class="check" />
   </div>`;

  if (input.value === "") {
    alert("Please add a task!");
  } else {
    document.querySelector("#list").insertAdjacentHTML("afterbegin", task);
    resetInput(input);
  }
});

function resetInput(input) {
  input.value = "";
}

// show date
document.querySelector(".date").textContent = date();

function date() {
  const date = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
  }).format(new Date());

  let newDate = date.split(",");
  let newMon = date.split(",")[1].split(" ");
  let day = newDate[0];
  let dayNum = newMon[2];
  let month = newMon[1].slice(0, 3);
  let year = newDate[2];

  let formatedDate = `${day} ${dayNum} ${month}, ${year} `;
  return formatedDate;
}

document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.classList.contains("check")) {
    const textElement = e.target.previousElementSibling;
    textElement.classList.toggle("completed");
  }
});
