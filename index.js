var readlinesync= require('readline-sync');
const chalk = require('chalk');
var name= readlinesync.question(chalk.bold('Please enter your name: '));
var userScore =0; 

var highestScorer = [{name: 'Naren', score: '1'}];

function log(data){
  console.log(data)
}

function highestScorerPrint(highestScorer){
  log(chalk.bold.underline('\nHighest Scorers:'));
  for (i= 0; i< highestScorer.length; i++){
   var highestScorerVar = highestScorer[i]
   log(chalk.bold('Name: ')+ highestScorerVar.name+ chalk.bold(' & Score: ')+ highestScorerVar.score); 
  }
}

log(chalk.bold('Hey '+ name+ '! Welcome to the game: \'DO YOU KNOW Mehul?\''));
log(chalk.bold.underline('Note:')+' The rules are quite simple, answer the following questions about Mehul rightly to score the highest.');


var queAnsPair1 = {
question: 'Who\'s Mehul\'s favourite poet/ storyteller?',
answer: 'Helly Shah',
clue: 'Check for \'Iron man\'s daughter Poem\' on YouTube. (Also, subscribe her channel while at it.)'
}
var queAnsPair7 = {
question: 'Who\'s Mehul\'s favourite heroin?',
answer: 'Shraddha kapoor',
clue: 'Daughter of Shakthi Kapoor is?'
}
var queAnsPair8 = {
question: 'What\'s Mehul\'s favourite singer?',
answer: 'Shreya Ghoshal',
clue: 'Singer shares same Birth date as that of Mehul'
}
var queAnsPair4 = {
question: 'What is the abbrevation of college Mehul did Engineering from?',
answer: 'MCET',
clue: 'Name of the college is Methodist College of Engineering and Technlogy.'
}
var queAnsPair5 = {
question: 'Mehul was born in which city?',
answer: 'Hyderabad',
clue: 'City was also known as Bhagyanagar.'
}
var queAnsPair6 = {
question: 'Was Mehul ever tested Positive for Covid: Yes or No?',
answer: 'Yes',
clue: ''
}
var queAnsPair2 = {
question: 'What does Mehul like Poetry, Storytelling or Both?',
answer: 'Both',
clue: 'The correct answer is \'Both\''
}
var queAnsPair9 = {
question: 'Does Mehul holds any kind- off World record: Yes or No?',
answer: 'Yes',
clue: 'Check for the book Orchard by Megha Shreya on Amazon.'
}
var queAnsPair3 = {
question: 'Has Mehul ever won any award or medal for Martial arts: Yes or No?',
answer: 'Yes',
clue: 'Check Mehul\'s Facebook photos.'
}
var queAnsPair10 = {
question: 'Growing up, Who was Mehul\'s favourite Super- hero?',
answer: 'Spider-man',
clue: 'The superhero is Amazing!'
}

var queAnsPair = [queAnsPair1, queAnsPair2, queAnsPair3, queAnsPair4, queAnsPair5, queAnsPair6, queAnsPair7, queAnsPair8, queAnsPair9, queAnsPair10] 

function playTheGame(question, answer, clue, i_val){
  
  var userAns1= readlinesync.question(chalk.bold(question)+' ');
  
  if (userAns1.toUpperCase() === answer.toUpperCase()){
    userScore+=1;
    log('Correct Answer! You gain a point. ');
  }
  else{
    log(chalk.bold('Following is the Clue, Try again: '));
    var userAns2= readlinesync.question(chalk.bold(clue)+chalk.bold('\nPlease answer the question again: '));
      if (userAns2=== answer){
        userScore+=0.5;
        log('Correct answer! You gain half point.');
      }
      else if(i_val===9){
            log('Wrong answer! The game ends here.');
          }
          else{
            log('Wrong answer! The next question is:');
          }
      
  }
  return userScore;
}

function enterGameMethod( highestScorer){
  var enterGame= readlinesync.question('\nEnter \''+chalk.bold(1)+ '\' to '+ chalk.bold('play the game ')+ 'else enter \''+ chalk.bold(0)+ '\' '+ chalk.bold('to Exit: '));
  var scoreUpdate = 0;
  if(enterGame==='1'){
    log(chalk.bold('Entered the game. Here\'re the question:' ));
    qp_len= queAnsPair.length
    log(qp_len)
    for (var i= 0; i < qp_len; i++){
      log(chalk.bold.yellow('\nQuesiton '+(i+1)+':' ))
      indQueAnsPair=  queAnsPair[i];
      scoreUpdate= playTheGame(indQueAnsPair.question, indQueAnsPair.answer, indQueAnsPair.clue, i)      
    }
    var hs_len= highestScorer.length
    var hs_great =0
    for (var j= 0; j<hs_len; j++){
      if(highestScorer[j].score < scoreUpdate ){
        log(chalk.bold('\nCongratulations, you have completed the game successfully and scored  one of the highest. Your score is: '+ scoreUpdate))
        hs_great=1;
        break;
      }
    }
      
    if (hs_great===0){
      log(chalk.bold('\nCongratulations, you have completed the game successfully. Your score is: '+ scoreUpdate))
    }
    log(chalk.bold.magentaBright('Send the screenshot to Mehul, in order to update the highest scorer.'));
  }
  else if(enterGame==='0') {
    log(chalk.bold('Exiting the game.'));
    process.exit(1);
  }
  else{
    log(chalk.bold('\nPlease choose between \'1\' or \'0\' '));
    enterGameMethod(highestScorer);
  }
}
highestScorerPrint(highestScorer);
enterGameMethod(highestScorer);