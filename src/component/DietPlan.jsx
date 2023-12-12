import React, { useContext } from 'react';
import { authContext } from '../authprovider/AuthProvider';

const DietPlan = () => {
    const {dietDay} = useContext(authContext)
    console.log(dietDay);
    return (
        <div>
            
        </div>
    );
};

export default DietPlan;