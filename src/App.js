import userEvent from '@testing-library/user-event';
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const App = () => {
    const profiles = [
        { name: "Taro", age: 10 },
        { name: "Hanako", age: 5 },
        { name: "NoName" , age: 3 }
    ]
    return(
        <div>
            {
                profiles.map((profiles, index) => {
                    return <User name={profiles.name} age={profiles.age} key={index} />

                })
            }
        </div>

    ) 
}

const User = (props) => {
    return <div>Hi, Iam {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default App;
