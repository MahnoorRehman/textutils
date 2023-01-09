import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log('Upper was clickes' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    }
    const handleOnChange = () => {
        var clickedText = window.event.target.value
        //  console.log('on Change');
        setText(clickedText);
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', 'success');
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared', 'success');
    }

    const handleCopyClick = async () => {
        await navigator.clipboard.writeText(text);
        // alert('Your copied Text is: ' + text);

        props.showAlert('Copied to Clipbord', 'success');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra Spaces Removed', 'success');
    }
    const [text, setText] = useState('');

    //setText('NewText')


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea id="myBox" style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} value={text} onChange={handleOnChange} className="form-control" rows='8'></textarea>
                </div>
                <button disabled={text.length === 0} className="btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleClearClick}> Clear </button>
                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleCopyClick}> Copy </button>
                <button disabled={text.length === 0} className="btn-primary mx-2 my-1" onClick={handleExtraSpaces}> Remove Spaces </button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <b>Words</b> and {text.length} <b>Characters</b></p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} <b>Minutes Read</b></p>
                <h2 className='my-3'>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Something in Text Box to preview it'}</p>
            </div>
        </>
    )
}
