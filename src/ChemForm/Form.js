import  { useState } from 'react';
import './Form.css'
import Navigation from '../components/Navigation';
import AlertMessage from '../components/AlertMessage';



function ChemicalLevelsForm() {
    const [chlorine, setChlorine] = useState('');
    const [ph, setPH] = useState('');
    const [alkalinity, setAlkalinity] = useState('');
    const [stabilizer, setStabilizer] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted values: ", { chlorine, ph, alkalinity, stabilizer });
        setSubmitted(true);
    }

    return (
        <div className='chem-form-page'>
            <style>
                {`
                    body {
                        background-color: #222;
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
            <Navigation />
            <div className='header'>
                <h2>Chemical Levels</h2>
            </div>
        <div className ="Form" > 
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
            {submitted && <AlertMessage chlorine={chlorine} ph={ph} alkalinity={alkalinity} stabilizer={stabilizer} />}
        </div>
        </div>
        
    );
}

export default ChemicalLevelsForm;
