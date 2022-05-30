//objects for data
var objstudents = [
  {
    name: "Mette",
    unilogin: "mett1234",
    password: "12345678",

  },
  {
    name: "Sara",
    unilogin: "sara1234",
    password: "qwerty",}
]
var objthings = [
  {

    id: 1,
    thing: "Basiskemi C",
    category: "books",
    qty: 5
  },
  {
    id: 2,
    thing: "Kamera",
    category: "elektronik",
    qty: 3
  }

];
//loan stuff

function loan() {
  event.target.innerHTML = "lånt";
  var number = parseInt(document.getElementById(event.target.id + "number").innerHTML);

  console.log(number);
  if (number <= 0) {
    alert('Alle ' + event.target.value + ' er udlånt');
  } else {

    document.getElementById(event.target.id + "number").innerHTML =number-1;
    var myloans = JSON.parse(localStorage.getItem("myloans"));
    if (myloans === null) {
      myloans = []
    }
    myloans.push(event.target.value)
    console.log(myloans);
    localStorage.setItem("myloans", JSON.stringify(myloans));


  }
};

function showloans() {
  var list = document.getElementById('loanedstuff');

  var myloans = JSON.parse(localStorage.getItem("myloans"));
  console.log(myloans);
  if (myloans === null) {
    console.log('no loans');
    document.getElementById('noloans').innerHTML = "Du har ikke lånt noget endnu, du kan navigere mellem de forskellige kategorier i menuen til venstre"
    document.getElementById('loanedstuff').style.display = "none"
  } else {
  for (var i = 0; i < myloans.length; i++) {
      var li = document.createElement("li");
      var btn = document.createElement("BUTTON");
      var date = document.createElement("p");
      var returndate = document.createElement("p");
      const currentdate = new Date();
      let lastdate = new Date();
// add a day
lastdate.setDate(lastdate.getDate() + 30);
      li.appendChild(document.createTextNode(myloans[i]));
      btn.innerHTML = "Aflever";
      date.innerHTML = "Lånt den: " + currentdate.toDateString();
      returndate.innerHTML = "Skal afleveres senest: " + lastdate.toDateString();
      console.log(li);
      console.log(list);
      list.appendChild(li);
      list.appendChild(date);
      list.appendChild(returndate);
      list.appendChild(btn);


      btn.addEventListener('click', () => {
        console.log("afleveret");
        btn.innerHTML = "afleveret"
      });


}}}

//login
function login(){
    event.preventDefault();
    var unilogin = document.getElementById('unilogin').value
    var password = document.getElementById('password').value

    for (var i = 0; i < objstudents.length; i++) {
    if (unilogin == objstudents[i].unilogin && password == objstudents[i].password) {
      console.log(unilogin + " is logged in!!!!")
      document.getElementById('loginp').style.color = "black";
      document.getElementById('loginp').innerHTML = objstudents[i].name;
      window.location.href ="loans.html";
      return
  }}
  console.log("incorrect unilogin or password");
  document.getElementById('loginp').style.color = "red";
  document.getElementById('loginp').innerHTML = '*Forkert unilogin eller kodeord';
  return
}
var logininput = document.getElementById("password");
logininput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("loginbtn").click();
}});
//navbar
function opennav() {
document.getElementById('sidenav').style.width = "250px";
}
function closenav() {
document.getElementById('sidenav').style.width = "0px";
}
