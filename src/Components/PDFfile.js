import React from 'react';
import {
  Page,
  Text,
  // Image,
  Document,
  StyleSheet,
  // View,
  Font,
} from '@react-pdf/renderer';

const PDFFile = (props) => {
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
    // Address,
    Skills,
    // Technical,
    // Education,
    // Projects,
    // Experience,
  } = props.obj;

  console.log(props.obj.Skills)
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.Name}>{Name}</Text>
        <Text style={styles.Profile}>{Profile} </Text>
        <Text style={styles.Summary}>{Summary}</Text>

        <div style={styles.Parent}>
          <Text style={styles.Email}>Email : {Email}</Text>
          <Text style={styles.Email}>LinkedIn :{LinkedIn}</Text>
        </div>

        <br />
        <div style={styles.Parent}>
          <Text style={styles.Email}>Github:{Github}/</Text>
          <Text style={styles.Email}>Mobile No : {MobileNo} </Text>
        </div>

        <Text style={styles.Education}>Education :</Text>

        <Text style={styles.EducationText}>{Education1}</Text>
        <Text style={styles.EducationText}>{Education2}</Text>
        <Text style={styles.EducationText}>{Education3}</Text>

        <Text style={styles.Education}>Skills :</Text>

        <div style={styles.Parent}>
          <Text style={styles.EducationText}>{Skills}</Text>
        </div>

        <Text style={styles.Education}>Projects</Text>
        <br />
        <Text style={styles.Education}>{Projects1}</Text>
        <Text style={styles.EducationText}>{Projects1D}</Text>
        <Text style={styles.Education}>{Projects2}</Text>
        <Text style={styles.EducationText}>{Projects2D}</Text>
        <Text style={styles.Education}>{Projects3}</Text>
        <Text style={styles.EducationText}>{Projects3D}</Text>

        {/* <Text style={styles.header} fixed>
          ~ Created with Rohan Magar ~
        </Text> */}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );

  
};
Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  });
const styles = StyleSheet.create({
  Parent: {
    display: 'flex',
    flexDirection: 'row',
  },
  Profile: {
    fontSize: 15,
    marginLeft: 15,
  },
  Summary: {
    fontSize: 12,
    marginLeft: 19,
    width: 440,
  },
  Education: {
    fontSize: 15,
    marginLeft: 9,
    marginTop: 10,
    width: 340,
  },
  EducationText: {
    fontSize: 13,
    marginLeft: 29,
    marginTop: 10,
    width: 500,
  },

  Name: {
    fontSize: 25,
    marginLeft: 9,
    width: 340,
  },
  Email1: {
    fontSize: 12,
    marginLeft: 100,
    marginTop: 50,
  },
  Email: {
    fontSize: 12,
    marginLeft: 30,
    marginTop: 9,
    flex: 1,
  },

  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  text: {
    margin: 12,
    fontSize: 12,

    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },

  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

export default PDFFile;
