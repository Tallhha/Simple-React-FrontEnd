import { Component, useDebugValue } from "react";

export class Projects extends Component {

    constructor(props){

        //localStorage.clear();        
        
        super(props);

        this.state = {Name: "",Type:"", Description:"", Priority:"", Deadline:"", m1:"",m2:"",m3:""};

        this.projects = [
            {Name: "BrilliantPro",Type:"Website", Description:"Implement Udemy", Priority:"10", Deadline:"01/06/2022", m1:"Talha",m2:"Hanzala",m3:"Tayyab",Status:"Ongoing"},
            {Name: "Network Routing",Type:"Backend", Description:"Congigure different routers using CISCO", Priority:"8", Deadline:"05/06/2020", m1:"Talha",m2:"Hanzala",m3:"",Status:"Completed"},
            {Name: "Student Neon",Type:"Application", Description:"Implement Student Portal", Priority:"10", Deadline:"02/07/2022", m1:"Talha",m2:"Shabi",m3:"Tayyab",Status:"Ongoing"},
            {Name: "Snake Game",Type:"Game", Description:"Make a simple snake game using GUI", Priority:"6", Deadline:"25/12/2018", m1:"Talha",m2:"",m3:"",Status:"Completed"}
        ];

        this.teams = [
            {Name: "BrilliantPro", m1:"Talha",m2:"Hanazala",m3:"Tayyab"},
            {Name: "Network Routing", m1:"Talha",m2:"Hanazala",m3:""},
            {Name: "Student Neon", m1:"Talha",m2:"Shabi",m3:"Tayyab"},
            {Name: "Snake Game", m1:"Talha",m2:"",m3:""}            
        ];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //localStorage.setItem("teams", JSON.stringify(this.teams));

    }

    handleChange(event) {
    
        this.setState({[event.target.name]: event.target.value});
    }
        
    handleSubmit(event) {

        this.projects.push({Name: this.state.Name,Type:this.state.Type, Description:this.state.Description, Priority:this.state.Priority, Deadline:this.state.Deadline, 
            m1:this.state.m1,m2:this.state.m2,m3:this.state.m3,Status:"Upcoming"});
        
        localStorage.setItem("projects", JSON.stringify(this.projects));

        this.teams.push({Name: this.state.Name,m1:this.state.m1,m2:this.state.m2,m3:this.state.m3});
        localStorage.setItem("teams", JSON.stringify(this.teams));
    
        //event.preventDefault();

    }

    render() {

        var temp = JSON.parse(localStorage.getItem("projects"));
        if(temp != null){
            this.projects = JSON.parse(localStorage.getItem("projects"));
        }
        else{
            localStorage.setItem("teams", JSON.stringify(this.teams));
        }

        return (
            <div>
                <h1>All Projects.</h1>

                <form onSubmit={this.handleSubmit} id="input_form">
                <h2>Add Project: </h2>
                <label>
                Name: <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp; Type: <input type="text" name="Type" value={this.state.Type} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp; Description: <input type="text" name="Description" value={this.state.Description} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp; Priority: <input type="number" name="Priority" min="1" max="10" value={this.state.Priority} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp; Deadline: <input type="date" name="Deadline" value={this.state.Deadline} onChange={this.handleChange}/>
                </label>
                <label>
                <br/><br/>
                Member1: <input type="text" name="m1" value={this.state.m1} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp; &nbsp; &nbsp; Member2: <input type="text" name="m2" value={this.state.m2} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp; &nbsp; &nbsp; Member3: <input type="text" name="m3" value={this.state.m3} onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="submit" id="submit_button" />

                </form>

                <div className="MyProjects">
                {
                    this.projects.map((elem, ind) => {
                        return (
                            <div className="Item" key={ind}>
                                <p><b>Name:</b> {elem.Name} &nbsp;&nbsp;|&nbsp;&nbsp; 
                                <b>Type:</b> {elem.Type} &nbsp;&nbsp;|&nbsp;&nbsp; 
                                <b>Priority:</b> {elem.Priority} &nbsp;&nbsp;|&nbsp;&nbsp; 
                                <b>Deadline:</b> {elem.Deadline} &nbsp;&nbsp;|&nbsp;&nbsp;
                                <b>Status:</b> {elem.Status}</p>
                                <p><b>Description:</b> {elem.Description}</p> 
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
