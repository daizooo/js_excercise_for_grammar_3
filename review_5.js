function loop(num) {
  console.log(num);
  if (num < 99) {
    num++;
    loop(num);
  }
  return;
}

loop(0);
