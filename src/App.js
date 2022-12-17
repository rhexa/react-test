import { useEffect, useState } from 'react'

const Buttons = ({clickGood, clickBad, clickNeutral}) => {
  return (
    <div>
      <button onClick={clickGood}>good</button>
      <button onClick={clickNeutral}>neutral</button>
      <button onClick={clickBad}>bad</button>
    </div>
  )
}

const Statistics = ({datas}) => {
  const list = Object.keys(datas).map((k,i) => {
    return (
      <tr key={k}>
        <td>
          {String(Object.keys(datas)[i])}
        </td>
        <td>
          {String(datas[k])}
        </td>
      </tr>
    )
  })
  
  return (
    <table>
      <tbody>
        {list}
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [Datas, setDatas] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0.0
  })

  const setAverage = () => {
    const average = (Datas.good * 1 + Datas.bad * -1) / Datas.all
    setDatas({...Datas, average: average})
  }

  const setAll = () => {
    const sum = Datas.good + Datas.bad + Datas.neutral
    setDatas({...Datas, all: sum})
  }

  const clickGood = () => {
    setDatas({...Datas, good: Datas.good + 1})
  }
  
  const clickBad = () => {
    setDatas({...Datas, bad: Datas.bad + 1})
  }
  
  const clickNeutral = () => {
    setDatas({...Datas, neutral: Datas.neutral + 1})
  }

  useEffect(() => {
    setAll()
    setAverage()
    console.log(Datas)
  }, [Datas.good, Datas.bad, Datas.neutral])
  
  return (
    <div>
      <Buttons clickGood={clickGood} clickBad={clickBad} clickNeutral={clickNeutral} />
      <Statistics datas={Datas} />
    </div>
  )
}

export default App