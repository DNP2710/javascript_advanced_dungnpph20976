const poll = {
    question: 'What is your favourite programing language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answer: new Array(4).fill(0),
    registerNewAnser() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Writte option number)`
                )
        );
        console.log(answer);
        
        typeof answer === 'number' &&
        this.answer[answer]++;

        this.displayResults();
        this.displayResults('string');        
    },

    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answer);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answer.join(', ')}`);
        }
    }
};
// poll.registerNewAnser();

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnser.bind(poll));

poll.displayResults.call({answer: [5,2,3]}, 'string');
poll.displayResults.call({answer: [1, 5, 3, 9, 6, 1]}, 'string');
poll.displayResults.call({answer: [1, 5, 3, 9, 6, 1]});

