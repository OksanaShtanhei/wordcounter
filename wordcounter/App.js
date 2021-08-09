import React, {useEffect, useState} from 'react'
import Table from './Table'

const App = () => {
    const [text, setText] = useState()
    const [textArr, setTextArr] = useState(null)
    const [arrLength, setArrLength] = useState()
    const [tableWords, setTableWords] = useState(null)

    const countWords = () => {
        const regexp = /[a-zA-Z\-]+/g
        const corrected = String(text.match(regexp))
        setTextArr(corrected.split(',')) 
    }
    useEffect(() => {
        if(textArr !== null){
            setArrLength(textArr.length)
            setTableWords(textArr.reduce((acc, val) => {
                return acc[val] ? acc[val]++ : acc[val]=1, acc
            }, {}))
        }
    }, [textArr])
    return (
        <div className="container-fluid text-center w-50 d-grid">
           <h1>Word Counter</h1> 
           <textarea className="w-100 mt-3" onChange={(e) => setText(e.target.value)}></textarea>
           <button type="button" className="btn btn-primary btn-block mt-3" onClick={countWords}>Count</button>
           {textArr !== null ? <h5 className="mt-3 p-2 bg-success text-light">{arrLength} words</h5> : null}
           {tableWords !== null ? <Table tableWords={tableWords} /> : null}
        </div>
    )
}
export default App