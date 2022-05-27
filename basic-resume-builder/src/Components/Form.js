import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from './data';
export default class From extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Summary: '',
      Experience: '',
      Name: '',
      MobileNo: '',
      Address: '',
      Projects: '',
      Skills: '',
    };
  }
  handleChange = (event, props) => {
    //console.log(props);
    this.setState({ [props]: event.target.value });
  };
  render() {
    let d1 = new Data(this.state);
    d1.SetData(this.state);

    d1.GetData();
    return (
      <>
        <section className='PreViewContainer'>
          <label>Summary</label>
          <input
            type='text'
            value={this.state.Summary}
            onChange={(event) => this.handleChange(event, 'Summary')}
          />
          <br />
          <label>Experience</label>
          <input
            type='text'
            value={this.state.Experience}
            onChange={(event) => this.handleChange(event, 'Experience')}
          />
          <br />
          <label> Name</label>
          <input
            type='text'
            value={this.state.Name}
            onChange={(event) => this.handleChange(event, 'Name')}
          />
          <br />
          <label>Mobile Number</label>
          <input
            type='text'
            value={this.state.MobileNo}
            onChange={(event) => this.handleChange(event, 'MobileNo')}
          />
          <br />
          <label>Address</label>
          <input
            type='text'
            value={this.state.Address}
            onChange={(event) => this.handleChange(event, 'Address')}
          />
          <br />
          <label>Projects</label>
          <input
            type='text'
            value={this.state.Projects}
            onChange={(event) => this.handleChange(event, 'Projects')}
          />
          <br />
          <label>Skills</label>
          <input
            type='text'
            value={this.state.Skills}
            onChange={(event) => this.handleChange(event, 'Skills')}
          />

          <Link to='/pre'>Form Data</Link>
        </section>
      </>
    );
  }
}
