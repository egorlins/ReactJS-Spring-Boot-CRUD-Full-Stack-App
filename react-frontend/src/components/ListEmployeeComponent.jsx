import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom'

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees: []
        }
    }
    
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployeeById(id).then((res) => {
            this.setState({ employees: this.state.employees.filter(employee=>employee.id !== id)});
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <Link to="/add-employee/_add">
                        <button className='btn btn-primary'>Add Employee</button>
                    </Link>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key = {employee.id} >
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName} </td>
                                        <td> {employee.emailId} </td>
                                        <td>
                                            {/* //https://stackoverflow.com/questions/53994363/react-router-link-variables-not-converted-to-values
                                            //https://stackoverflow.com/questions/53994363/react-router-link-variables-not-converted-to-values
                                             */}
                                             <Link to={`/add-employee/${employee.id}`}>
                                                <button className='btn btn-primary'>Update</button>
                                            </Link>

                                            <button style={{marginLeft:"10px"}} onClick={ () => this.deleteEmployee(employee.id)} className='btn btn-danger'>Delete</button>
                                            
                                            <Link to={`/view-employee/${employee.id}`}>
                                                <button style={{marginLeft:"10px"}} className='btn btn-info'>View</button>
                                            </Link>
                                        
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;