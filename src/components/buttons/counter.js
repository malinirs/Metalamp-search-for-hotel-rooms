let buttons = document.querySelectorAll('.dropdown-item > button');

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let parent = button.closest('.dropdown-item');
    let count = parent.querySelector('.dropdown-item__count');
    let countValue = parseInt(count.innerHTML);

    if (button.classList.contains("dropdown-item__button-minus") && countValue > 0) {
      count.innerHTML = countValue - 1;
    } else {
      count.innerHTML = countValue + 1;
    }
  });
})
