import React from 'react'

export default function Alert(props){

    //changing the first letter of a word into CAPITAL.
    const toCapitalize = (word)=>{
        let lower = word.toLowerCase();
        lower = lower.charAt(0).toUpperCase() + lower.slice(1)
        // console.log(lower.slice(2));
        // console.log(lower);
        return lower
    }

    return(
        <div className='alertHeight'>
            {props.alert &&                              //if this line is true then only the below code will execute obviously because of "&&" operator
            <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{toCapitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            </div>}
        </div>
    )
}  