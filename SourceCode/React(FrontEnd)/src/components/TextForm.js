import React, { useState } from 'react'




export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () => {
        console.log("UpperCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange = (event) => {
        console.log("OnChange was Clicked");
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        navigator.clipboard.writeText(text.value);
    }
    const handleClearText = () => {
        setText("")
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3">


                <h1>Your text Summary</h1>

                <p>{text.split(" ").length} words and {text.length} characters</p>

                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
