import {useState, useEffect} from 'react'

import './App.css'

const App = () => {

    const API_URL = 'https://api.adviceslip.com/advice'

    const [advice, setAdvice] = useState('')

    const fetchAdvice = async () => {
        const response = await fetch(API_URL)
        const data = await response.json()

        const { advice } = data.slip

        setAdvice(advice)
    }

    useEffect(() => {
        fetchAdvice()
    } )

    return(
        <div className="app">
            <div className='app-container'>
                <h1 className='advice-content'>{advice}</h1>
                <button className='advice-btn' onClick={ fetchAdvice }>Give me advice!</button>
                <p className='advice-note'><strong>Note:</strong> Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice.</p>
            </div>
        </div>
    )
}

export default App