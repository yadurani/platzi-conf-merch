import React, { useContext } from 'react';
import '../styles/components/Success.scss';
import { AppContext } from '../context/AppContext';
import MapLeft from '../components/MapLeft';
import useAddress from '../hooks/useAddress';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useAddress(buyer[0]?.city, buyer[0]?.address);

  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{buyer[0]?.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <MapLeft data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
