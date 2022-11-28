import { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            personal : this.props.info.personal,
            edu : this.props.info.edu,
            exp : this.props.info.exp
        }
        this.handlePersonal = this.handlePersonal.bind(this);
        this.handleEdu = this.handleEdu.bind(this);
        this.handleExp = this.handleExp.bind(this);
    }

    handlePersonal(temp){
        this.setState({
            personal : temp
        })
        this.props.updParent(0, temp);
    }

    handleEdu(temp){
        this.setState({
            edu : temp
        })
        this.props.updParent(1, temp);
    }

    handleExp(temp){
        this.setState({
            exp : temp
        })
        this.props.updParent(2, temp);
    }

    render(){
        return(
            <div className="form">
              <Personal updParent={this.handlePersonal} info={this.state.personal}></Personal>  
              <Education updParent={this.handleEdu} info={this.state.edu}></Education>
              <Experience updParent={this.handleExp} info={this.state.exp}></Experience>
            </div>
        )
    };
}

export default Form;