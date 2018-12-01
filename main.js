
$(document).ready(function () {
    console.log('jQ ready!');

    //issue: when i refresh the page the names dont go. 
    // the second one goes 


    // add an event to button
    // player input is saved in a var called player input 
    // set player function is called (why before?? )

  $('.player-submit').on('click', function(){
    var playerInput = $('.player-input').val();
    var playerInput2 = $('.player-input2').val();
    setPlayer(playerInput);
    setPlayer2(playerInput2);
  })

  // function that sets localStorage value
  // what is current player? 
  // why are we calling the function before 

  function setPlayer(name) {
    window.localStorage.setItem('currentPlayer', name);
    renderPlayer();
  }

  function setPlayer2(name2) {
    window.localStorage.setItem('currentPlayer2', name2);
    renderPlayer();
  }

  // function that renders to the DOM
  function renderPlayer() {
    var player1 = window.localStorage.getItem('currentPlayer');
    var player2 = window.localStorage.getItem('currentPlayer2');
    var playerTag1 = $('<p/>').text('Player one:'+ " " + player1); // need to put this in js "player one won"
    var playerTag2 = $('<p/>').text('Player Two:'+ " " + player2); // which p is this? 
    $('.player-info').empty(); 
    // empty whatever is in the input box
    $('.player-info').append(playerTag1); 
       $('.player-info2').empty();
    $('.player-info2').append(playerTag2);
  }


//   function getName(){ 
//     var getPlayer1 = window.localStorage.getItem('currentPlayer');
//     var getPlayer2 = window.localStorage.getItem('currentPlayer2');
//     var getName1 = $('<p/>').text(getPlayer1 + 'won!!!');
//     var getName2 = $('<p/>').text(getPlayer2 + 'won!!!');
//     $('?????').append(getName1); 
//     $('.player-info2').append(getName2);
// } 

// getName();  tring to make the name show when the user wins 

  renderPlayer();

  // start the game button 

 $('.start-game').on('click', function(){ 
    window.location.href='index.html';
 })

    // spot variables - all buttons id 
    var spot1 = $('#one');
    var spot2 = $('#two');
    var spot3 = $('#three');
    var spot4 = $('#four');
    var spot5 = $('#five');
    var spot6 = $('#six');
    var spot7 = $('#seven');
    var spot8 = $('#eight');
    var spot9 = $('#nine');
    var i = 0; // index that incriments each play(turn) 

    var player1 = 'X'
    var player2 = 'O'
    var currentPlayer = 0; // might need to understand this better
    // var play = true; 



    console.log($('.button'))

    // $('.button').on('click', function () {
    //     console.log($(this));
    //     $(this).text(player1);
    // })

    // $('.button').on('click', function () {
    //     console.log($(this));
    //     $(this).text(player2);
    // })

    // ($('.button').text() === ""); // not sure 



    $('.button').one('click', function () {
        console.log('click');
        // if its empty show syblol if its not empty user cant click on the box 

        // if ($(this).text() === "") { 
        console.log($(this).attr('id'))
        // first player is X second player is O 

        if (currentPlayer === 0) {
            console.log("player x")


            $(this).text(player1);
            // game logic 

            currentPlayer = 1

        } else if (currentPlayer === 1) {
            console.log("player O")
            $(this).text(player2);
            currentPlayer = 0
        }
        // calling checkwinner function after each click on the button 

        checkWinner();
        // checkLoss(); 
    })


    function checkWinner() {
        i = i + 1; //increamnet - need to understand this more
        console.log(i);
        // when moves are over 9 alert no one won 
        if (i >= 9) {
            swal({
                title: '<img src= https://media.giphy.com/media/1xVdDlcOXi4yY25LUd/giphy.gif style="width: 30%; height: 30%;margin-left: auto; margin-right: auto;">',
                text: 'No one won!',
                width: 600,
                padding: '3em',
                background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                backdrop: `
              rgba(0,0,123,0.4)
              url(https://media.giphy.com/media/l46ChqmOe7astP0Ck/giphy.gif)
              center left 
              
            `
            
            // https://sweetalert2.github.io/images/nyan-cat.gif
            })
        }
        // margin-top: 30px; height: auto; max-width: 80%; max-height: 80%;

        console.log($(spot1).text());

        if (($(spot1).text() === 'X'
            && $(spot2).text() === 'X'
            && $(spot3).text() === 'X') ||
            ($(spot4).text() === 'X'
                && $(spot5).text() === 'X'
                && $(spot6).text() === 'X') ||
            ($(spot7).text() === 'X'
                && $(spot8).text() === 'X'
                && $(spot9).text() === 'X') ||
            ($(spot1).text() === 'X'
                && $(spot4).text() === 'X'
                && $(spot7).text() === 'X') ||
            ($(spot2).text() === 'X'
                && $(spot5).text() === 'X'
                && $(spot8).text() === 'X') ||
            ($(spot3).text() === 'X'
                && $(spot6).text() === 'X'
                && $(spot9).text() === 'X') ||
            ($(spot1).text() === 'X'
                && $(spot5).text() === 'X'
                && $(spot9).text() === 'X') ||
            ($(spot3).text() === 'X'
                && $(spot5).text() === 'X'
                && $(spot7).text() === 'X'))
                swal({
                    title: ' <img src= https://media.giphy.com/media/1wpxGXCyIMd1xH5svQ/giphy.gif style="width: 30%; height: 30%;margin-left: auto; margin-right: auto;">',
                    // take the string 
                    text: 'Player one won!!!!',
                    width: 600,
                    padding: '3em',
                    background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                     url(https://media.giphy.com/media/3ohhwzIw3bISRhQWME/giphy.gif)
                   center 
                    
                    `
                })

                
                    //   url(https://media.giphy.com/media/26BRABnerqonwLHMc/giphy.gif)
                    //   center
                    
                    // backdrop:`
                    // url(https://media.giphy.com/media/26BRABnerqonwLHMc/giphy.gif)
                    // center
                    // `
           

        else if (($(spot1).text() === 'O'
            && $(spot2).text() === 'O'
            && $(spot3).text() === 'O') ||
            ($(spot4).text() === 'O'
                && $(spot5).text() === 'O'
                && $(spot6).text() === 'O') ||
            ($(spot7).text() === 'O'
                && $(spot8).text() === 'O'
                && $(spot9).text() === 'O') ||
            ($(spot1).text() === 'O'
                && $(spot4).text() === 'O'
                && $(spot7).text() === 'O') ||
            ($(spot2).text() === 'O'
                && $(spot5).text() === 'O'
                && $(spot8).text() === 'O') ||
            ($(spot3).text() === 'O'
                && $(spot6).text() === 'O'
                && $(spot9).text() === 'O') ||
            ($(spot1).text() === 'O'
                && $(spot5).text() === 'O'
                && $(spot9).text() === 'O') ||
            ($(spot3).text() === 'O'
                && $(spot5).text() === 'O'
                && $(spot7).text() === 'O')) {
                    swal({
                        title: ' <img src= https://media.giphy.com/media/1wpxGXCyIMd1xH5svQ/giphy.gif style="width: 30%; height: 30%;margin-left: auto; margin-right: auto;">',
                        text: 'Player two won!',
                        width: 600,
                        padding: '3em',
                        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                        backdrop: `
                          rgba(0,0,123,0.4)
                         url(https://media.giphy.com/media/3ohhwzIw3bISRhQWME/giphy.gif)
                       center 
                        
                        `
                    })



        }



    }//end of the function 

    // check Losers // make sure all of the boxes are full - check (loop) of indvsually Each. 
    // how do i make them know no one won and they should play again? 
    //   else { alert("no one won")} ????



    // function checkLoss() {
    //     $('.button').each (function(btn){ 
    //         if ($(.buttons).text() !== "") { 

    //            {alert('NO WINNER')}
    //     })

    // we wrote btn because the .text doesnt take a btn 

    // });


    // syntax for how to do a loop eith each check if each elm is something else 

    //  }


    // go back 

    // draw condition if there is a tie 



    // reset game 

    // $('#play-again').on('click', function () {
    //     i = 0; //reset the index
    //     $('.button').reset();
    // }) // whats the diffrence between .empty and .reset? . load? 3

    $('#play-again').on('click', function () {
        location.reload();
    })


    // $('#play-again').on('click' , function(){ 
    //     $('.button').reset();
    // }) // when i reset i have a problem - it stops working  

    $('#reset-board').on('click', function () {
        location.reload();
    }) // 100% rightttt working!! 



})


        // ckeck rows 
        // if ((spot1 == spot2) && (spot2 == spot3)){ 
        // console.log("Winner");
    // }





//     if ($(this).text() == '') {
    //         $(this).append("X"); } 
    //       else { $(this).append("O"); }
    //   });


        // btn.innerHTML = "O"
        // }else{


        // btn.innerHTML = "X"
        // }
        // }) 

        // });


        // $('.button').each(function(btn){
        // console.log( btn +  $('.button').text(player1));
        // })


// use variable to track information about your game, ti determine if the game is over












        // $('button')[0].on('click', function(){

        // }) this will work but its not DRY 

        // $('button')[1].on('click', function(){

        // })

        // user clicks on button 
        // X  sybmol shows in the box 
        // player 1 x player 2 = O turn to player 2 after player 1 plays 
        // who wins? 
        // reset board 


        // $('.button').on('click' , function { 


        //     .on('click', function{ 
        // if (turn='player1'){
        // spot.html() = "X";
        // } if (turn='player2'){ 
        //     spot.html() = "O";
        // }
        //     })




        // $('.button').on('click', function (event) {
        //     var squareSelected = $(this);



        // var player1 = "x";
        // var player2 = "o";
        // game variables
        // var turns = 0;
        // var symbol;
        // var rand;
        // var win = false;
        // var AIMove = null;



        // $("#reset-board").click(function () {
        //     $(".button").html(" ");
        // });


        //     if (squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
        //     alert('this has already been selected');
        // } else {
        //     if (player === 1) {

        //         squareSelected.addClass('ex');
        //     } else {
        //         squareSelected.addClass('oh')
        //     }


        //when clicked on "#reset-Board" 
        // reset board

        // $(".buttons div").removeClass('o x taken');
        // turns = 0;
        // win = false;



        /* Check if 2 spaces in a row are filled in and go in missing space. */

        // spot1, spot2, spot3

