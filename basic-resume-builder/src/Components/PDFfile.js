import React from 'react';
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Font,
} from '@react-pdf/renderer';
 

const PDFFile = (props) => {
 
 
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
   <Document>
     <Page style={styles.body}>
       <Text style={styles.header} fixed>
         ~ Created with react-pdf ~
       </Text>

       <Text style={styles.Name}>{Name}</Text>
       <Text style={styles.Profile}>{Profile}</Text>
       <Text style={styles.Summary}>{Summary}</Text>

       <Text style={styles.Email1}>Email :{Email}</Text>
       <Text style={styles.Email}>Address: {Address}</Text>
       <Text style={styles.Email}>Github:</Text>
       <Text style={styles.Email}>Mobile No : {MobileNo}</Text>
       <Text style={styles.Email}>LinkedIn :</Text>

       <Text style={styles.Education}>Education :</Text>
       <Text style={styles.EducationText}>{Education}</Text>
       <Text style={styles.Education}>Projects</Text>
       <Text style={styles.EducationText}>{Projects}</Text>
       <Text style={styles.Education}>Technical Skills:</Text>
       <Text style={styles.EducationText}>{Technical}</Text>
       <Text style={styles.Education}>Certificates:</Text>
       <Text style={styles.EducationText}>
         eyugygygtygtygyufgyufgyufgygfygygyfgrgrwygygrygyrgygrygyrwgygrygrygygrwgrygfygsfygsfugfsyug
       </Text>
       <Text style={styles.Education}>Achievements :</Text>
       <Text style={styles.EducationText}></Text>

       <Text style={styles.Education}>Experience :</Text>
       <Text style={styles.EducationText}>{Experience}</Text>
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

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
})};

const styles = StyleSheet.create({
  Profile: {
    fontSize: 10,
    marginLeft: 15,
  },
  Summary: {
    fontSize: 12,
    marginLeft: 9,
    width: 340,
  },
  Education: {
    fontSize: 15,
    marginLeft: 9,
    marginTop: 10,
    width: 340,
  },
  EducationText: {
    fontSize: 13,
    marginLeft: 9,
    marginTop: 10,
    width: 500,
  },

  Name: {
    fontSize: 15,
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
    marginLeft: 100,
    marginTop: 9,
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
