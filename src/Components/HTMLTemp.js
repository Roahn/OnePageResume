import React from 'react';
import '../resume.css';
export default function HTMLTemp(props) {
  console.log(props.obj);

  let {
    Name,
    Profile,
    Summary,
    Email,
    MobileNo,
    LinkedIn,
    Github,
    Education1,
    Education2,
    Education3,
    Projects1,
    Projects2,
    Projects3,
    Projects1D,
    Projects2D,
    Projects3D,
    Highlights, 
    Address,
    Skills,
  } = props.obj;

  return (
    <>
      <div id='doc2' class='yui-t7'>
        <div id='inner'>
          <div id='hd'>
            <div class='yui-gc'>
              <div class='yui-u first'>
                <h1>{Name}</h1>
                <h2>{Profile}</h2>
              </div>

              <div class='yui-u'>
                <div class='contact-info'>
                  <div class='yui-u'>
                    <p class='enlarge'>{Summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id='bd'>
            <div id='yui-main'>
              <div class='yui-b'>
                <div class='yui-gf '>
                  <h3>
                    <a href='mailto:{`{Email}`}'>
                      Email : &nbsp;&nbsp;&nbsp;&nbsp;{Email}
                    </a>
                  </h3>

                  <h3>Mobile &nbsp;&nbsp;&nbsp;&nbsp;{MobileNo}</h3>
                  <h3>
                    <a href={Github}>{Github}</a>
                  </h3>

                  <h3>
                    <a href={LinkedIn}>
                      LinkedIn :&nbsp;&nbsp;&nbsp; {LinkedIn}
                    </a>
                  </h3>
                  <h3>Address &nbsp; &nbsp;&nbsp;{Address}</h3>
                </div>

                <div class='yui-gf first'>
                  <div class='yui-u first'>
                    <h2>Education</h2>
                  </div>
                  <h3>{Education1}</h3>
                  <br />
                  <h3>{Education2}</h3>
                  <br />
                  <h3>{Education3}</h3>
                </div>
                <div class='yui-gf first'>
                  <div class='yui-u first'>
                    <h2>Skills</h2>
                  </div>
                  <h3>{Skills}</h3>
                  
                </div>

                <div class='yui-gf' last>
                  <div class='yui-u first'>
                    <h2>Projects</h2>
                  </div>
                  {Projects1}
                  <p>{Projects1D}</p>
                  {Projects2}
                  <p>{Projects2D}</p>
                  {Projects3}
                  <p>{Projects3D}</p>
                </div>

                <div class='yui-gf'>
                  <div class='yui-u first'>
                    <h2>Highlights</h2>
                  </div>

                  {Highlights}
                </div>
              </div>
            </div>
          </div>

          <div id='ft'>
            <p>
              {Name} &mdash; <a href={'mailto:' + { Email }}>{Email}</a>
              &mdash; (+91) - {MobileNo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
