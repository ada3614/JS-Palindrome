class Palindrome {
  constructor(inputSelector, checkSelector, clearSelector, resultSelector) {
    this.input = document.getElementById(inputSelector);
    this.checkBtn = document.querySelector(checkSelector);
    this.clearBtn = document.querySelector(clearSelector);
    this.result = document.querySelector(resultSelector);

    this.checkBtn.addEventListener("click", this.check.bind(this));
    this.clearBtn.addEventListener("click", this.clear.bind(this));
    this.input.addEventListener("keyup", this.enterKeyCheck.bind(this));
  }

  check() {
    const value = this.input.value;
    const normalizedValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (normalizedValue === "") {
      this.result.textContent = `Enter a word!`;
    } else if (
      normalizedValue === normalizedValue.split("").reverse().join("")
    ) {
      this.result.textContent = `${value} is a palindrome 🙂​`;
    } else {
      this.result.textContent = `${value} is not a palindrome ​🤔​`;
    }
    this.input.value = "";
  }

  clear() {
    this.input.value = "";
    this.result.textContent = "";
  }

  enterKeyCheck(e) {
    if (e.key === "Enter") {
      this.check(this.input);
    } else if (e.key === "Backspace") {
      this.clear();
    }
  }
}

const palindrome = new Palindrome("input", ".check", ".clear", ".result");
