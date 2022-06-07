import React from 'react';
import '../resume.css';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
export default function HTMLTemp(props) {
  console.log(props.obj);

  let {
    Name,
    Profile,
    Email,
    MobileNo,
    Address,
    Summary,
    Skills,
    Technical,
    Education,
    Projects,
    Experience,
  } = props.obj;

  return (
    <>
      <Document>
        <Page>
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
                      <h3>Address {Address}</h3>
                      <h3>
                        <a href='mailto:{`{Email}`}'>{Email}</a>
                      </h3>
                      <h3>{MobileNo}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div id='bd'>
                <div id='yui-main'>
                  <div class='yui-b'>
                    <div class='yui-gf'>
                      <div class='yui-u first'>
                        <h2>Profile</h2>
                      </div>
                      <div class='yui-u'>
                        <p class='enlarge'>{Summary}</p>
                      </div>
                    </div>

                    <div class='yui-gf'>
                      <div class='yui-u first'>
                        <h2>Skills</h2>
                      </div>
                      <div class='yui-u'>{Skills}</div>
                    </div>

                    <div class='yui-gf'>
                      <div class='yui-u first'>
                        <h2>Technical</h2>
                      </div>
                      {Technical}
                    </div>
                    <div class='yui-gf'>
                      <div class='yui-u first'>
                        <h2>Projects</h2>
                      </div>
                      {Projects}
                    </div>

                    <div class='yui-gf'>
                      <div class='yui-u first'>
                        <h2>Experience</h2>
                      </div>

                      {Experience}
                    </div>

                    <div class='yui-gf last'>
                      <div class='yui-u first'>
                        <h2>Education</h2>
                      </div>
                      {Education}
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
        </Page>
      </Document>
    </>
  );
}
