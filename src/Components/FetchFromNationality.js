import { useState, useEffect } from 'react';

let probOfNat = 0
let countryName = ""

function FetchNationality(props) {
    let [nationality, setNationality] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            let response = await
            
            await fetch(`https://api.nationalize.io?name=${props.name}`);
            let data = await response.json();
            setNationality(data);
            probOfNat = Number(JSON.stringify(nationality.country[0].probability)) * 100
            countryName = JSON.stringify(nationality.country[0].country_id)
        }
        fetchData();
        },[props])
        
        return (
            <h1>{countryName} {probOfNat}%</h1>
        )
        }

export default FetchNationality