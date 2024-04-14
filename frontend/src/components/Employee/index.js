import React, { useState ,
  useEffect,
  useContext,} from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Table, Row, Col } from 'reactstrap';
import { LoginContex } from "../../context/loginContext/LoginContext";
function EmployeeRegistration() {
  const {
  
    EmployeeRegister,
 
    fetchEmployees,
    Employees,
    getEmployee,
    deleteEmployee,
  
  } = useContext(LoginContex);


  useEffect(() => {
    fetchEmployees();
  },[])

  console.log(Employees)
  const addEmployee = () => {
    const data = {
      fullName:EmpName,
      contact:phone,
      gender:selectedGender,
      address:address,
      position:selectedTitle
    }
    console.log(data)
    EmployeeRegister(data)
    // setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    // setNewEmployee({ name: '', email: '' });
  };
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [EmpName, setEmpName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleEmpName = (event) => {
    setEmpName(event.target.value);
  };
  const handleEmpPhone = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleEmpAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleChangeGender = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleChangeTitle = (event) => {
    setSelectedTitle(event.target.value);
  };
  // const deleteEmployee = (id) => {
  //   setEmployees(employees.filter(employee => employee.id !== id));
  // };

  return (
    <Container>
      <h2>Employee Registration</h2>
      <Form>
        <Row>
       
          <Col md={4}>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter Employee Name" value={EmpName} onChange={handleEmpName} />
        
          </Col>
          <Col md={4}>
          <Label for="phone">Phone</Label>
          <Input type="Number" name="phone" id="phone" placeholder="Enter Phone Number" value={phone} onChange={handleEmpPhone} />
          </Col>
          <Col md={4}>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" placeholder="Enter Address" value={address} onChange={handleEmpAddress} />
          </Col>
        </Row>
        <Row>
        <Col md={4}>
                <Label for="gender">Gender</Label>
                <Input type="select" name="gender" id="gender" value={selectedGender} onChange={handleChangeGender}>
                    <option value="">Please select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
               
                </Input>
                </Col>
                <Col md={4}>
                <Label for="title">Select Title</Label>
                <Input type="select" name="title" id="title" value={selectedTitle} onChange={handleChangeTitle}>
                    <option value="">Please select Title</option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
       
                </Input>
                </Col>
            </Row>
            <Row>

            <Col md={3} className='mt-2'>
            <Button onClick={addEmployee}>Add Employee</Button>
            </Col>
            </Row>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Employees && Employees?.map(employee => (
            <tr key={employee._id}>
              {/* <th>{employee._id}</th> */}
              <td>{employee.fullName}</td>
              <td>{employee.gender}</td>
              <td>{employee.contact}</td>
              <td>{employee.address}</td>
              <td>{employee.position}</td>
              <td>
                <Button color="danger" onClick={() => deleteEmployee(employee._id)}>Delete</Button>
                <Button color="success" className='mx-3' onClick={() => deleteEmployee(employee._id)}>Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default EmployeeRegistration;
