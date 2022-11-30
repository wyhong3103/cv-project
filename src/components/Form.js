import { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

class Form extends Component{
    constructor(props){
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange(type, key, value, index = -1){
        this.props.handleChange(type, key, value, index);
    }

    handleAdd(type){
        this.props.handleAdd(type);
    }

    handleRemove(type, index){
        this.props.handleRemove(type, index);
    }


    render(){
        return(
            <div className="form">
              <Personal handleChange={this.handleChange} info={this.props.info.personal}></Personal>  
              <Education handleChange={this.handleChange} handleAdd={this.handleAdd} handleRemove={this.handleRemove} info={this.props.info.edu}></Education>
              <Experience handleChange={this.handleChange} handleAdd={this.handleAdd} handleRemove={this.handleRemove} info={this.props.info.exp}></Experience>
            </div>
        )
    };
}

export default Form;