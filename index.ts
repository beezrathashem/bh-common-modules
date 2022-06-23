import { useState} from 'react'

export const useTime = () => {
    const [time] = useState(Date.now())
    return time
}