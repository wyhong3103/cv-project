import { Component } from "react";
import deleteSvg from '../assets/delete.svg'
import addSvg from '../assets/add.svg'

class Education extends Component{
    constructor(props){
        super(props);
        this.handleSchool = this.handleSchool.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleFDate = this.handleFDate.bind(this);
        this.handleTDate = this.handleTDate.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSchool(index, e){
        this.props.handleChange(1, "school", e.target.value, index);
    }

    handleTitle(index, e){
        this.props.handleChange(1, "title", e.target.value, index);
    }

    handleFDate(index, e){
        this.props.handleChange(1, "fdate", e.target.value, index);
    }

    handleTDate(index, e){
        this.props.handleChange(1, "tdate", e.target.value, index);
    }

    handleAdd(){
        this.props.handleAdd(1);
    }

    handleRemove(index){
        this.props.handleRemove(1, index);
    }


    render(){
        return(
            <div className="edu section">
                <h2 className="section-title">
                    Education
                </h2>
                {
                    this.props.info.map( (item, index) => {
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