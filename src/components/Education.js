import { Component } from "react";
import deleteSvg from '../assets/delete.svg'
import addSvg from '../assets/add.svg'

class Education extends Component{
    constructor(props){
        super(props);
        this.state = {
            info : this.props.info
        }
        this.handleSchool = this.handleSchool.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleFDate = this.handleFDate.bind(this);
        this.handleTDate = this.handleTDate.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSchool(index, e){
        const temp = this.state.info;
        temp[index].school = e.target.value;
        this.setState({
            info : temp
        })
        this.props.updParent(temp);
    }

    handleTitle(index, e){
        const temp = this.state.info;
        temp[index].title = e.target.value;
        this.setState({
            info : temp
        })
        this.props.updParent(temp);
    }

    handleFDate(index, e){
        const temp = this.state.info;
        temp[index].fdate = e.target.value;
        this.setState({
            info : temp
        })
        this.props.updParent(temp);
    }

    handleTDate(index, e){
        const temp = this.state.info;
        temp[index].tdate = e.target.value;
        this.setState({
            info : temp
        })
        this.props.updParent(temp);

    }

    handleAdd(){
        const temp = this.state.info;
        temp.push(
            {
                school : "",
                title : "",
                fdate : "",
                tdate : ""
            }
        );
        this.setState({
            info : temp
        })
        this.props.updParent(temp);
    }

    handleRemove(index){
        const temp = this.state.info;
        const temp2 = [];
        for(let i = 0; i < temp.length; i++){
            if (i !== index){
                temp2.push(temp[i]);
            }
        }
        this.setState({
            info : temp2
        })
        this.props.updParent(temp2);
    }


    render(){
        return(
            <div className="edu section">
                <h2 className="section-title">
                    Education
                </h2>
                {
                    this.state.info.map( (item, index) => {
                        return(
                            <div key={index} className="section-child">
                                <label>
                                    School
                                    <input value={item.school} onChange={(e) => this.handleSchool(index, e)}/>
                                </label>
                                <label>
                                    Title of Study
                                    <input value={item.title} onChange={(e) => this.handleTitle(index, e)}/>
                                </label>
                                <div className="hori-container">
                                    <label>
                                        From
                                        <input value={item.fdate} onChange={(e) => this.handleFDate(index, e)}/>
                                    </label>
                                    <label>
                                        To
                                        <input value={item.tdate} onChange={(e) => this.handleTDate(index, e)}/>
                                    </label>
                                </div>
                                <div className="btn">
                                    <button className="remove-btn" onClick={() => {this.handleRemove(index)}}>
                                        <img src={deleteSvg} alt="delete.svg" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="btn">
                    <button className="add-btn" onClick={this.handleAdd}>
                        <img src={addSvg} alt="add.svg" />
                    </button>
                </div>
            </div>
        )
    }
}

export default Education;