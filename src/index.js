'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.147231fd-8862-4f2a-b55c-840993cb80a5";

var SKILL_NAME = "Mean Girl Quotes";
var HELP_MESSAGE = "You can say tell me a mean girls quote, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye";


var data = [

  "Wait you're from Africa? But you're, like, really pretty........Thank you...So you agree?.......What?.......You think you're really pretty?...",
  "I can't go to taco bell I'm on an all-carb diet God, Karen, you are so stupid",
  "YOU CANT SIT WITH US",
  "That is so FETCH",
  "Gretchen, stop trying to make fetch happen. It's not going to happen",
  "I'm kind of psychic. I have a fifth sense...What do you mean?...It's like I have ESPN or something. My breasts can tell when its gonna rain.",
  "Wow Damian, you've truly out gayed yourself.",
  "boo, you archaic wench",
  "Somebody wrote in the book that I'm lying about being a virgin because I use X X L tampons, but It's not my fault I have a heavy flow and a wide-set vagina",
  "Somebody should just stab Caesar.",
  "On wednesday, we wear pink",
  "Gretchen, I'm sorry I laughed at you that time you got diarrhea at Barnes & Noble. And I'm sorry for telling everyone about it. And I'm sorry for repeating it now.",
  "If you're from Africa, Why are you white?...Oh my God, Karen You can't just ask people why they're white",
  "Hell no. I did not leave the South Side for this",
  "I'm not a regular mom, I'm a cool mom",
  "And none for Gretchen Weiners. Bye.",
  "I'm sorry that people are so jealous of me... but I can't help it that I'm so popular.",
  "Get in loser, we're going shopping.",
  "What are you?...I'm a mouse DUH",
  "Your mom's chest hair",
  "She doesn't even go here",
  "I know I may seem like a female dog, but that's only because I'm acting like a female dog.",
  "grool. I meant to say great but then I started to say cool.",
  "Don't have sex. Don't have sex in the missionary position, don't have sex standing up... just don't do it, promise? Take some rubbers.",
  "Glenn Coco? FOUR for you, Glenn Coco You GO, Glenn Coco.",
  "That's why her hair is so big, it's full of secrets"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
      this.emit(':ask', 'Welcome to Mean Girls Quote. For a quote, you can say give me a quote, tell me a quote, or give me a line.');
    },
    'NewQuoteIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = randomFact + '... Would you like another quote';
        this.emit(':ask', speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    Unhandled() {
      this.emit(':tell', 'Im sorry, I dont have that ability');
    }
};
