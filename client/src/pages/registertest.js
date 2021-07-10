import React, { useState, useEffect } from 'react';
import API from '../utils/API';

// test components
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";


function Register() {
    // Setting our component's initial state
    const [users, setUsers] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all users and store them with setUsers
    // useEffect(() => {
    //   loadUsers()
    // }, [])
  
    // Loads all users and sets them to users
    // function loadUsers() {
    //   API.getUsers()
    //     .then(res => 
    //       setUsers(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };
  
    // Deletes a book from the database with a given id, then reloads books from the db
    // function deleteUser(id) {
    //   API.deleteUser(id)
    //     .then(res => loadUsers())
    //     .catch(err => console.log(err));
    // }
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
   async function handleFormSubmit(event) {
      event.preventDefault();
      const username = formObject.username;
      const email = formObject.email;
      const password = formObject.password;

      if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({
            username,
            email,
            password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
      if (response.ok) {
        console.log('Account Generated.')
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    };
  
      return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Sign Up</h1>
              </Jumbotron>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="username"
                  placeholder="Username"
                />
                <Input
                  onChange={handleInputChange}
                  name="email"
                  placeholder="Email Address"
                />
                <TextArea
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <FormBtn
                  // disabled={!(formObject.author && formObject.title && formObject.password)}
                  onClick={handleFormSubmit}
                >
                  Submit
                </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default Register;