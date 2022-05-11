
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);


// import React , { Component } from 'react';

// class  Car extends React.Component {
//     render() {
//   return  <h2>I am a { this.props.brand }!</h2>;
// }
// }
// class Garage extends React.Component {
//     render() {
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <Car brand="Ford" />
//     </>
//   );
// }
// }
// export default Garage;