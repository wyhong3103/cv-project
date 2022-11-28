import { Component } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import './style/style.css'

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            display : 0,
            info : {
                personal : {
                    fname : "",
                    lname : "",
                    email : "",
                    phone : "",
                    desc : ""
                },
                edu : [
                    {
                        school : "",
                        title : "",
                        fdate : "",
                        tdate : "",
                    }
                ],
                exp : [
                    {
                        company : "",
                        title : "",
                        fdate : "",
                        tdate : "",
                        desc : ""
                    }
                ]
            }
        };

        this.handleInfo = this.handleInfo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayPage = this.displayPage.bind(this);
    }

    // Setter function
    handleInfo(type, temp){
        const temp2 = this.state.info;
        if (type === 0){
            temp2.personal = temp;
        }else if (type === 1){
            temp2.edu = temp;
        }else{
            temp2.exp = temp;
        }

        this.setState({
            info : temp2
        });
    }

    handleSubmit(){
        this.setState({
            display : (this.state.display === 1 ? 0 : 1)
        })
    }

    displayPage(mode){
        if (mode === 0){
            return (
                <div className="display-container">
                    <Form updParent={this.handleInfo} info={this.state.info}></Form>;
                    <div className="btn">
                        <button className="main-btn" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="display-container">
                    <CV personal={this.state.info.personal} edu={this.state.info.edu} exp={this.state.info.exp}></CV>
                    <div className="btn">
                        <button className="main-btn" onClick={this.handleSubmit}>Back</button>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="main">
                <h1 className="main-title">CV Generator</h1>
                {this.displayPage(this.state.display)}
            </div>
        )
    }
}

export default App;
