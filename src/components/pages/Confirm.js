import React from 'react';
import "./Confirm.css";
import '../../App.css';
import Cars from '../Cars.js';
import fordImage from '../../Images/Ford-Fiesta.jpeg';
import poloImage from '../../Images/VW-Polo.jpeg';
import q3Image from '../../Images/Audi-Q3.jpeg';

class Confirm extends React.Component {

    
    render() {
        
        const params = new URL(window.location.href).searchParams;

        const data = {
            fullname:params.get("fullname"),
            email: params.get("email"),
            phoneNo: params.get("phoneNumber"),
            startDate: params.get("startDate"),
            endDate: params.get("endDate"),
            car: params.get("car")
        };
        
        let car;
        

        if(data.car === "Fiesta"){
            car = new Cars("Ford", "Fiesta", "3", "5", "Silver", 60, fordImage);
        }else if(data.car === "Polo") {
            car = new Cars ("VW", "Polo", "5", "5", "Red", 80, poloImage);
        }else if(data.car === "Q3") {
            car = new Cars("Audi", "Q3", "5", "5", "White", 80, q3Image);
        };
        
     
        return (
            <div>
                <h1>Booking confirmation</h1>

                 <div className="container">   
                    <div className="tableDiv">                    
                        <table>
                            <tbody>
                                <tr>
                                    <th>Customer name:</th>
                                    <th className="data">{data.fullname}</th>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td className="data">{data.email}</td>
                                </tr>
                                <tr>
                                    <td>Phone number:</td>
                                    <td className="data">{data.phoneNo}</td>
                                </tr>
                                <tr>
                                    <td>Start Date:</td>
                                    <td className="data">{data.startDate}</td>
                                </tr>
                                <tr>
                                    <td>End Date:</td>
                                    <td className="data">{data.endDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                

                    <div className="tableDiv">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Car:</th>
                                    <th className="data">{car.make}</th>
                                </tr>
                                <tr>
                                    <td>Model:</td>
                                    <td className="data">{car.model}</td>
                                </tr>
                                <tr>
                                    <td>Number of doors:</td>
                                    <td className="data">{car.noDoors}</td>
                                </tr>
                                <tr>
                                    <td>Number of seats:</td>
                                    <td className="data">{car.noSeats}</td>
                                </tr>
                                <tr>
                                    <td>Colour:</td>
                                    <td className="data">{car.colour}</td>
                                </tr>
                                <tr>
                                    <td>Price per day:</td>
                                    <td className="data">£{car.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
            
        );
    }
}
export default Confirm
