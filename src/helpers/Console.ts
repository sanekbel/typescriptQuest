const prompt = require('prompt-sync')();

export class Console {
    public  AskQuestion(question: string):string {
        return prompt(question);
    }
}
