import { Console } from "./helpers/Console"
import { FirstLocation } from "./locations/firstLocation"
import { ILocation } from "./locations/ILocation";
import { SecondLocation } from "./locations/secondLocation";
import { ThirdLocation } from "./locations/thirdLocation";

let locations: ILocation[] = [new FirstLocation, new SecondLocation, new ThirdLocation]
let currentStage = 0;
let wrongAnswers: number = 0;
let currentAnswer: string;
export function Quest() {
    let currentLocation = locations[currentStage]
    currentAnswer = new Console().AskQuestion(currentLocation.question)
    if (currentAnswer != currentLocation.answer) {
        console.log("Wrong answer");
        wrongAnswers++;
        console.log(`You have ${wrongAnswers} wrong answers`)
        Quest();
    }
    else {
        if (currentStage < locations.length - 1) {
            console.log("You are right! The next question is:")
            currentStage++;
            Quest();
        }
        else {
            console.log(`Finish! You have ${wrongAnswers} wrong answers`)
        }
    }
}