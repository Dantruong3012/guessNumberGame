function Start() {
  let inputNumber = Number(
    prompt("Let's me know hightest number in your number range!")
  );
  if (isNaN(inputNumber)) {
    alert("Invalid number");
    return;
  }

  let randomNumber = Math.floor(Math.random() * inputNumber) + 1;
  let guess = 0;
  let trail = 0;
  let maxTrail = 3;
  do {
    let guess = Number(
      prompt(
        `Trails ${
          trail + 1
        } left. Let's me know the number you might think it's right`
      )
    );
    if (isNaN(guess)) {
      alert("Invalid number");
      continue;
    }
    trail++;
    if (randomNumber > guess) {
      alert("Your number is lower than the correct one");
    } else if (randomNumber < guess) {
      alert("Your number is higher than the correct one");
    } else {
      alert("You're right!");
      break;
    }
  } while (guess !== randomNumber && trail < maxTrail);

  if (guess !== randomNumber) {
    alert(
      `💥 You've used all ${maxTrail} tries. The correct number was ${randomNumber}. You lost!`
    );
  }
}
