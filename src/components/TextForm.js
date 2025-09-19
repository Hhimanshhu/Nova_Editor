import { useState } from "react";
import './TextForm.css';


export default function TextForm(props) {
  
  const handleUpClick = () =>{
    let txt = text.toUpperCase();
    setText(txt);
    props.showalert("Converted to Upper-case!","success");
  }

  const handledownClick = () =>{
    let txt2 = text.toLowerCase();
    setText(txt2);
    props.showalert("Converted to Lower-case!","success");
  }

  const handleclearClick = () =>{
    setText("");
    props.showalert("Text Clear!","warning");
  }

  const handlecopyClick = () =>{
    var text = document.querySelector("#mybox");
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied!","success");

  }

  const handleExtraspace = () =>{
    let text3 = text.replace(/\s+/g, ' ').trim();
    setText(text3);
    props.showalert("Extra Space Removed!","warning");
  }
  
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const [text,setText] = useState('');
    return (
      <>
    <div className="container" style={{color:props.mode === 'dark'? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <label htmlFor="mybox" className="form-label">Write your Text Below</label>
            </div>
           
            <textarea 
            style={{background:props.mode === 'light'? 'white':'gray' , color:props.mode === 'dark'? 'white':'black'}}
            className="form-control" 
            id="mybox" 
            rows="10" 
            onChange={handleOnChange} 
            value = {text} 
            placeholder="Enter Text Here">
            </textarea>
            </div>
          <div className="allbtn">
          <div className="btndiv1"><button disabled={text.length===0} className="btn1" onClick={handleUpClick}>Convert to Uppercase</button></div> 
          <div className="btndiv2"><button disabled={text.length===0} className="btn2" onClick={handledownClick}>Convert to Lowercase</button></div>
          <div className="btndiv3"><button disabled={text.length===0} className="btn3" onClick={handleclearClick}>Clear Text</button></div>
          <div className="btndiv4"><button disabled={text.length===0} className="btn4" onClick={handlecopyClick}>Copy Text</button></div>
          <div className="btndiv5"><button disabled={text.length===0} className="btn5" onClick={handleExtraspace}>Remove Extra Space</button></div>
          </div>
    
    <div className="container my-1" style={{color:props.mode === 'dark'? 'white':'black'}}>
      <h1>Text Summery</h1>
      <pre><b>Word = {text.trim().split(/\s+/).filter((word) => word.length > 0).length}</b><b><br/>Text = {text.length}</b> </pre>   
      <p>{ 0.008*text.trim().split(/\s+/).filter((word) => word.length > 0).length} Minutes take to read words </p>
      <h3>Preview</h3>
      <p>{text.length>0?text :"Nothing to preview! "}</p>
    </div>
    </>
  ) 
}