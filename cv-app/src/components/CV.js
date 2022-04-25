import React from "react"
import General from "./General"
import Education from "./Education"
import {v4 as uuidv4} from "uuid"
import Experience from "./Experience"
import image from "../default.png"

export default class CV extends React.Component{
    constructor(props){
        super(props)
        this.state={
            general:[{name:"",lastname:"",address:"",phone:"", description:""}],
            education:[{degree:"",institution:"",address:"",from:"",to:"", key:uuidv4()}],
            experience:[{position:"",company:"",description:"",address:"",from:"",to:"", key:uuidv4()}]
        }
    }
    changeGeneral = (value,event) => {
        let newList = [...this.state.general]
        newList[0][value] = event.target.value
        this.setState({general:newList})
    }
    changeEducation = (value,event,id) => {
        let newList = [...this.state.education]
        for(let i = 0; i < newList.length; i++){
            if(newList[i].key === id){
                newList[i][value] = event.target.value
            }
        }
        this.setState({education:newList})
    }
    
    deleteEducation = (key) => {
        const newList = []
        for(let i = 0; i < this.state.education.length; i++){
            if(this.state.education[i].key !== key){
                newList.push(this.state.education[i])
            }
        }
        this.setState({education: newList})
    }
    
    renderEducation = (formState) => {
        let list = []
        for(let i = 0; i < this.state.education.length; i++){
            list.push(<Education deleteEducation={this.deleteEducation} changeEducation={this.changeEducation} degree={this.state.education[i].degree} institution={this.state.education[i].institution} address={this.state.education[i].address}
             from={this.state.education[i].from} to={this.state.education[i].to} form={formState} id={this.state.education[i].key}/>
            )
        }
        return list
    }
    newEducation = () => {
        let newList = [...this.state.education, {degree:"",institution:"",address:"",from:"",to:"", key:uuidv4()}]
        this.setState({education: newList})
    }
    renderExperience = (formState) => {
        let list = []
        for(let i = 0; i < this.state.experience.length; i ++){
            const exp = this.state.experience[i]
            list.push(<Experience deleteExperience={this.deleteExperience} changeExperience={this.changeExperience} position={exp.position} company={exp.company} description={exp.description} 
                address={exp.address} from={exp.from} to={exp.to} form={formState} id={exp.key}/>)
        }
        return list
    }
    newExperience = () => {
        const list = [...this.state.experience,{position:"",company:"",description:"",address:"",from:"",to:"", key:uuidv4()}]
        this.setState({experience:list})
    }
    deleteExperience = (key) => {
        let list = []
        for(let i = 0; i < this.state.experience.length; i++){
            const exp = this.state.experience[i]
            if(exp.key !== key){
                list.push(exp)
            }
        }
        this.setState({
            experience: list
        })
    }
    changeExperience = (value, key,event) => {
        let list = []
        for(let i = 0; i < this.state.experience.length; i++){
            const exp = this.state.experience[i]
            if(exp.key === key){
                exp[value] = event.target.value
            }
            list.push(exp)
        }
        this.setState({
            experience: list
        })
    }
    render(){
        return(
            <div className="container">
                <div className="form-container">
                    <div className="form-general-container">
                        <h3>General</h3>
                        <General name={this.state.general[0].name} description={this.state.general[0].description} lastname={this.state.general[0].lastname} 
                        address={this.state.general[0].address} phone={this.state.general[0].phone} form={true} changeGeneral={this.changeGeneral}/>
                    </div>
                    <div className="form-experience-container">
                        <h3>Experience</h3>
                        {this.renderExperience(true)}
                        <button className="new" onClick={this.newExperience}>New experience</button>
                    </div>
                    <div className="form-education-container">
                        <h3>Education</h3>
                        {this.renderEducation(true)}
                        <button className="new" onClick={this.newEducation}>New education</button>
                    </div>
                </div>
                <div className="cv-container">
                    <div className="cv-left">
                        {/*<img src={image} alt="Your face"></img>*/}
                        <General name={this.state.general[0].name} description={this.state.general[0].description} lastname={this.state.general[0].lastname} 
                        address={this.state.general[0].address} phone={this.state.general[0].phone} form={false}/>
                    </div>
                    <div className="cv-right">
                        <h3 className="experience-h">Experience</h3>
                        {this.renderExperience(false)}
                        <h3 className="education-h">Education</h3>
                        {this.renderEducation(false)}
                    </div>
                </div>
            </div>
        )
    }
}