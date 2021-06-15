var readLineSync= require('readline-sync');
const chalk = require('chalk')

var highestScorer = [{name: 'Naren', score: '2'}];

function highestScorerPrint(highestScorer){
  log(chalk.bold.underline.yellow('\nHighest Scorers:'));
  for (i= 0; i< highestScorer.length; i++){
   var highestScorerVar = highestScorer[i]
   log(chalk.bold('Name: ')+ highestScorerVar.name+ chalk.bold(' & Score: ')+ highestScorerVar.score); 
  }
}


function log(data){
  console.log(data)
}

var userName= readLineSync.question(chalk.bold("Please enter the your name: "));
log(chalk.bold('\nHey '+userName + '! You have entered the game \'Memes- Show End Game!\''))
log('\n'+chalk.bold.underline('Note')+': The rules are simple,answer trivia questions on the top memes and dialogues from Shows and score the highest!')

quesAnsPair1= {
  question: 'Tum to badhe _______ driver ho bhai!',
  answer: 'heavy',
  clue: 'Opposite of the word light.'
}
quesAnsPair2={
  question: 'Yeh bik gayi hai _________!',
  answer: 'Gormint',
  clue: 'Govrerment',
}
quesAnsPair3={
  question: 'Nikal l***e! Pehli ______ me nikal!',
  answer: 'Fursat',
  clue: 'Hindustani Bhau'
}

quesAnsPair4={
  question: 'Toba Toba Toba saara ______ kharabh kardiya.',
  answer: 'mood',
  clue: 'Harmonium chacha'
}

quesAnsPair5={
  question: '\'Ek dum se wakth badal diya, balat badal diya, jazbaat badal diye\' was meme orignated from which country?',
  answer: 'Pakistan',
  clue: 'Check on YouTube'
}


quesAnsPair6={
  question: 'Sabh mar jayeinge, sirf ________ bachega.',
  answer: 'Trivedi',
  clue: 'Sacred Games'
}

quesAnsPair7={
  question: '\'Chacha, O Bho**iwale Chacha. Thoda rest kar lijiye, warna rest in peace hojayenge\' is from the show?',
  answer: 'Mirzapur',
  clue: 'Munna Bhaiya'
}

quesAnsPair8={
  question: 'The iconic dialogue \'That\'s my spot\' was said by which character in the show TBBT.',
  answer: 'Sheldon Cooper',
  clue: 'SC from The Big Bang Theory'
}

quesAnsPair9={
  question: 'The iconic role of ACP Pradyuman on the show CID was played by?',
  answer: 'Shivaji Satam',
  clue: 'CID'
}

quesAnsPair10={
  question: 'Who is Mr. Bean most close to?',
  answer: 'Teddy',
  clue: 'Brown Bear'
}

quesAnsPair= [quesAnsPair1, quesAnsPair8, quesAnsPair3, quesAnsPair6, quesAnsPair5, quesAnsPair9, quesAnsPair2, quesAnsPair7, quesAnsPair4, quesAnsPair10]

function memeEndGame(qAndAPair, highestScorer){
  var playGame = readLineSync.question('\nEnter '+chalk.bold(1)+': To enter the game, enter '+ chalk.bold(0)+': to Exit the game: ')
  if(playGame==='1'){
    var user_score = 0
    var qap_len= qAndAPair.length

    for(var i=0; i< qap_len; i++){
      log(chalk.bold.yellow('\nQuestion '+ (i+1)+':' ))
      var userAnswer = readLineSync.question(qAndAPair[i].question+chalk.bold.yellow('\nAnswer: '))
      if (userAnswer.toUpperCase()=== qAndAPair[i].answer.toUpperCase()){
        log('Congrations you have scored a point!')
        user_score += 1
      }
      else{
        log(chalk.bold.yellow('Your clue is: ')+  qAndAPair[i].clue)
        var userAnswer = readLineSync.question(chalk.bold.yellow('Please enter the answer again: '))
        if (userAnswer.toUpperCase()=== qAndAPair[i].answer.toUpperCase()){
          log('Congrations you have scored half point!')
          user_score += 0.5
        } 
        else {
          if (i+1=== qap_len){
            log('Wrong answer! The game ended.')
          }
          else{
            log('Wrong answer! The next question is:')
            continue;
          }
        }
      
      }
    }
      var hs_len= highestScorer.length
      var hs_great =0
      for (var j= 0; j<hs_len; j++){
        if(highestScorer[j].score <= user_score){
          log(chalk.bold.yellow('\nCongratulations, you have completed the game successfully and scored one of the highest. Your score is: '+ user_score))
          hs_great=1;
          break;
        }
      }
        
      if (hs_great!==1){
        log(chalk.bold.yellow('\nCongratulations, you have completed the game successfully. Your score is: '+ user_score))
      }
    log(chalk.bold.magentaBright('Send the screenshot to Mehul, in order to update the highest scorer.'));
  }
  else if(playGame==='0'){
    log(chalk.bold('Exiting the game!'))
    process.exit(1)
  }
  else{
    log('Please select between '+ chalk.bold (1)+' or '+ chalk.bold(0)+': ')
    memeEndGame(quesAnsPair, highestScorer)
  }

}
highestScorerPrint(highestScorer)
memeEndGame(quesAnsPair, highestScorer)