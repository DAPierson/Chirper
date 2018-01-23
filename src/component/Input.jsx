import React, { Component } from 'react';


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = { msg: '' }

       
    };
        handleInputChange=(value) => {
            this.setState({ msg: value });
        };

        handleClick(event){

         this.props.onClick(this.state.msg)
        }
        
    
    



    render() {
        return (

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Your Chirp!</span>
                </div>
                <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                     value={this.state.chirp}
                    onChange={(event) => { this.handleInputChange(event.target.value) }} />

                <button type="button" className="btn btn-primary btn-lg btn-block"
                onClick={(event) => {this.handleClick(event)}}> Chirp It! </button>
            </div>

        )

    }
    }

export default Input
