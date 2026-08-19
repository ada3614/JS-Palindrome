const input = document.getElementById("input");
const checkBtn = document.querySelector(".check");
const clearBtn = document.querySelector(".clear");
const result = document.querySelector(".result");

const check = () => {
  const value = input.value;
  console.log(value);

  if (value === "") {
    result.innerHTML = `Enter a word!`;
    input.value = "";
  } else if (value === value.split("").reverse().join("") && value !== "") {
    result.innerHTML = `${value} is a palindrome 🙂​`;
    input.value = "";
  } else {
    result.innerHTML = `${value} is not a palindrome ​🤔​`;
    input.value = "";
  }
};

const clear = () => {
  input.value = "";
  result.innerHTML = "​";
};

const enterKeyCheck = (e) => {
  if (e.key === "Enter") {
    check();
  } else if (e.key === "Backspace") {
    clear();
  }
};

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);
input.addEventListener("keyup", enterKeyCheck);
