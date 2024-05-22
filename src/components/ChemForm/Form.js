import  { useState, useEffect } from 'react';
import '../../Style/Form.css'
import Navigation from '../Navigation';
import AlertMessage from '../AlertMessage';
import Footer from '../Footer';
import BackendMessage from '../BackendMessage';

function ChemicalLevelsForm() {
    const [chlorine, setChlorine] = useState('');
    const [ph, setPH] = useState('');
    const [alkalinity, setAlkalinity] = useState('');
    const [stabilizer, setStabilizer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted values: ", { chlorine, ph, alkalinity, stabilizer });
        setSubmitted(true);
    }
    useEffect(() => {
        const timer= setTimeout(() => {
            setIsVisible(false)
        }, 4000)
        return () => clearTimeout(timer)
    }, []);
    
    return (
        <div className='chem-form-page'>
    <Navigation />
    
    <div className='header'>
        <h2>Chemical Levels</h2>
    </div>
    <div className='backend-message'><p>{isVisible && <BackendMessage />}</p></div>
    <div className='form-container'>
        <div className='Form'>
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
    <Footer />
</div>

        
    );
}

export default ChemicalLevelsForm;
