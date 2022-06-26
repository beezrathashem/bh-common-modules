import { useState } from 'react'

const useTime = () => {
    const [t] = useState(Date.now())
    return t
}

export default useTime