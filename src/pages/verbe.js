import { useState } from 'react'
import Verb from '../components/Verb'

export default function Verbe() {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const handleClick = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1)
    }
    
    return (
        <Verb 
            handleClick={handleClick} 
            index={currentIndex} />
    )
}