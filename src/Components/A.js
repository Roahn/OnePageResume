
import PDFFile from './PDFfile';
// import HTML from './HTMLTemp'
import { PDFDownloadLink } from '@react-pdf/renderer';
import Data from './data';
function A() {
 let obj = new Data();
 let name = obj.GetData().Name;
 console.log(name);
  return (
    <div className='App'>
      <PDFDownloadLink
        document={<PDFFile obj={obj.GetData()}></PDFFile>}
        fileName={name}
      >
        {({ loading }) =>
          loading ? (
            <button>Loading document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
      {/* <PDFFile obj={obj.GetData()}></PDFFile>
      <HTML obj={obj.GetData()}></HTML> */}
    </div>
  );
}

export default A;
