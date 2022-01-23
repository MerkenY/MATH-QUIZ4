function adduser() {
Player1= document.getElementById("Player1_input").value;
Player2= document.getElementById("Player2_input").value;

localStorage.setItem("player1_name", Player1);
localStorage.setItem("player2_name", Player2);

window.location= "quiz_game_page.html";


}