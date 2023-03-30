import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className='badge badge-pill badge-secondary'>
                        {this.props.totalCounters}
                    </span>
                    </a>
            </nav>
        );
    }
}
 
export default Navbar;

//if we have to make it stateless functional component as this does not have any state and everything happens with props
// we can create a function component like this
//in functional component, we have to pass props as parameter 
//in class component we can use props as this.props

// const Navbar = (props) => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="#">
//                 Navbar
//                 <span className='badge badge-pill badge-secondary'>
//                     {props.totalCounters}
//                 </span>
//                 </a>
//         </nav>
//     );
// }
 
// export default Navbar;