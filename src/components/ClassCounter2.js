import React, { Component } from 'react';

class ClassCounter2 extends Component {

    state = {
        count: 0,
        name: ''
    };
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count ) {
            console.log('Update document title');
            document.title = `Clicked ${this.state.count} times`;
        }
    }
    render() {
        return (
            <>
                <input type="text" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </>
        );
    }
}

export default ClassCounter2;
