import React from 'react';
import { Button } from 'reactstrap';
import './App.css';
import {Alert} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Button color="primary">HELLO</Button>
      <Alert color="success">
        This is a success alert — check it out!
        This is a primary alert with <a href="#" className="alert-link">hi</a> HELLO
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going
          to run a bit longer so that you can see how spacing within an alert works with this kind
          of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
      </Alert>
    </div>
    </div>
  );
}

export default App;
