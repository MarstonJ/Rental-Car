import React from 'react'
import './Form.css';

class Form extends React.Component{

    render() { 
        
        const car = this.props;

        return (
            <form action="/confirm">
                {console.log(car)}
                <label> Enter your full name: </label>
                <input type="text" placeholder="John Smith" name="fullname" required/>
                <br/>

                <label> Enter your email address: </label>
                <input type="email" placeholder="JohnSmith@email.co.uk" name="email" required/>
                <br/>

                <label> Enter your phone number: </label>
                <input type="tel" name="phoneNumber" pattern="[0-9]{5}[0-9]{6}" required/>
                <br/>
                

                <label htmlFor="startDate"> Enter the required start date.</label>
                <input type="date" name="startDate" required/>
                <br/>           

                <label htmlFor="endDate"> Enter the required end date.</label>
                <input type="date" name="endDate" required/>                
                <br/>

                <label> Select your desired car:</label>                
                <div className="container">

                    <div className="cars">
                        <label className="carsLabel">
                            <img src={car.polo.image} alt={car.polo.model}/>
                            <div>
                                <h3>Car make: {car.polo.make}</h3>
                                <h3>Model: {car.polo.model}</h3>
                                <h3>Number of doors: {car.polo.noDoors}</h3>
                                <h3>Number of seats: {car.polo.noSeats}</h3>
                                <h3>Colour: {car.polo.colour}</h3>
                                <h3>Price per day: £{car.polo.price}</h3>
                                <input className='radioBox' type="radio" name="car" value={car.polo.model} required/>
                            </div>
                        </label>
                    </div>

                    <div className="cars">
                        <label className="carsLabel">
                            <img src={car.fiesta.image} alt={car.fiesta.model}/>
                            <div>
                                <h3>Car make: {car.fiesta.make}</h3>
                                <h3>Model: {car.fiesta.model}</h3>
                                <h3>Number of doors: {car.fiesta.noDoors}</h3>
                                <h3>Number of seats: {car.fiesta.noSeats}</h3>
                                <h3>Colour: {car.fiesta.colour}</h3>
                                <h3>Price per day: £{car.fiesta.price}</h3>
                                <input className='radioBox' type="radio" name="car" value={car.fiesta.model} required/>
                            </div>
                        </label>
                    </div>


                    <div className="cars">
                        <label className="carsLabel">
                            <img src={car.q3.image} alt={car.q3.model}/>
                            <div>
                                <h3>Car make: {car.q3.make}</h3>
                                <h3>Model: {car.q3.model}</h3>
                                <h3>Number of doors: {car.q3.noDoors}</h3>
                                <h3>Number of seats: {car.q3.noSeats}</h3>
                                <h3>Colour: {car.q3.colour}</h3>
                                <h3>Price per day: £{car.q3.price}</h3>
                                <input className='radioBox' type="radio" name="car" value={car.q3.model} required/>
                            </div>
                        </label>
                    </div>

                </div>

                
                
                <input id="submitBtn" type="submit" value="Confirm" />
            </form>
        )
        }
}

export default Form