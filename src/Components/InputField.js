import {React, useState, useRef, useEffect } from "react";

//function to create an autofocussed input field and fetch nationality data
let probOfNat = 0
let countryName = ""

function InputField(){
    const [name, setName] = useState(null);
    let [nationality, setNationality] = useState(null);
    const inputRef = useRef();
    
    //function to call API and pass name on button click
    const handleClick = async() => {
            let response = await
            await fetch(`https://api.nationalize.io?name=${name}`);
            let data = await response.json();
            setNationality(data);
            probOfNat = Number(JSON.stringify(nationality.country[0].probability)) * 100
            countryName = JSON.stringify(nationality.country[0].country_id)
            } 

    //focus on input field on page load
    useEffect(() => {
        inputRef.current.focus();
        }, [])

        return(
            <div>
                <form>
                    <input 
                    id="nameInput"
                    ref={inputRef} 
                    value={name} 
                    onChange={(e) =>
                        setName(e.target.value)}/>
                    <button variant="primary" size="lg" onClick={handleClick}>Submit</button>
                </form>
                <h1>{countryName} {probOfNat}%</h1>
            </div>
    )
}

export default InputField