import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState("");

    const handleOnChange = (e) =>{
        setText(e.target.value);
    }
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase" ,"success");
    }
    const handleloClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase" ,"success");
    }
    const handleClick = () =>{
        let newText = "";
        setText(newText);  
        props.showAlert("Text cleared" ,"success");
    }
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard" ,"success");
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed" ,"success");
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
     <textarea className="form-control" id='myBox' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className='btn btn-primary mx-2' style={{backgroundColor: props.mode==='dark'?'black':'#447de7',color: props.mode==='dark'?'white':'black'}} onClick={handleUpClick}>Convert to uppercase</button>
      <button className='btn btn-primary mx-2'style={{backgroundColor: props.mode==='dark'?'black':'#447de7',color: props.mode==='dark'?'white':'black'}} onClick={handleloClick}>Convert to lowercase</button>
      <button className='btn btn-primary mx-2' style={{backgroundColor: props.mode==='dark'?'black':'#447de7',color: props.mode==='dark'?'white':'black'}} onClick={handleClick}>Clear Text</button>
      <button className='btn btn-primary mx-2'style={{backgroundColor: props.mode==='dark'?'black':'#447de7',color: props.mode==='dark'?'white':'black'}} onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-primary 'style={{backgroundColor: props.mode==='dark'?'black':'#447de7',color: props.mode==='dark'?'white':'black'}} onClick={handleExtraSpaces}>Remove Extra Spacest</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
       <h2>Your text summary</h2>
       <p>{text.split(" ").length} words and {text.length} Characters</p>
       <p>{0.008 * text.split(" ").length} Minutes read</p>
       <h2>preview</h2>
       <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
    </>
  )
}
