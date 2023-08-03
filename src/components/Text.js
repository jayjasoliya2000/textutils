import React,{useState} from 'react';

export default function Text(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleUpCase =()=>{
    let newText = text.toUpperCase()
    setText(newText)
  
    props.showAlert("Converted To UpperCase", "success")
        
  
    }
    const handleLoCase =()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted To LowerCase", "success")

    }

    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed", "success")

    }

    const copyText = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied To CLipboard!", "success")

    }

    const clearText =()=>{
        setText("")
        props.showAlert("Text Cleard!", "success")

    }

  return (
    <div className= "container" style={{color: props.mode==="light"?"black":"white"}} >
     <h1>Enter Text To Analyse Here</h1>
<div className="mb-3" >
  <textarea style={{backgroundColor: props.mode==="light"?"white":"black",color: props.mode==="light"?"black":"white"}} className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
</div>
<div className='container'>

   <button disabled={text.length===0} className='btn btn-primary m-1' onClick={handleUpCase}>Convert To UpperCase</button>
   <button disabled={text.length===0} className='btn btn-primary m-1' onClick={handleLoCase}>Convert To LowerCase</button>
   <button disabled={text.length===0} className='btn btn-primary m-1' onClick={removeSpace}>Remove Extra Space</button>
   <button disabled={text.length===0} className='btn btn-primary m-1' onClick={copyText}>Copy Text</button>
   <button disabled={text.length===0} className='btn btn-primary m-1' onClick={clearText}>Clear Text</button>
</div>
<div className='container my-3' style={{color: props.mode==="light"?"black":"white"}}>
    <h2>Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
</div>
<div className='container my-3'>
    <h2> Preview</h2>
    <p>{text.length>0?text : "Nothing To Preview"}</p>
</div>
    </div>
  );
}
