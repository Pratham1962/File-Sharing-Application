import './App.css';
import {useRef, useState, useEffect} from 'react';
import { uploadFile } from './services/api';

function App() {
  
  const[file, setFile]= useState();
  const[result, setResult]= useState('');
  const fileInputRef= useRef();

  const logo= 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';;
  
  useEffect( () => {
      const getImage = async () => {
        if(file) {
          // Creating a Form
          const data= new FormData();
          data.append("name", file.name);
          data.append("file", file);

          let response= await uploadFile(data);
          setResult(response.path);
        }
      }
      getImage();

      // Function Call
    }, [file]); 

  // Whenever the file value is changed it gets updates

  const onUploadClick = ()=> {
    fileInputRef.current.click();
  }
  return (
    <div className="App">
        <img src={logo} alt="logo"/>
        <div className='wrapper'>
          <h1>Simple File Sharing!!</h1>
          <p>Upload and share the download link</p>
          <button onClick={() => onUploadClick()}>Upload</button>
          <input type='file' ref={fileInputRef} 
          style={ {display: 'none'} } 
          onChange={(e)=> setFile(e.target.files[0])}/>
          {/* <input type='file'/> We are merging this into the button element. So we use useRef hook. */}
          {/* Also we retrive a value with e.target.value but in case of files it is e.target.files[0]. We want to get the first element */}
          
          <a href={result} target="_blank">{result}</a>
          </div> 
    </div>
  );
}

export default App;
