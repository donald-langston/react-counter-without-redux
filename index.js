class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    handleClick = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    render() {
        return <div>
            <span>{this.state.value}</span>
            <button onClick={this.handleClick}>Click</button>
        </div>
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))