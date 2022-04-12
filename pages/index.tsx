import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [question, setQuestion] = useState('')

  const [allAns, setAllAns] = useState([])
  const [anwser, setAnwser] = useState('')
  // const [data, setData] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:3001/quiz`).then((res) => {
      // setQuestion(res.data.question)
      console.log(res.data[0].question);
      
      // setAllAns(res.data.allAns)
      // setAnwser(res.data.answer)
    })
  }, [])
  return (
    <div>
      <Head>
        <title>mlap</title>
      </Head>
      {/* <div>{question}</div> */}
    </div>
  )
}

export default Home
