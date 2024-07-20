/**Bài 1: In ra 100 chữ 'Hello' */
function thisIsFunctionB1() {
  for (let i = 0; i < 100; i++) {
    console.log( i +" Hello");
}
}

/**Bài 2: Nhập vào N từ prompt. In ra N lần chữ 'Hello' */

function thisIsFunctionB2() {
  let N = +prompt('nhập số bất kì vào')
  for (let i = 0; i < N; i++)
    console.log(i +" Hello")
}

/**Bài 3: In ra cac số từ 1 đến 1000; */

function thisIsFunctionB3() {
  for (let i = 1; i <= 1000; i++) {
    console.log(i)
  }

}

/**Bài 4: In ra cac số từ a đến b; */

function thisIsFunctionB4() {
  let a = 1;
  let b = 10;
  for (let i = 1; i >= a && i <= b; i++)
    console.log(i)
}

/**Bài 5: In ra cac số từ a đến b, mỗi số trong 1 thẻ <h1>; */

function thisIsFunctionB5() {
  for (let i = 1; i <= 5; i++) {
    document.write("<h1>" + i + "</h1>");
  }
}

/** Bài 6: In ra các số chẵn tu a đến b; */

function thisIsFunctionB6() {
  for ( let i = 1; i <=10; i++) {
    if ( i % 2 == 0 ) {
      console.log(i)
    }
  }
}

/** Bài 7: In ra các số từ a đến b số chẵn trong h2, so le trong h1; */

function thisIsFunctionB7() {
  for ( let i = 1; i <= 10; i++) {
    if ( i % 2 == 0) {
      document.write("<h2>" + i + "</h2>")
    } else {
      document.write("<h1>" + i + "</h1>")
    }
  }
}

/** Bài 8: Tính tích các số từ a - b. */

function thisIsFunctionB8() {
  for (let i = 1; i <= 10; i++) {
    for ( let j = 1; j <= 10; j++) {
      console.log(` ${i} * ${j}`)
    }
  }

}

/** Bài 9: Tính Tổng các số chia 5 dư 2 từ a đến b. */

function thisIsFunctionB9() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 2) {
      sum += i;
      // sum = sum + i
    } 
  }
  console.log("Tổng các số chia 5 dư 2 từ 1 đến 100 là:" + sum)
}

/** Bài 10: Đếm các số chia 5 dư 2 từ a đến b */

function thisIsFunctionB10() {
  for (let i = 1; i <= 100; i++) {
    if ( i % 5 === 2 ) {
      let number = i
      console.log("các số chia 5 dư 2 từ 1 đến 100 là: " + number)
    }
  }
}
// function thisIsFunctionB10() {
//   let count = 0
//   for (let i = 1; i <= 100; i++) {
//     if ( i % 5 === 2 ) {
//       count++
//     }
//   }
//   console.log("các số chia 5 dư 2 từ 1 đến 100 là: " + count)
// }


/** Bài 11: In ra màn hình 0, 5 ,10,15, 20, ... 50. */

function thisIsFunctionB11() {
  for (let i = 1; i <= 50; i++) {
    if ( i % 5 === 0 ) {
      let number = i 
      console.log(number)
    }
  }
}

/** Bài 12: In ra  màn hình 10, 9, 8, 7, 6, ... 0. */

function thisIsFunctionB12() {
  for (let i = 10; i >= 0; i--) {
    let number = i 
    console.log(number)
  }
}

/** Bài 13: In ra màn hình 50, 45, 40, .. 0 */

function thisIsFunctionB13() {
  for (let i = 50; i >= 0; i--) {
    if (i % 5 === 0) {
      let number = i 
      console.log(number)
    }
    }
  }

  /** Bài 14: In ra bảng cửu chương 5. */

  function thisIsFunctionB14() {
    for (i = 1; i <=10; i++) {
      console.log(`5 * ${i} = ${i * 5}`)
    }
  }
