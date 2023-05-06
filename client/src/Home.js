import React, {Component} from 'react';

export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            testResult: null
        };

        this.testServer = this.testServer.bind(this);
    }

    async testServer(){
        console.log('testServer()');
        await fetch('/api/testserver')
        // await fetch('http://localhost:3000/api/testserver')
        .then(res => res.json())
        .then(data => {
            console.log('data: ', data);
            this.setState({
                testResult: data.result
            });
        })
        .catch(err => console.log('error: ', err));
    }

    render(){
        return(
            <div>
                <button onClick={this.testServer}>test server!</button>
                <br/>
                {this.state.testResult != null && this.state.testResult}
            </div>
        );
    }
}
