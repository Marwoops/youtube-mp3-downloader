import React from 'react';
import styled from 'styled-components';

const UrlBar = styled.input`
border-radius: 3px;
`;


class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <UrlBar type="text" value={this.state.currentUrl} onChange={this.props.handleChange} placeholder="URL"/>
            </form>
        );
    };
};

export default Bar;