import { useState, useEffect } from 'react';
import '../../Style/Form.css';
import Navigation from '../Navigation';
import Footer from '../Footer';
import BackendMessage from '../BackendMessage';

// Calculation functions
function calculateChlorineAdjustment(currentLevel, desiredLevel, poolSize) {
    const chlorineDemand = desiredLevel - currentLevel;
    const liquidChlorinePerGallon = 1.25; // pounds of available chlorine per gallon (12.5% solution)
    const gallonsNeeded = (chlorineDemand * poolSize) / (liquidChlorinePerGallon * 10000);
    return gallonsNeeded;
}

function calculatePHAdjustment(currentPH, desiredPH, poolSize, direction) {
    const acidDemand = direction === 'down' ? (currentPH - desiredPH) * 1.6 : (desiredPH - currentPH) * 1.25;
    const muriaticAcidPerOunce = 0.31; // 31.45% Muriatic Acid
    return (acidDemand * poolSize * muriaticAcidPerOunce) / 10000;
}

function calculateAlkalinityAdjustment(currentLevel, desiredLevel, poolSize) {
    const alkalinityDemand = desiredLevel - currentLevel;
    const bakingSodaPerPound = 1.5; // 1.5 pounds per 10,000 gallons raises alkalinity by 10 ppm
    return (alkalinityDemand * poolSize) / (10 * 10000 * bakingSodaPerPound);
}

function calculateStabilizerAdjustment(currentLevel, desiredLevel, poolSize) {
    const stabilizerDemand = desiredLevel - currentLevel;
    const cyanuricAcidPerPound = 0.8125; // 13 ounces per 10,000 gallons raises CYA by 10 ppm, converted to pounds
    return (stabilizerDemand * poolSize) / (10 * 10000 * cyanuricAcidPerPound);
}


function ChemicalLevelsForm() {
    const [poolSize, setPoolSize] = useState('');
    const [chlorine, setChlorine] = useState('');
    const [ph, setPH] = useState('');
    const [alkalinity, setAlkalinity] = useState('');
    const [stabilizer, setStabilizer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [adjustments, setAdjustments] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted values: ", { chlorine, ph, alkalinity, stabilizer, poolSize });

        const chlorineAdj = calculateChlorineAdjustment(parseFloat(chlorine), 3, parseFloat(poolSize));
        const phAdj = calculatePHAdjustment(parseFloat(ph), 7.4, parseFloat(poolSize), 'down');
        const alkalinityAdj = calculateAlkalinityAdjustment(parseFloat(alkalinity), 100, parseFloat(poolSize));
        const stabilizerAdj = calculateStabilizerAdjustment(parseFloat(stabilizer), 40, parseFloat(poolSize));

        setAdjustments({
            chlorine: chlorineAdj,
            ph: phAdj,
            alkalinity: alkalinityAdj,
            stabilizer: stabilizerAdj
        });

        setSubmitted(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='chem-form-page'>
            <Navigation />
            <div className='header'>
                <h2>Chemical Levels</h2>
            </div>
            <div className='backend-message'>{isVisible && <BackendMessage />}</div>
            <div className='form-container'>
                <div className='Form'>
                    <form onSubmit={handleSubmit}>
                        <label>Chlorine (ppm):</label><br/>
                        <div className="button-group">
                            {[0, 1, 2, 3, 5, 7.5, 10].map(level => (
                                <button
                                    type="button"
                                    key={level}
                                    onClick={() => setChlorine(level)}
                                    className={chlorine === level ? 'selected' : ''}
                                >
                                    {level}
                                </button>
                            ))}
                        </div><br/>

                        <label htmlFor="ph">PH:</label><br/>
                        <div className="button-group">
                            {[7, 7.2, 7.4, 7.6, 7.8, 8].map(level => (
                                <button
                                type="button"
                                key={level}
                                onClick={() => setPH(ph === level ? null : level)}
                                className={ph === level ? 'selected' : ''}
                              >
                                {level}
                              </button>
                            ))}
                        </div><br/>

                        <label htmlFor="alkalinity">Alkalinity (ppm):</label><br/>
                        <input
                            type="number"
                            id="alkalinity"
                            name="alkalinity"
                            value={alkalinity}
                            onChange={(e) => setAlkalinity(e.target.value)}
                            min="0"
                            step={10}
                            required
                        /><br/><br/>

                        <label htmlFor="stabilizer">Stabilizer (ppm):</label>
                        <div className="button-group">
                            {[0, 10, 20, 30, 50, 60, 70, 80, 90, 100].map(level => (
                                <button
                                    type="button"
                                    key={level}
                                    onClick={() => setStabilizer(level)}
                                    className={stabilizer === level ? 'selected' : ''}
                                >
                                    {level}
                                </button>
                            ))}
                        </div><br/><br/>

                        <label htmlFor="poolSize">Pool Size (gallons):</label>
                        <input
                            type="number"
                            id="poolSize"
                            name="poolSize"
                            value={poolSize}
                            onChange={(e) => setPoolSize(e.target.value)}
                            min="0"
                            step={5000}
                            required
                        /><br/><br/>

                        <input type="submit" value="Submit" />
                    </form>
                    {submitted && adjustments && (
                       <div className='alert'>
                        <h3>What you should add:</h3>
                            <div className='column'>
                                <p>Add {adjustments.chlorine.toFixed(2)} gallons of liquid chlorine</p>
                                <p>Add {adjustments.ph.toFixed(2)} ounces of muriatic acid</p>
                                <p>Add {adjustments.alkalinity.toFixed(2)} pounds of baking soda</p>
                                <p>Add {adjustments.stabilizer.toFixed(2)} pounds of cyanuric acid</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ChemicalLevelsForm;


