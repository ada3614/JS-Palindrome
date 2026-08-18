const input = document.getElementById("input");

const checkBtn = document.querySelector(".check");
const clearBtn = document.querySelector(".clear");
const result = document.querySelector(".result");

const check = () => {
  const value = input.value;
  console.log(value);
  if (value === value.split("").reverse().join("")) {
    console.log("ok");
    result.innerHTML = `${value} is a palindrome 🙂​`;
  } else {
    console.log("nie ok");
    result.innerHTML = `${value} is not a palindrome ​🤔​`;
  }
};

const clear = () => {
  input.value = "";
  result.innerHTML = "​";
};
// console.log(result);

const enterKeyCheck = (e) => {
  if (e.key === "Enter") {
    check();
  } else if (e.key === "Backspace") {
    clear();
  }
};

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);
// clearBtn.addEventListener("click", check);
input.addEventListener("keyup", enterKeyCheck);
// input.addEventListener("keyup", enterKeyCheck);
