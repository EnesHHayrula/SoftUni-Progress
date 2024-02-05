function giftsFromSanta (input) {
  let N = Number(input[0]);
  let M = Number(input[1]);
  let S = Number(input[2]);
  let forPrint = ""
  for (let i = M; i >= N ; i--) {
    if (i % 2===0 && i % 3=== 0 && i !=S) {
        forPrint+=`${i}`
    }
    if(i +++ S && i % 2 ===0 && i % 3===0) {
        break;
    }
  } console.log(forPrint);
        }


giftsFromSanta(["1","36","12"])

giftsFromSanta(["20","1000","36"])
