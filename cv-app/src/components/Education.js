import React from "react"

export default class Education extends React.Component{

    render(){
        return(

            <div>
            {this.props.form &&
                <div className="form-education">
                    <input placeholder="Degree: " type="text" value={this.props.degree}
                     onChange={(event) => this.props.changeEducation("degree", event, this.props.id)}/>

                    <input  placeholder="Institution: " type="text" value={this.props.institution}
                     onChange={(event) => this.props.changeEducation("institution", event, this.props.id)}/>

                     <input placeholder="Address: " type="text" value={this.props.address}
                     onChange={(event) => this.props.changeEducation("address", event, this.props.id)}/>

                     <input placeholder="From: " type="text" value={this.props.from}
                     onChange={(event) => this.props.changeEducation("from", event, this.props.id)}/>

                    <input placeholder="To: " type="text" value={this.props.to}
                     onChange={(event) => this.props.changeEducation("to", event, this.props.id)}/>

                    <button className="delete" onClick={() => this.props.deleteEducation(this.props.id)}>Delete education</button>
                    <hr></hr>
                </div>
            } {!this.props.form &&
                <div className="cv-education">
                    <p className="title">{this.props.degree}</p>
                    <p>{this.props.institution}</p>
                    <p>{this.props.address}</p>
                    <p>{this.props.from} - {this.props.to}</p>
                </div>
            }
            </div>
        )
    }
}