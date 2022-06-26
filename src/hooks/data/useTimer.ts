import { useState } from 'react';



export const useTimer = () => {
    const [t] = useState(Date.now())
    return t
}