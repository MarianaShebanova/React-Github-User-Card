import React from 'react';

class SearchForm extends React.Component {
    // Constructor with state
    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({ newItem: e.target.value });
    };

    // class property to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleQuery(this.state.newItem);
        this.setState({
            newItem: ''
        });
    };

    // lifecycle method - in charge of _Rendering_ JSX to the DOM
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
                <input
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                    type="text"
                    name="item"
                />
                <button>Go</button>
            </form>
        );
    }
}

export default SearchForm;

