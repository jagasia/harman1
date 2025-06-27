import { Component } from "react";

export default class Maths extends Component{
    render(){
        return <div>
            Number 1: <input type="number" className="form-control" />
            Number 2: <input type="number" className="form-control" />
            <br/>
            <input type="button" className="btn btn-info" value={'Add'}/>
        </div>
    }
}