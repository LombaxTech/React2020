class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [

            ],
            frontInput: "",
            backInput: ""
        }
    }

    render() {
        return (
            <div>
                <h1>Cards</h1>
                <input onChange={this.updateFrontInput} value={this.state.frontInput} placeholder="front" />
                <input onChange={this.updateBackInput} value={this.state.backInput} placeholder="back" />
                <button onClick={this.addCard}>Add Card</button>

                <h1>Value of front input is {this.state.frontInput}</h1>
            </div>
        )
    }

    updateFrontInput = e => {
        this.setState({
            frontInput: e.target.value
        });
    }

    addCard = () => {
        alert('card has been added');
    }
}

ReactDOM.render(<App />, document.querySelector('#card-app'));