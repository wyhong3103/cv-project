import { Component } from "react";

class CV extends Component{
    render(){
        const {
            fname, lname,email, phone, desc
        } = this.props.personal;
        return(
            <div id="CV" className="CV-container">
                <div className="cv-personal">
                    <h2 className="cv-p-name">{fname} {lname}</h2>
                    <p className="cv-p-details">{email} | {phone}</p>
                    <p className="cv-p-desc">{desc}</p>
                </div>
                <div className="cv-exp">
                    <h3 className="cv-title">Experience</h3>
                    {
                        this.props.exp.map((item, index) => {
                            return(
                                <div key={index} className="cv-j-container">
                                    <h4 className="cv-j-company">@ {item.company}</h4>
                                    <p className="cv-j-title">{item.title}</p>
                                    <p className="cv-j-date">{item.fdate} - {item.tdate}</p>
                                    <p className="cv-j-desc" id="cv-j-desc">{item.desc}</p>
                                </div> 
                            )
                        })
                    }
                </div>
                <div className="cv-edu">
                    <h3 className="cv-title">Education</h3>
                    {
                        this.props.edu.map((item, index) => {
                            return(
                                <div key={index} className="cv-e-container">
                                    <h4 className="cv-e-school">@ {item.school}</h4>
                                    <p className="cv-e-title">{item.title}</p>
                                    <p className="cv-e-date">{item.fdate} - {item.tdate}</p>
                                </div> 
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default CV;