import React from 'react';
import styled from 'styled-components';

const ActionButton = styled.button`
    background-color: black;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    border: none;
`;

class Button extends React.Component {
    constructor(props) {
        super(props);
  
    };

    render() {
        return (
            <ActionButton onClick={this.props.handleClick}>{this.props.text}</ActionButton>
        );
    };

};

export default Button;