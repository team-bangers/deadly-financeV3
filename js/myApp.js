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
    }
}
view.addButton('YES', 'buttonHere');