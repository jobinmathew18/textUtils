import React, { useState } from 'react'           //useState is a hook

//projectn name: textUtils

export default function TextForm(props){
    
    //state: The state is a built-in React object that is used to contain data or information about the component.
    //"text" is a "state" variable whose default value here is "". And if we have to update the value of "text" then we will use "setText".
    const [text, setText] = useState("")
    // text = "new text"      //wrong way to update the "state"    //if you try to update value of "text", then it will show error.
    // setText("new text from setText");        //right way to update the "state"


    const upperCaseClick = ()=>{
        console.log("UppercaseClick event clicked " + text)
        let changeToUpper = text.toUpperCase();
        setText(changeToUpper)                                  //updating the value of text with the help of setText
        // console.log(text)
        props.showAlert("Converted to upperCase!", 'success')        //this props is accepting function, that is why we are able to pass values in parameters.
    }

    // console.log(text.split(" "))                 //will return an array of all those elements that is saperated by a "space (keyboard wala space)"
    // console.log(text)                                                

    const handleOnChange = (event)=>{
        console.log("handleOnChange event clicked...")
        // console.log(event)

        //updating the "settext" while typing
        //this code says that: setText is equal to previous value + current typed value.
        setText(event.target.value)                     //without this code were not able to write inside the textArea       

        // console.log(text)

    }


    const copyTextClick = ()=>{
        const text = document.getElementById('myBox')
        text.select()
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", 'success')
    }

    const clearTextClick = ()=>{
        setText("")
        props.showAlert("Text cleared!", 'success')
    }


    return(
        <>

        <div className='container'> 
            <h1 style={ {color: props.mode === 'dark' ? 'white' : 'black'} }>{props.formHeading}</h1>
            <div className="mb-3">
                {/* it is important to use "onchange" with "state" in <textarea> otherwise error will be shown in console */}
                {/* below, the first "{}" in styles tells that we writing javascript inside styles and the second "{}" is for the css styling objects. */}
                <textarea className="form-control" value={text} onChange = {handleOnChange} placeholder="Enter text here..." id="myBox" 
                 style={ { backgroundColor: props.mode === 'dark' ? '#2C3333' : 'white', color: props.mode === 'dark' ? 'white' : 'black'} } 
                 rows="8"></textarea>
            </div>

            <button className='btn btn-primary' onClick={upperCaseClick}>Convert to UPPERCASE</button>
            <button className='btn btn-primary m-2' onClick={copyTextClick} >Copy Text</button>
            <button className='btn btn-outline-primary m-2' onClick={clearTextClick} >Clear Text</button>

        </div>

        <div className="container my-4" style={ {color: props.mode === 'dark' ? 'white' : 'black'} }>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=> element.length !== 0).length} words and {(text.replaceAll(" ", "")).length} characters</p>
            <p> <b>Preview: </b>{text}</p>
        </div>

        </>
    )

   
}