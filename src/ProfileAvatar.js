import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import "./ProfileAvatar.css";

const ProfileAvatar = () => {
    const config = genConfig({ sex: Math.random() > 0.5 ? 'man' : 'woman' });
    const randomValue = Math.floor(Math.random() *1000);
    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      };
      const randomString = generateRandomString(3);

  return (
    
      <div className="row">
        <div class="col">
        <Avatar className='d-flex mx-auto' style={{ width: '100px', height: '100px' }} {...config} />
        </div>
        <div className="col my-auto text-center">
            <p className="member"> Mem***{randomString} </p>
        </div>
        <div className='col my-auto'>
            <p className="received"> Received ₹{randomValue}.00  Winning Amount</p>
        </div>
      </div>
      
     
    
   
  );
};

export default ProfileAvatar;
