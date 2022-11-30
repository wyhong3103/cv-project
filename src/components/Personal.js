import { Component } from "react";

class Personal extends Component{
    constructor(props){
        super(props);
        this.handleFName = this.handleFName.bind(this);
        this.handleLName = this.handleLName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
    }

    handleFName(e){
        this.props.handleChange(0, "fname", e.target.value);
    }

    handleLName(e){
        this.props.handleChange(0, "lname", e.target.value);
    }

    handleEmail(e){
        this.props.handleChange(0, "email", e.target.value);
    }

    handlePhone(e){
        this.props.handleChange(0, "phone", e.target.value);
    }

    handleDesc(e){
        this.props.handleChange(0, "desc", e.target.value);
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
                            <input value={this.props.info.fname} onChange={this.handleFName}/>
                        </label>
                        <label>
                            Last Name
                            <input value={this.props.info.lname} onChange={this.handleLName}/>
                        </label>
                    </div>
                    <label>
                        Email 
                        <input value={this.props.info.email} onChange={this.handleEmail}/>
                    </label>
                    <label>
                        Phone
                        <input value={this.props.info.phone} onChange={this.handlePhone}/>
                    </label>
                    <label>
                        Description
                        <textarea value={this.props.info.desc} onChange={this.handleDesc}></textarea>
                    </label>
                </div>
            </div>
        )
    }
}

export default Personal;