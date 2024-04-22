// const input = document.querySelector("input");
// const submit = document.querySelector(".btn");
// const para = document.querySelector(".para");
// // para.textContent = input.value;

// submit.addEventListener("click", () => {
//   if (input.value == "") {
//     input.style.backgroundColor = "red";
//   } else if (input.value > 12) {
//     console.log("the number is high");
//   } else {
//     // para.textContent = input.value;
//     console.log("hello world");
//   }
// });

// const body = document.querySelector("body");
// const toggle = document.getElementById("toggle");
// toggle.onclick = function () {
//   toggle.classList.toggle("active");
//   body.classList.toggle("active");
// };

const jonas = {
  firstName: "Ademi",
  year: 1996,
  calcAge: function () {
    console.log(2020 - this.year);

    greet = () => {
      console.log(this);
      console.log(2010 - this.year);
    };
    greet();
  },
};
jonas.calcAge();
