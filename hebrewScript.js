

var flexionsPackage1 = ["Qatal", "Yiqtol", "Wayyiktol", "Imperativo", "Coortativo", "Iussivo", "Participio", "Infinito Assoluto", "Infinito Costrutto"]
var stems = [
{name: "Qal",
flex: flexionsPackage1},
{name: "Niphal",
flex: flexionsPackage1},
{name: "Piel",
flex: flexionsPackage1},
{name: "Pual",
flex: flexionsPackage1},
]

var ad = Math.floor(Math.random() * stems.length);
var givingTask = function () {
 var tsk =document.getElementById('myTask');
 tsk.innerHTML = "<br> <b> Crea questa forma: </b>";
};

var stem = function () {
  var stm = document.getElementById('stemShowing');
  stm.innerHTML = "Congiugazione: " + stems[ad].name;
 };

var flexion = function () {
var fx = Math.floor(Math.random() * flexionsPackage1.length);
 var flx=document.getElementById("flexShowing");
 flx.innerHTML = "Flessione: " + flexionsPackage1[fx];
};



var newButton = function () {
 var bt=document.createElement("form");
 bt.innerHTML = "<p style = \"text-align: center\"><input type = \"button\" value = \"Altra parola\" id = \"more\" onClick = \"giveMore()\"></p>";
 nbut = document.getElementById("newButtons");
 document.body.insertBefore(bt, nbut);

 var allDone = function () {
  alert("Кнопка клікабельна")
 }


};