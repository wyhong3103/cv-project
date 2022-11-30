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

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayPage = this.displayPage.bind(this);
    }

    //Only adding!
    handleChange(type, key, value, index = -1){
        //0 = personal, 1 = education, 2 = experience
        const temp = this.state.info;
        if (type === 0){
            temp.personal[key] = value;
        }else if (type === 1){
            temp.edu[index][key] = value;
        }else{
            temp.exp[index][key] = value;
        }
        this.setState({
            info : temp
        })
    }

    handleAdd(type){
        const temp = this.state.info;
        if (type===1){
            temp.edu.push(
                {
                    school : "",
                    title : "",
                    fdate : "",
                    tdate : "",
                }
            )
        }else{
            temp.exp.push(
                {
                    company : "",
                    title : "",
                    fdate : "",
                    tdate : "",
                    desc : ""
                }
            )
        }
        this.setState({
            info : temp
        })
    }

    handleRemove(type, index){
        const temp = this.state.info;
        const ori = (type === 1 ? temp.edu : temp.exp);
        
        const newArr = [];
        for(let i = 0; i < ori.length; i++){
            if (i !== index){
                newArr.push(ori[i]);
            }
        }

        if (type === 1){
            temp.edu = newArr;
        }else{
            temp.exp = newArr;
        }

        this.setState({
            info : temp
        })
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
                    <Form handleChange={this.handleChange} handleRemove={this.handleRemove} handleAdd={this.handleAdd} info={this.state.info}></Form>;
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
