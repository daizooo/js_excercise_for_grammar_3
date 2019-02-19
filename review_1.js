let num = 0;
while (num < 100) {
  console.log(num);
  num++;
}

const qustion = "パンはパンでも食べられないパンは？";
const answer = "フライパン";
let input;


while (answer !== input) {
  input = prompt(qustion);
  if (answer === input) {
    alert("正解です！");
  } else {
    alert("不正解です！");
  }
}
