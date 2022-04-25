import React from "react"

class Experience extends React.Component{
    render(){
        return(
            <div>
            {this.props.form &&
                <div className="form-experience">
                    <input placeholder="Position: " value={this.props.position} onChange={(event) => this.props.changeExperience("position",this.props.id,event)} />
                    <input placeholder="Company: " value={this.props.company} onChange={(event) => this.props.changeExperience("company",this.props.id,event)} />
                    <input placeholder="Description: " value={this.props.description} onChange={(event) => this.props.changeExperience("description",this.props.id,event)} />
                    <input placeholder="Address: " value={this.props.address} onChange={(event) => this.props.changeExperience("address",this.props.id,event)} />
                    <input placeholder="From: " value={this.props.from} onChange={(event) => this.props.changeExperience("from",this.props.id,event)} />
                    <input placeholder="To: " value={this.props.to} onChange={(event) => this.props.changeExperience("to",this.props.id,event)} />
                    <button className="delete" onClick={() => this.props.deleteExperience(this.props.id)}>Delete experience</button>
                    <hr></hr>
                </div>
            } {!this.props.form &&
                <div className="cv-experience">
                    <p className="title">{this.props.position}</p>
                    <p>{this.props.company}</p>
                    <p>{this.props.description}</p>
                    <p>{this.props.address}</p>
                    <p>{this.props.from} - {this.props.to}</p>
                </div>
            }
            </div>
        )
    }
}

export default Experience