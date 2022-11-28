import { Component } from "react";

class Personal extends Component{
    constructor(props){
        super(props);
        this.state = {
            info : this.props.info
        }
        this.handleFName = this.handleFName.bind(this);
        this.handleLName = this.handleLName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
    }


    handleFName(e){
        const temp = this.state.info;
        temp.fname = e.target.value;
        this.setState({
            info : temp
        })
        this.props.updParent(temp);
    }

    handleLName(e){
        const temp = this.state.info;
        temp.lname = e.target.value;
        this.setState({
            info : temp
        })
        this.props.updParent(temp);
    }

    handleEmail(e){
        const temp = this.state.info;
        temp.email = e.target.value;
        this.setState({
            info : temp
        })
        this.props.updParent(temp);
    }

    handlePhone(e){
        const temp = this.state.info;
        temp.phone = e.target.value;
        this.setState({
            info : temp
        })
        this.props.updParent(temp);
    }

    handleDesc(e){
        const temp = this.state.info;
        temp.desc = e.target.value;
        this.setState({
            info : temp
        })
        this.props.updParent(temp);
    }

    render(){
        return(
            <div className="personal section">
                <h2 className="section-title">
                    Personal Details
                </h2>
                <div className="section-child">
                    <div className="hori-container">
                        <label>
                            First Name
                            <input value={this.state.info.fname} onChange={this.handleFName}/>
                        </label>
                        <label>
                            Last Name
                            <input value={this.state.info.lname} onChange={this.handleLName}/>
                        </label>
                    </div>
                    <label>
                        Email 
                        <input value={this.state.info.email} onChange={this.handleEmail}/>
                    </label>
                    <label>
                        Phone
                        <input value={this.state.info.phone} onChange={this.handlePhone}/>
                    </label>
                    <label>
                        Description
                        <textarea value={this.state.info.desc} onChange={this.handleDesc}></textarea>
                    </label>
                </div>
            </div>
        )
    }
}

export default Personal;