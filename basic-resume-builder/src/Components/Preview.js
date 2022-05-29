import React, { Component } from 'react';
import Data from './data';
import { Link } from 'react-router-dom';
import HTML from './HTMLTemp';
export default class Preview extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
   let obj = new Data();

    //console.log(obj.Name);

    return (
      <>
        {/* <div>
          <h1>{obj.GetData().Name}</h1>
          <h1>{obj.GetData().MobileNo}</h1>
          <h1>{obj.GetData().Address}</h1>
          <h1>{obj.GetData().Summary}</h1>
          <h1>{obj.GetData().Projects}</h1>
          <h1>{obj.GetData().Experience}</h1>
          <h1>{obj.GetData().Skills}</h1>
        </div> */}
        <HTML obj={obj.GetData()}></HTML>
        <Link to='/'>Back</Link>
      </>
    );
  }
}
