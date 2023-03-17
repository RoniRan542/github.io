import React from 'react';
import './footer.css'

function Footer(props) {
  return (
      <footer>
      <p> Copyright: all rights reserved to {props.name}, {props.year}</p>
    </footer>
  );
}

export default Footer;
