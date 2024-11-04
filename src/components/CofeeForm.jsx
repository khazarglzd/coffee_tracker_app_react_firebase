import { coffeeOptions } from "../utils"

const CofeeForm = () => {
    return (
        <>
            <div className="section-header">
                <i className="fa-solid fa-pencil" />
                <h2>Start Tracking Today</h2>
            </div>
            <h4>Select coffee type</h4>
            <div className="coffee-grid">
            </div>
            <select id="coffee-list" name="coffee-list">
                <option value={null}>Select type</option>

            </select>
            <h4>Add the cost ($)</h4>
            <input className="w-full" type="number" placeholder="4.50" />
            <h4>Time since consumption</h4>
            <div className="time-entry">
                <div>
                    <h6>Hours</h6>
                    <select id="hours-select"> </select>
                </div>
                <div>
                    <h6>Mins</h6>
                    <select id="mins-select"> </select>
                </div>
            </div>
            <button>
                <p>Add Entry</p>
            </button>
        </>
    )
}

export default CofeeForm