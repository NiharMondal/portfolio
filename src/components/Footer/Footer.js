import React from 'react';

const Footer = () => {
   return (
      <footer style={{bottom:'10px',position:'fixed'}}>
         <small> Copyright &copy; { new Date().getFullYear()} <span className="text-success"> Nihar Mondal</span>.  All Rights Reserved</small>
      </footer>
   );
};

export default Footer;