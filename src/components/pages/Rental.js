import '../../App.css';
import React from 'react';
import Form from '../Form.js';
import Cars from '../Cars.js';
import fordImage from '../../Images/Ford-Fiesta.jpeg';
import poloImage from '../../Images/VW-Polo.jpeg';
import q3Image from '../../Images/Audi-Q3.jpeg';

const fiesta = new Cars("Ford", "Fiesta", "3", "5", "Silver", 60, fordImage);
const polo = new Cars("VW", "Polo", "5", "5", "Red", 80, poloImage);
const q3 = new Cars("Audi", "Q3", "5", "5", "White", 80, q3Image);

class App extends React.Component {
     
  render(){
    return (
        <div className="App">
            <h1>Car Rental</h1>
            <Form fiesta={fiesta} polo={polo} q3={q3}></Form>
        </div>
    );
    }
}

export default App;
