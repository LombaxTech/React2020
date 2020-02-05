class Hello extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name || 'unknown person'}, you are {this.props.ages || 'an unknown age'}</h1>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.clickHandler}>Click Me</button>
        );
    }

    clickHandler = () => {
        alert('hi');
    }
}

class DoubleHello extends React.Component {
    render() {
        return (
            <div>
                {/* <Hello name="Rakib" age="20" />
                <Hello /> */}
                <Button />
            </div>
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCountSecure}>Increment</button>
                <button onClick={this.decrementCountSecure}>Decrement</button>
            </div>
        )
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    incrementCountSecure = () => {
        // this.setState(oldState => ({
        //     count: oldState.count + 1
        // }));
        this.setState(
            function (oldState) {
                return ({
                    count: oldState.count + 1
                })
            }
        );
    }

    decrementCountSecure = () => {
        this.setState(state => ({
            count: state.count - 1
        }));
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));