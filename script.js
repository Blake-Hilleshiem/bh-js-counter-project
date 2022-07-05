const number = document.getElementById("num");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

let count = 0;
number.innerText = count;

const print = () => {
  number.innerText = count;
};

const changeColor = (count) => {
  if (count == 0) {
    number.style.color = "black";
  } else if (count > 0) {
    number.style.color = "green";
  } else if (count < 0) {
    number.style.color = "red";
  }
};

decreaseBtn.addEventListener("click", () => {
  number.innerText = count--;
  changeColor(count);
  print();
});
increaseBtn.addEventListener("click", () => {
  number.innerText = count++;
  changeColor(count);
  print();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  number.innerText = count;
  changeColor(count);
  print();
});
