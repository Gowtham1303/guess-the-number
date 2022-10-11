var x = document.getElementById("guessfield").value;
if(x == y)
{
    guess++;
    alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN " + guess + " GUESS");
    guess= 1;
}
else if(x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}