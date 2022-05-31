import { Component } from "react";

export class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {Project: "",task:"", Priority:"", Status:""};

        this.dash = [
            {Project: "Web Programming",Name:"Implement Front End", Priority:"10", Status:"Ongoing"},
            {Project: "Web Programming",task:"Link to Backend", Priority:"10", Status:"Ongoing"},
            {Project: "Computer Networks",task:"Routers Configuration", Priority:"5", Status:"Completed"}
        ];
        
        //this.tasks = JSON.parse(localStorage.getItem("tasks"));
        //this.dash = JSON.parse(localStorage.getItem("tasks"));
        
    }

    render() {

        var temp = JSON.parse(localStorage.getItem("tasks"));
        if(temp != null){
            this.dash = JSON.parse(localStorage.getItem("tasks"));
        }

        return (
            <div>
                <h1>Dashboard.</h1>
                <h2>Ongoing Tasks: </h2>
                <div className="MyDashboard">
                    {
                        this.dash.map((elem, ind) => {
                            return (
                                <div className="Item" key={ind}>
                                    <p> <b>Project:</b>  {elem.Project} </p>
                                    <p> <b>Task:</b>     {elem.Name}    </p> 
                                    <p> <b>Priority:</b> {elem.Priority}</p> 
                                    <p> <b>Status:</b>   {elem.Status}  </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
