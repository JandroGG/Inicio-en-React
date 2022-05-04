import { useState } from 'react';


const Avatar = ({ id, name = "sin nombre" }) => {

    const [enabled, setEnabled] = useState(true);   //activando hooks
    const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;
    const imgClassName = enabled ? "" : "disabled";
  
    return (
          <picture>
              <img
                alt= {"imagen no load"}
                onClick={() => {
                  setEnabled(!enabled);
                }}
                className={imgClassName}
                src={src}
              />
            <strong className='nombre'>{enabled ? name : "Desactivada"}</strong>
            <div className='id'>{id}</div>
            
          </picture>
    )
  }

  export default Avatar;