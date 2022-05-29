import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from './data';
export default class From extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: localStorage.getItem('Name'),
      Profile: localStorage.getItem('Profile'),
      Email: localStorage.getItem('Email'),
      MobileNo: localStorage.getItem('MobileNo'),
      Address: localStorage.getItem('Address'),
      Summary: localStorage.getItem('Summary'),
      Skills: localStorage.getItem('Skills'),
      Technical: localStorage.getItem('Technical'),
      Education: localStorage.getItem('Education'),
      Projects: localStorage.getItem('Projects'),
      Experience: localStorage.getItem('Experience'),
    };
  }
  handleChange = (event, props) => {
    //console.log(props);
    this.setState({ [props]: event.target.value });
    localStorage.setItem(props, event.target.value);
  };
  render() {
    let d1 = new Data(this.state);
    d1.SetData(this.state);

    d1.GetData();
    return (
      <>
        <section className='PreViewContainer'>
          <br />
          <label> Name</label>
          <input
            type='text'
            value={this.state.Name}
            onChange={(event) => this.handleChange(event, 'Name')}
          />
          <br />
          <label>Profile</label>
          <input
            type='text'
            value={this.state.Profile}
            onChange={(event) => this.handleChange(event, 'Profile')}
          />

          <br />
          <label>Email</label>
          <input
            type='text'
            value={this.state.Email}
            onChange={(event) => this.handleChange(event, 'Email')}
          />
          <br />
          <label>Mobile Number</label>
          <input
            type='text'
            value={this.state.MobileNo}
            onChange={(event) => this.handleChange(event, 'MobileNo')}
          />
          <br></br>
          <label>Address</label>
          <input
            type='text'
            value={this.state.Address}
            onChange={(event) => this.handleChange(event, 'Address')}
          />
          <br></br>
          <label>Summary</label>
          <input
            type='text'
            value={this.state.Summary}
            onChange={(event) => this.handleChange(event, 'Summary')}
          />

          <br />
          <label>Skills</label>
          <input
            type='text'
            value={this.state.Skills}
            onChange={(event) => this.handleChange(event, 'Skills')}
          />
          <br />
          <label>Technical</label>
          <input
            type='text'
            value={this.state.Technical}
            onChange={(event) => this.handleChange(event, 'Technical')}
          />

          <br />
          <label>Education</label>
          <input
            type='text'
            value={this.state.Education}
            onChange={(event) => this.handleChange(event, 'Education')}
          />

          

          <br />
          <label>Projects</label>
          <input
            type='text'
            value={this.state.Projects}
            onChange={(event) => this.handleChange(event, 'Projects')}
          />
          <br />
          <label>Experience</label>
          <input
            type='text'
            value={this.state.Experience}
            onChange={(event) => this.handleChange(event, 'Experience')}
          />

          <br />

          <Link to='/pre'>Form Data</Link>
        </section>
      </>
    );
  }
}
