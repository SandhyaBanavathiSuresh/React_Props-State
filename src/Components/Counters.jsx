import React, { Component } from 'react'
import Counter from './counter';


class Counters extends Component {

    //removing state and other things that go as a prop and adding in App.js and we need to 'uplift' the state
    //for it to be used in navbar to record the total number of increments
    // state = { 
    //     counters:[
    //         {id:1, value:4},
    //         {id:2, value:0},
    //         {id:3, value:0},
    //         {id:4, value:0},
    //     ]
    //  };

    //  handleClick = c => {
    //    // console.log(c);
    //    // take the existing counters
    //     const counters = [...this.state.counters];
    //     // get the index value of the button clicked
    //     const index = counters.indexOf(c);
    //     // increment corresponding value
    //     counters[index] = {...c};
    //     counters[index].value++;
    //     // update the state using setState
    //     this.setState({counters: counters})
    //  }

    //  handleReset = () => {
    //     const counter = this.state.counters.map(c => {
    //         c.value =0;
    //         return c;
    //     });
    //     this.setState({counters: counter});
    //  }

    //  handleDelete = (cId) => {
    //     console.log("event called");
    //     //we do not alter the existing counters array, instead we create a new array with the
    //     //filtered value and update the existing counters array using set state
    //     const counters = this.state.counters.filter(c => c.id !== cId);
    //     this.setState({counters: counters})
    //  }

    render() { 
        return (
            <div>
                <button className='btn btn-primary btn-sm m-2' onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map(c=>(
                    <Counter key = {c.id} 
                    counter={c}
                    value = {c.value} 
                    ondelete = {this.props.onDelete} 
                    onclick = {this.props.onClick}
                    id = {c.id}/>
                ))}
            </div>
        );
    }
}
 
export default Counters;
