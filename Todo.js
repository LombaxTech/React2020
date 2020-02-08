class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfTasks: 0,
            tasks: [],
            input: ""
        };
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                {/* <h2>There {this.state.numberOfTasks === 1 ? "is" : "are"} currently {this.state.numberOfTasks} Task{this.state.numberOfTasks === 1 ? "" : "s"}</h2> */}
                <h2>There {this.state.tasks.length === 1 ? "is" : "are"} {this.state.tasks.length} {this.state.tasks.length === 1 ? "task" : "tasks"}</h2>
                <ul>
                    {this.state.tasks.map((task, i) =>
                        <li key={i}>
                            {task}
                            <button data-index={i} onClick={this.deleteTask}>Delete</button>
                        </li>
                    )}
                </ul>
                <input onKeyPress={this.handleKeyPress} onChange={this.updateInput} value={this.state.input} />
                <button onClick={this.addTask}>Add Task</button>
            </div>
        );
    }

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.addTask();
        }
    }

    updateInput = e => {
        this.setState({
            input: e.target.value
        });
    }

    addTask = () => {
        if (this.state.input !== '') {
            this.setState(state => ({
                tasks: [...state.tasks, state.input],
                input: '',
                numberOfTasks: state.numberOfTasks + 1
            }));
        }
    }

    deleteTask = () => {

    }
}

ReactDOM.render(<App />, document.getElementById('app'));
