console.log('myApp');

// you just signed up 
const appData = {
    counter: 0,
    questions: ['test question', 'another question'],


}

const handlers = {
    onbuttonclick: function(yesorno){
        if (yesorno === 'yes'){
            
        } else{

        }
        view.addQuestion();
    }
}

const view = {
    makeButton: function(yesorno) {
        const myButton = document.createElement('button');
        myButton.textContent = yesorno;
        myButton.className = 'btn';
        myButton.onclick = function(yesorno){
            handlers.onbuttonclick(yesorno);
        }
        return myButton;
    },
    addButton: function(yesorno, id){
        const target = document.getElementById(id);
        target.appendChild(this.makeButton(yesorno));
    },
    addQuestion: function(id){
        const target = document.getElementById(id);
        const question = document.createElement('p');
        question.innerText = appData.questions[appData.counter];
        view.counter++;
        target.appendChild(question);
    }
}

view.addQuestion('questionHere');
view.addButton('YES', 'buttonHere');
view.addButton('NO', 'buttonHere');

