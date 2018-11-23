import React, {Component} from 'react';

class Form extends Component {      

    state = {
        content: ''
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onSubmit =(e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }



    render () {
        return (
            <form onSubmit={this.onSubmit} className="Form">
                <input onChange={this.onChange} type="text" value={this.state.content} name="addTodo" placeholder="add todo..."/>
            </form>
        )
        }
}

export default Form