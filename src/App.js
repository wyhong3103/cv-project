import { Component } from "react";
import Form from "./components/Form";
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

    render(){
        return(
            <div className="main">
                <h1 className="main-title">CV Generator</h1>
                <Form updParent={this.handleInfo} info={this.state.info}></Form>
            </div>
        )
    }
}

export default App;
