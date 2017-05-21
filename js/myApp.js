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
        myButton.context = yesorno;
        myButton.className = btn;
        return myButton;
    },
    addButton: function(yesorno){
        this.makeButton(yesorno);
    }
}