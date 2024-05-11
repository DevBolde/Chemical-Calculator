import  { useState } from 'react';


function ChemicalLevelsForm() {
    const [chlorine, setChlorine] = useState('');
    const [ph, setPH] = useState('');
    const [alkalinity, setAlkalinity] = useState('');
    const [stabilizer, setStabilizer] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log("Submitted values: ", { chlorine, ph, alkalinity, stabilizer });
    }

    return (
        <div className ="Form" > 
            <h2>Chemical Levels</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="chlorine">Chlorine (ppm):</label>
                <input 
                    type="number" 
                    id="chlorine" 
                    name="chlorine" 
                    value={chlorine} 
                    onChange={(e) => setChlorine(e.target.value)} 
                    min="0" 
                    required 
                /><br/><br/>

                <label htmlFor="ph">PH:</label>
                <input 
                    type="number" 
                    id="ph" 
                    name="ph" 
                    value={ph} 
                    onChange={(e) => setPH(e.target.value)} 
                    min="0" 
                    required 
                /><br/><br/>

                <label htmlFor="alkalinity">Alkalinity (ppm):</label>
                <input 
                    type="number" 
                    id="alkalinity" 
                    name="alkalinity" 
                    value={alkalinity} 
                    onChange={(e) => setAlkalinity(e.target.value)} 
                    min="0" 
                    required 
                /><br/><br/>

                <label htmlFor="stabilizer">Stabilizer (ppm):</label>
                <input 
                    type="number" 
                    id="stabilizer" 
                    name="stabilizer" 
                    value={stabilizer} 
                    onChange={(e) => setStabilizer(e.target.value)} 
                    min="0" 
                    required 
                /><br/><br/>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ChemicalLevelsForm;
