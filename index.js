const categories = [
    "Fruits",
    "Vegetables",
    "Drinks",
    "TV Shows",
    "Movies",
    "Brands",
    "Ice Cream Flavors",
    "Streaming Services",
  ]
  
  let score1 = 0;
  let score2 = 0;
  let timer1 = 6;
  let timer2 = 6;
  
  let turn = 1;
  
  function updateTable() {
    document.getElementById("p1Score").innerHTML = score1;
    document.getElementById("p2Score").innerHTML = score2;
    document.getElementById("p1Timer").innerHTML = timer1;
    document.getElementById("p2Timer").innerHTML = timer2;
  }
  
  function onLoad() {
    document.getElementById("table").style.display = "none";
    document.getElementById("pTurn").style.display = "none";
    document.getElementById("container").style.boxShadow = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("newCategory").style.display = "none";
    updateTable();
  }
  onLoad()
  
  function newCategory() {
    let position = Math.floor(Math.random() * categories.length);
    document.getElementById("category").innerHTML =
      "The Category is:<br>" + categories[position];
  }
  
  function switchTurn() {
    if (turn === 1) {
      document.getElementById("pTurn").style.backgroundColor =
        "rgba(0, 0, 255, 0.5)";
      document.getElementById("pTurn").innerHTML = "P2";
      turn += 1;
    } else {
      document.getElementById("pTurn").style.backgroundColor =
        "rgba(255, 0, 0, 0.5)";
      document.getElementById("pTurn").innerHTML = "P1";
      turn -= 1;
    }
  }
  
  function newGame() {
    newCategory();
    document.getElementById("table").style.display = "block";
    document.getElementById("container").style.boxShadow =
      "0px 0px 10px rgba(0, 0, 0, 0.5)";
    document.getElementById("start").style.display = "block";
    document.getElementById("pTurn").style.display = "block";
    document.getElementById("newCategory").style.display = "block";
    score1 = 0;
    score2 = 0;
    timer1 = 6;
    timer2 = 6;
    document.getElementById("start").innerHTML = "Start Time";
    clearInterval(secondInterval);
    updateTable();
  }
  
  function resetTime() {
    timer1 = 6;
    timer2 = 6;
    document.getElementById("start").innerHTML = "Start Time";
    clearInterval(secondInterval);
    document.getElementById("newCategory").style.display = "block";
  }
  
  function timer() {
    if ((timer1 > 0) & (timer2 > 0)) {
      if (turn === 1) {
        timer1 -= 1;
        timer2 += 1;
      } else {
        timer2 -= 1;
        timer1 += 1;
      }
    } else {
      if (timer1 < 1) {
        score2 += 1;
        resetTime();
        newCategory();
      } else if (timer2 < 1) {
        score1 += 2;
        resetTime();
        newCategory();
      }
    }
    updateTable();
  }
  
  function startTime() {
    if (document.getElementById("start").innerHTML == "Start Time") {
      document.getElementById("start").innerHTML = "Stop Time";
      secondInterval = setInterval(timer, 1000);
      document.getElementById("newCategory").style.display = "none";
    } else {
      document.getElementById("start").innerHTML = "Start Time";
      clearInterval(secondInterval);
      document.getElementById("newCategory").style.display = "block";
    }
  }