import { Component } from "react";

export class Tasks extends Component {
    
    constructor(props){

        //localStorage.clear();        
        
        super(props);

        this.state = {Project: "", Name: "", Priority:"", Deadline:"", Time_spent:"",Overdue:"",Status:"", m1:"",m2:"",m3:""};

        this.tasks = [
            {Project: "Web Programming", Name: "Implement Front End", Priority:"10", Deadline:"12/12/12", Time_spent:"5",Overdue:"N/A",Status:"Ongoing", m1:"Talha",m2:"Hanazala",m3:"Tayyab"},
            {Project: "Web Programming", Name: "Link to Backend", Priority:"10", Deadline:"12/12/12", Time_spent:"2",Overdue:"N/A",Status:"Ongoing", m1:"Talha",m2:"Hanazala",m3:"Tayyab"},
            {Project: "Computer Networks", Name: "Routers Configuration", Priority:"5", Deadline:"12/12/12", Time_spent:"10",Overdue:"N/A",Status:"Completed", m1:"Talha",m2:"Hanazala",m3:""}
        ];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //localStorage.setItem("tasks", JSON.stringify(this.tasks));

    }

    handleChange(event) {
        
        //if(event.target.name == "members"){
        //    this.state.m.push(event.target.value);
        //}

        this.setState({[event.target.name]: event.target.value});
    }
        
    handleSubmit(event) {

        this.tasks.push({Project:this.state.Project, Name: this.state.Name, Priority:this.state.Priority, Deadline:this.state.Deadline,Time_spent:this.state.Time_spent,Overdue:this.state.Overdue, Status:this.state.Status, 
            m1:this.state.m1,m2:this.state.m2,m3:this.state.m3});
        
        localStorage.setItem("tasks", JSON.stringify(this.tasks));

        //event.preventDefault();

    }

    render() {

        var temp = JSON.parse(localStorage.getItem("tasks"));
        if(temp != null){
            this.tasks = JSON.parse(localStorage.getItem("tasks"));
        }

        return (
            <div>
                <h1>All Tasks.</h1>
                <form onSubmit={this.handleSubmit} id="input_form">
                <label>
                &nbsp; Project Name: <input type="text" name="Project" value={this.state.Project} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp; Task Name: <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp; Time_Spent: <input type="number" name="Time_spent" value={this.state.Type} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp; Overdue: <input type="text" name="Overdue" value={this.state.Description} onChange={this.handleChange}/>
                </label>
                <label>
            <br/>
                &nbsp;&nbsp;Priority: <input type="number" min="1" max="10" name="Priority" value={this.state.Priority} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp;Deadline: <input type="date" name="Deadline" value={this.state.Deadline} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp;Status: <input type="text" name="Status" value={this.state.Status} onChange={this.handleChange}/>
                </label>
                <label>
                <br/><br/>
                Member1: <input type="text" name="m1" value={this.state.m1} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp;&nbsp; Member2: <input type="text" name="m2" value={this.state.m2} onChange={this.handleChange}/>
                </label>
                <label>
                &nbsp;&nbsp; Member3: <input type="text" name="m3" value={this.state.m3} onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="submit"  id="submit_button"/>

                </form>

                <div className="MyProjects">
                {
                    this.tasks.map((elem, ind) => {
                        return (
                            <div className="Item" key={ind}>
                                <p><b>Project Name: </b>{elem.Project}&nbsp;&nbsp;|&nbsp;&nbsp; 
                                <b>Task Name: </b>{elem.Name}&nbsp;&nbsp;|&nbsp;&nbsp;
                                <b>Time Spent: </b> {elem.Time_spent} Hours &nbsp;&nbsp;|&nbsp;&nbsp; <br/>
                                <b>Overdue: </b> {elem.Overdue}&nbsp;&nbsp;|&nbsp;&nbsp;
                                <b>Priority: </b> {elem.Priority}&nbsp;&nbsp;|&nbsp;&nbsp;
                                <b>Deadline: </b> {elem.Deadline}&nbsp;&nbsp;|&nbsp;&nbsp;
                                <b>Status: </b> {elem.Status}</p>
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
