class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            num1: Math.ceil(Math.random() * 100),
            num2: Math.ceil(Math.random() * 100),
            response: "",
            incorrect: false
        };
    }

    render() {
        if (this.state.score === 5) {
            return this.renderWin();
        } else {
            return this.renderProblem();
        }
    }

    renderWin() {
        return (
            <h1>You have reached 5 points!</h1>
        )
    }

    renderProblem() {
        return (
            <div>
                <h1 className={this.state.incorrect ? "incorrect" : ""}>{this.state.num1} + {this.state.num2}</h1>
                <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response} />
                <h1>Score: {this.state.score}</h1>
            </div>
        )
    }

    turnRed = () => {
        return ("incorrect");
    }

    updateResponse = event => {
        this.setState({
            response: event.target.value
        });
    }

    inputKeyPress = event => {
        if (event.key === "Enter") {
            const userAnswer = parseInt(this.state.response);
            if (userAnswer === (this.state.num1 + this.state.num2)) {
                this.setState(state => ({
                    score: state.score + 1,
                    num1: Math.ceil(Math.random() * 100),
                    num2: Math.ceil(Math.random() * 100),
                    response: '',
                    incorrect: false
                }));
            } else {
                this.setState(state => ({
                    response: '',
                    incorrect: true
                }));
            }
        }
    }

    submitAnswer = () => {
        if ((this.state.num1 + this.state.nume2) == document.querySelector('input').value) {
            alert('correct');
        } else {
            alert('incorrect');
        }
    }

    reset = () => {
        document.querySelector('input').value = '';
        this.setState(state => ({
            score: 0
        }));
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));