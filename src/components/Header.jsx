import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import { imageUrl } from '../Img-URL/config';
// import ChemicalLevelsForm from '../ChemForm/Form';




function HeaderContent() {
  

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <div className="hrf-logo" >
        <Link to='/form'>
            <div style={{ marginTop: '10%'}}>
                <Image src={imageUrl} preview={false} alt="HRF logo white" />
            </div>   
        </Link>
          
        
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        {/* <Link to="/form" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Chemical Calculator
        </Link> */}
      </div>
    </div>
  );
}

export { HeaderContent };