// ** FILE TO DEFINE AND CREATE THE COMPONENT **

//Allows us to dynamically import a module. This function returns a promise that is resolved by the imported module. React's lazy() method allows us to create a component that renders lazily.
import React from 'react';
//Import CSS file to "testimony.js"
import '../style.css/Testimony.css'

//A functional component is a function that receives the Props object and returns a ReactNode (a ReactNode can be an HTML element, a string, a boolean, among other types of data.)
//Props are passed as attributes to React components and can contain various types of data, such as strings, numbers, booleans, objects, or even functions. Once a component receives a prop, it can access and use the data within them.
function Testimony(props) {
  return (
    <div className='testimonial-container'>
      <img 
        className='testimonial-img'
        src={require(`../images/testimonial-${props.img}.jpg`)}
        alt='a phot'/>
      <div className='testimonial-text-container'>
        <p className='testimonial-name'>
          <strong>{props.name}</strong> in {props.country}
          </p>
        <p className='testimonial-job'>
          {props.job} at <strong>{props.company}</strong>
          </p>
        <p className='testimonial-text'>"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;