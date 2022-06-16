import React, { Component } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponentSub extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res=>{
            let employee = res.data;
            this.setState({ employee: res.data });
        })
    }

    render() {
        return (
            <div>
                <br />
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Employee</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label> First Name: </label>
                            <div>{this.state.employee.firstName}</div>
                        </div>
                        <div className='row'>
                            <label> Last Name: </label>
                            <div>{this.state.employee.lastName}</div>
                        </div>
                        <div className='row'>
                            <label> Email Address: </label>
                            <div>{this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//workaround how to run react6 for classes from react5
//https://stackoverflow.com/questions/63786452/react-navigate-router-v6-invalid-hook-call
//https://stackoverflow.com/questions/70585815/react-this-props-match-is-undefined
function ViewEmployeeComponent(props) {
    let navigate = useNavigate();
    const params = useParams();
    return <ViewEmployeeComponentSub {...props} navigate={navigate} params={params} />
}

export default ViewEmployeeComponent;