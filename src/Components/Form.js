import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Data from './data';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: localStorage.getItem('Name'),
      Profile: localStorage.getItem('Profile'),
      Summary: localStorage.getItem('Summary'),
      Email: localStorage.getItem('Email'),
      LinkedIn: localStorage.getItem('LinkedIn'),
      Github: localStorage.getItem('Github'),
      MobileNo: localStorage.getItem('MobileNo'),
      Address: localStorage.getItem('Address'),
      Skills: localStorage.getItem('Skills'),
      Education1: localStorage.getItem('Education1'),
      Education2: localStorage.getItem('Education2'),
      Education3: localStorage.getItem('Education3'),
      Projects1: localStorage.getItem('Projects1'),
      Projects1D: localStorage.getItem('Projects1D'),

      Projects2: localStorage.getItem('Projects2'),
      Projects2D: localStorage.getItem('Projects2D'),
      Projects3: localStorage.getItem('Projects3'),
      Projects3D: localStorage.getItem('Projects3D'),
      Highlights: localStorage.getItem('Highlights'),
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
        <h1 style={{ textAlign: 'center' }}>Resume Builder App</h1>
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
            <label className='form-label'>LinkedIn</label>
            <input
              className='form-control'
              type='text'
              value={this.state.LinkedIn}
              onChange={(event) => this.handleChange(event, 'LinkedIn')}
            />
            <br />
            <label className='form-label'>Github</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Github}
              onChange={(event) => this.handleChange(event, 'Github')}
            />
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
            <br />
            <label className='form-label'>Education</label>
            <br />
            <label className='form-label'>10th</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Education1}
              onChange={(event) => this.handleChange(event, 'Education1')}
            />
            <br />
            <label className='form-label'>12th</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Education2}
              onChange={(event) => this.handleChange(event, 'Education2')}
            />
            <br />
            <label className='form-label'>Graduation</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Education3}
              onChange={(event) => this.handleChange(event, 'Education3')}
            />
            <br />
            <label className='form-label'>Skills</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Skills}
              onChange={(event) => this.handleChange(event, 'Skills')}
            />
            <br />
            <label className='form-label'>Projects</label>
            <br></br>
            <label className='form-label'>Title</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Projects1}
              onChange={(event) => this.handleChange(event, 'Projects1')}
            />
            <br />
            <label className='form-label'>Description</label>
            <textarea
              className='form-control'
              type='text'
              value={this.state.Projects1D}
              onChange={(event) => this.handleChange(event, 'Projects1D')}
            />
            <br /> <label className='form-label'>Projects</label>
            <br></br>
            <label className='form-label'>Title</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Projects2}
              onChange={(event) => this.handleChange(event, 'Projects2')}
            />
            <br />
            <label className='form-label'>Description</label>
            <textarea
              className='form-control'
              type='text'
              value={this.state.Projects2D}
              onChange={(event) => this.handleChange(event, 'Projects2D')}
            />
            <br /> <label className='form-label'>Projects</label>
            <br></br>
            <label className='form-label'>Title</label>
            <input
              className='form-control'
              type='text'
              value={this.state.Projects3}
              onChange={(event) => this.handleChange(event, 'Projects3')}
            />
            <br />
            <label className='form-label'>Description</label>
            <textarea
              className='form-control'
              type='text'
              value={this.state.Projects3D}
              onChange={(event) => this.handleChange(event, 'Projects3D')}
            />
            <br />
            <div class='mb-3'>
              <label for='exampleFormControlTextarea1' class='form-label'>
                Highlights
              </label>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                type='text'
                value={this.state.Highlights}
                onChange={(event) => this.handleChange(event, 'Highlights')}
              ></textarea>
              {/* <input
          type='text'
          value={this.state.Summary}
          onChange={(event) => this.handleChange(event, 'Summary')}
        /> */}
            </div>
          </form>
          <button className='btn btn-primary'>
            <Link to='/pre'>Download Page</Link>
          </button>
        </section>
      </>
    );
  }
}
