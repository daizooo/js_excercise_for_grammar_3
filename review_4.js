



const question = "パンはパンでも食べられないパンは？";
const answer = "フライパン";
let input;

const pan = (input) => {
  if (!!input === true) {
    if (input === answer) {
      alert("正解です！");
      return;
    } else {
      alert("不正解です！");
    }
  }
  let inputAnswer = prompt(question);
  pan(inputAnswer);
};

console.log(pan());
