

// unit-4-game

var random_result;
var losses = 0;
var wins = 0;
var previous = 0;
var n = 1;

var resetAndStartGame = function(){

    $(".crystals").empty();

random_result = Math.floor(Math.random() * 101) + 19; // genterate random number between 19 and 120
console.log(random_result);

// $("#result").html("Random Reslt: " + random_result);
$(".numToMatch").html(random_result);

for (var i = 0; i < 4; i++) {
  
    var randomNum = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<img>");
        crystal.attr({
            "class": "crystal",
            "data-random": randomNum,
            "src": "./assets/images/crystal" + n++ + ".png"
        });

    $(".crystals").append(crystal);

    crystal.html(randomNum);

}
}

resetAndStartGame();

$(document).on("click", ".crystal", function() {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $(".totalScore").html(previous);
    console.log("previous= " + previous + " num= " + num );

    if (previous > random_result){
        console.log("you lost");
        losses++;
        $("#losses").html(losses);

        n = 1;
        previous = 0;
        $(".totalScore").text("   ");  // This line can be added to remove your score before entering the next round
        resetAndStartGame();
    }
    else if (previous === random_result) {
        console.log("you won");
        wins++;
        $("#wins").html(wins);

        n = 1;
        previous = 0;
        $(".totalScore").text("   ");  // This line can be added to remove your score before entering the next round
        resetAndStartGame();
    }

});
