class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
background("lightblue")
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    fill("brown")
    text("Result of the quiz",340,50)
    text("................................",320, 50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if(allContestants!==undefined){
      debugger;
      var display_Anwser=230;
      fill(blue);
      textSize(20)
      text("*Note:Contestant who anwsered correct anwsers are highlighted in green",130,230)
 }


    //write condition to check if contestantInfor is not undefined
    for(var plr in allContestants){
      debugger;
      var correctAns="2";
      if (correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red");

      display_Answer+=30;
      }
    }
  }


