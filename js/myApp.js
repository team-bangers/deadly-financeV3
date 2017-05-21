console.log('myApp');

// you just signed up 
const appData = {
    questions: ['test question'],


}

const handlers = {

}

const view = {
    makeButton: function(yesorno) {
        const myButton = document.createElement('button');
        myButton.textContent = yesorno;
        myButton.className = 'btn';
        return myButton;
    },
    addButton: function(yesorno, id){
        const target = document.getElementById(id);
        target.appendChild(this.makeButton(yesorno));
    },
    addQuestion: function(id){
        const target = document.getElementById(id);
        const question = document.createElement('p');
        question.innerText = appData.questions[0];
        target.appendChild(question);
    }
}

view.addQuestion('questionHere');
view.addButton('YES', 'buttonHere');
view.addButton('NO', 'buttonHere');

