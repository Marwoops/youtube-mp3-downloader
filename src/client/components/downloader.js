import React from 'react';

import Bar from './urlBar.js';
import Button from './button.js';
import * as store from '../store.js';

class Downloader extends React.Component {
    constructor(props) {
        super(props);

        this.state = { url: '', info : { } };

        this.handleChange   = this.handleChange.bind(this);
        this.handleDownload = this.handleDownload.bind(this);

    };

    handleChange(e) {
        this.setState({ url: e.target.value });                     // url = input

    };

    

    async handleDownload(e) {
        e.preventDefault();

        
        const res = await store.getInfo(this.state.url);            // check if URL is valid and get title + channel name
        this.setState({ info: res });                               

    };

    render() {
        if (this.state.info.type == 'title') {                      // if URL is valid
            return (
                <div>
                    <p>{this.state.info.title} by {this.state.info.author}</p>
                    <Button handleClick={() => store.download(this.state.url, this.state.info.title)} text="Download"/>
                    <Button handleClick={() => this.setState({ info: {} })} text="Cancel"/>
                </div>
            );
        } else if (this.state.info.type == 'error') {               // if request failed
            return (
                <div>
                    <p>An error occured: check your URL and try again.</p>
                    <Button handleClick={() => this.setState({ info: {} })} text="Ok"/>
                </div>
            );
        } else {                                                    // if no url was input
            return (
                <div>
                    <Bar handleSubmit={this.handleDownload} handleChange={this.handleChange}/>
                </div>
            );
        };
        
    };
};

export default Downloader;

/*
<button onClick={() => store.download(this.state.url, this.state.info.title)}>Download</button>
<button onClick={() => this.setState({ info: {} })}>Cancel</button>

<button onClick={() => this.setState({ info: {} })}>OK</button>
*/