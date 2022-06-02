import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from './data';
export default class Form extends Component {
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
          <form>
            <br />
            <label className='form-label'> Name</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Name}
              onChange={(event) => this.handleChange(event, 'Name')}
            />
            <br />
            <label className='form-label'>Profile</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Profile}
              onChange={(event) => this.handleChange(event, 'Profile')}
            />

            <br />

            {/* <label className='form-label'>Email</label>
            <input
              type='text'
              value={this.state.Email}
              onChange={(event) => this.handleChange(event, 'Email')}
            /> */}
            <div class='mb-3'>
              <label for='exampleFormControlInput1' class='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='name@example.com'
                value={this.state.Email}
                onChange={(event) => this.handleChange(event, 'Email')}
              />
            </div>
            <br />
            <label className='form-label'>Mobile Number</label>
            <input
              className='form-control'
              type='text'
              value={this.state.MobileNo}
              onChange={(event) => this.handleChange(event, 'MobileNo')}
            />
            <br></br>
            <label className='form-label'>Address</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Address}
              onChange={(event) => this.handleChange(event, 'Address')}
            />
            <br></br>
            <div class='mb-3'>
              <label for='exampleFormControlTextarea1' class='form-label'>
                Summary
              </label>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                type='text'
                value={this.state.Summary}
                onChange={(event) => this.handleChange(event, 'Summary')}
              ></textarea>
              {/* <input
                type='text'
                value={this.state.Summary}
                onChange={(event) => this.handleChange(event, 'Summary')}
              /> */}
            </div>

            <br />
            <label className='form-label'>Skills</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Skills}
              onChange={(event) => this.handleChange(event, 'Skills')}
            />
            <br />
            <label className='form-label'>Technical</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Technical}
              onChange={(event) => this.handleChange(event, 'Technical')}
            />

            <br />
            <label className='form-label'>Education</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Education}
              onChange={(event) => this.handleChange(event, 'Education')}
            />

            <br />
            <label className='form-label'>Projects</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Projects}
              onChange={(event) => this.handleChange(event, 'Projects')}
            />
            <br />
            <label className='form-label'>Experience</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Experience}
              onChange={(event) => this.handleChange(event, 'Experience')}
            />

            <br />
          </form>
          <Link to='/pre'>Form Data</Link>
        </section>
      </>
    );
  }
}
