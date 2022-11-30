import { Component } from "react";
import deleteSvg from '../assets/delete.svg'
import addSvg from '../assets/add.svg'

class Experience extends Component{
    constructor(props){
        super(props);
        this.handleCompany = this.handleCompany.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleFDate = this.handleFDate.bind(this);
        this.handleTDate = this.handleTDate.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleCompany(index, e){
        this.props.handleChange(2, "company", e.target.value, index);
    }

    handleTitle(index, e){
        this.props.handleChange(2, "title", e.target.value, index);
    }

    handleFDate(index, e){
        this.props.handleChange(2, "fdate", e.target.value, index);
    }

    handleTDate(index, e){
        this.props.handleChange(2, "tdate", e.target.value, index);
    }

    handleDesc(index, e){
        this.props.handleChange(2, "desc", e.target.value, index);
    }

    handleAdd(){
        this.props.handleAdd(2);
    }

    handleRemove(index){
        this.props.handleRemove(2, index);
    }


    render(){
        return(
            <div className="exp section">
                <h2 className="section-title">
                    Experience
                </h2>
                {
                    this.props.info.map( (item, index) => {
                        return(
                            <div key={index} className="section-child">
                                <label>
                                    Company
                                    <input value={item.company} onChange={(e) => this.handleCompany(index, e)}/>
                                </label>
                                <label>
                                    Position
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
                                <label>
                                    Description
                                    <textarea value={item.desc} onChange={(e) => this.handleDesc(index, e)}></textarea>
                                </label>
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

export default Experience;