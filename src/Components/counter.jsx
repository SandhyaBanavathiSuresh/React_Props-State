import React, { Component } from 'react';

class Counter extends Component {
        // to initialise things we need to render in the page we use state 
        //its going to affect single truth concept hence commenting
    // state = {
    //     count: this.props.value
    // };

    // styles = {
    //     fontSize: 10,
    //     fontWeight: "bold"
    // }

    // constructor(){
    //     super();
    // }

    // as there is no state we cannot handle click here hence commenting
    // handleClick = () => {
    //     //to update count value with each click we need to set the state value
    //     this.setState({count: this.state.count + 1})
    // }

    render() {
        // console.log(this.props);
        // to dynamically alter the className depending on the count value
        let classes = "badge m-2 badge-";
        //no state hence rewritting it with props
        // classes += (this.state.count === 0) ? 'warning' : 'primary';
        classes += (this.props.value === 0) ? 'warning' : 'primary';

        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm' onClick={()=>this.props.onclick(this.props.counter)}>Add</button>
                {/* to delete we call and event handler to Counters component and handle the on click function there and return it as props */}
                {/* as we have to delete only one based on id we need to pass it as a paramter and hence we use arrow function */}
                <button className='btn btn-danger btn-sm m-2' onClick={()=>this.props.ondelete(this.props.id)}>Delete</button>
            </div>
        );
    }

    formatCount = () => {
        return (this.props.value === 0 ? 'Zero' : this.props.value);
    }
}
 
export default Counter;