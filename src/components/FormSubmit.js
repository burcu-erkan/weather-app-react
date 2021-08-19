function FormSubmit({tempType,handleFormSubmit,handleTempTypeChange}) {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="radio" 
            onChange={handleTempTypeChange}
            checked= {tempType ==="fahrenheit"}
            id="fahrenheit"
            name="degree"
            value ="fahrenheit"
            />
            <label htmlFor="fahrenheit">Fahrenheit</label>
            <br/>
            <input type="radio" 
            onChange={handleTempTypeChange}
            checked= {tempType ==="celcius"}
            id="celcius"
            name="degree"
            value ="celcius"
            />
            <label htmlFor="celcius">Celcius</label>
            <br/>
            <input type="submit" id="submit" name="submit" value="Submit"/>
        </form>
    )
}

export default FormSubmit
