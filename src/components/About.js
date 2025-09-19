  import React from 'react'
  import './About.css';

  export default function About(props) {

    const getBackgroundColor = () => {
      if (props.redmode === 'red') return '#212529'; // Red mode background
      if (props.mode === 'dark') return '#212529'; // Dark mode background
      return 'white'; // Default light mode background
    };
  
    const getTextColor = () => {
      return props.mode === 'dark' || props.redmode === 'red' ? 'white' : 'black';
    };
  
    const myStyle = {
      color: getTextColor(),
      backgroundColor: getBackgroundColor(),
      border: `1px solid ${getTextColor()}`, // Dynamic border color
    };
  
    return (
    
    <div className="container" style={{ color: getTextColor() }}>
    <h2><center>About Us</center></h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={{ ...myStyle, border: 'none' }} >
        <b>Text Editing Features</b>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body" style={myStyle}>
       <ul>
        <li>Convert text to UPPERCASE or lowercase instantly.</li>
        <li> Clear text with a single click.</li>
        <li>Copy text easily for use anywhere.</li>
        </ul>
        </div>
      </div>
    </div>
    <div className="accordion-item"  style={myStyle} >
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{ ...myStyle, border: 'none' }} >
          <b>Word & Character Count</b>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body" style={myStyle}>      
        <ul>
        <li>Track word count and character count in real-time. </li>
        <li>Estimate the time required to read the text. </li>
        <li>Useful for writers, students, and professionals.</li>    
        </ul>
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={{ ...myStyle, border: 'none' }} >
        <b>Live Preview & Free Access</b>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body" style={myStyle}>
          <ul>
          <li>See a live preview of your formatted text. </li>
          <li>100% free to use, with no hidden charges. </li>
          <li>Simple, fast, and user-friendly design. </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>

    )
  }
