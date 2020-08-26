"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quest = void 0;
var Console_1 = require("../helpers/Console");
var firstLocation_1 = require("../locations/firstLocation");
var secondLocation_1 = require("../locations/secondLocation");
var thirdLocation_1 = require("../locations/thirdLocation");
var locations = [new firstLocation_1.FirstLocation, new secondLocation_1.SecondLocation, new thirdLocation_1.ThirdLocation];
var currentStage = 0;
var wrongAnswers = 0;
var currentAnswer;
function Quest() {
    var currentLocation = locations[currentStage];
    currentAnswer = new Console_1.Console().AskQuestion(currentLocation.question);
    if (currentAnswer != currentLocation.answer) {
        console.log("Wrong answer");
        wrongAnswers++;
        console.log("You have " + wrongAnswers + " wrong answers");
        Quest();
    }
    else {
        if (currentStage < locations.length - 1) {
            console.log("You are right! The next question is:");
            currentStage++;
            Quest();
        }
        else {
            console.log("Finish! You have " + wrongAnswers + " wrong answers");
        }
    }
}
exports.Quest = Quest;
//# sourceMappingURL=quest.js.map