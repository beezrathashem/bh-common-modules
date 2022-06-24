import { useState } from 'react';

export const useTime = () => {
    const [t] = useState(Date.now())
    return t
}