import { Component } from "react";

export class Teams extends Component {
    constructor(props){
        
        //localStorage.clear();        
        
        super(props);

        this.state = {Name: "", m1:"",m2:"",m3:""};

        // this.teams = [
        //     {Name: "BrilliantPro", m1:"Talha",m2:"Hanazala",m3:"Tayyab"},
        //     {Name: "Network Routing", m1:"Talha",m2:"Hanazala",m3:""},
        //     {Name: "Student Neon", m1:"Talha",m2:"Shabi",m3:"Tayyab"},
        //     {Name: "Snake Game", m1:"Talha",m2:"",m3:""}            
        // ];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //localStorage.setItem("teams", JSON.stringify(this.teams));
        this.teams = JSON.parse(localStorage.getItem("teams"));

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
        
    handleSubmit(event) {

        this.teams.push({Name: this.state.Name,m1:this.state.m1,m2:this.state.m2,m3:this.state.m3});

        localStorage.setItem("teams", JSON.stringify(this.teams));
        //event.preventDefault();

    }

    render() {

        var temp = JSON.parse(localStorage.getItem("teams"));
        if(temp != null){
            this.teams = JSON.parse(localStorage.getItem("teams"));
        }

        return (
            <div>
                <h1>All Teams.</h1>
                <form onSubmit={this.handleSubmit} id="input_form">
                <label>
                Project Name: <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange}/>
                </label>
                <br/> <br/>
                <label>
                Member1: <input type="text" name="m1" value={this.state.m1} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp;&nbsp;Member2: <input type="text" name="m2" value={this.state.m2} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp;&nbsp;Member3: <input type="text" name="m3" value={this.state.m3} onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="submit" id="submit_button" />

                </form>

                <div className="MyTeams">
                {
                    this.teams.map((elem, ind) => {
                        return (
                            <div className="Item" key={ind}>

                                <p><b>Project Name:</b> {elem.Name}</p>
                                <b><p>Team Members:</p></b>
                                <p> {elem.m1} <br/> {elem.m2} <br/> {elem.m3} </p>
                                
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }

}
