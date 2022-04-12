import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import classes from './index.module.scss'
const AddQuiz = () => {
  const [question, setQuestion] = useState('')
  const [Ans1, setAns1] = useState('')
  const [Ans2, setAns2] = useState('')
  const [Ans3, setAns3] = useState('')
  const [Ans4, setAns4] = useState('')
  const [anwser, setAnwser] = useState('')

  function addQuiz(e: any) {
    e.preventDefault()
    axios.post(`http://localhost:3001/quiz`, {
      question: question,
      allAns: [Ans1, Ans2, Ans3, Ans4],
      anwser: anwser,
    })
  }
  return (
    <div className={classes.pages}>
      <Head>
        <title>mlap</title>
      </Head>
      <form onSubmit={addQuiz}>

        <span className={classes.headPages}>
          <p className={classes.headText}>Add Quiz</p>
        </span>
        <div className={classes.inputZone}>
          <div className={classes.questionZone}>
            <label htmlFor="questionId">
              <p>Question</p>
            </label>
            <textarea
              id="questionId"
              onChange={(e) => {
                setQuestion(e.target.value)
              }}
              className={classes.inputItemQuiz}
            />
          </div>
          <div className={classes.allChoice}>
            <span className={classes.choice}>
              <p>ก.</p>
              <input
                onChange={(e) => {
                  setAns1(e.target.value)
                }}
                className={classes.inputItem}
                type="text"
              />
            </span>
            <span className={classes.choice}>
              <p>ข.</p>
              <input
                onChange={(e) => {
                  setAns2(e.target.value)
                }}
                className={classes.inputItem}
                type="text"
              />
            </span>
            <span className={classes.choice}>
              <p>ค.</p>
              <input
                onChange={(e) => {
                  setAns3(e.target.value)
                }}
                className={classes.inputItem}
                type="text"
              />
            </span>
            <span className={classes.choice}>
              <p>ง.</p>
              <input
                onChange={(e) => {
                  setAns4(e.target.value)
                }}
                className={classes.inputItem}
                type="text"
              />
            </span>
          </div>
          <div>
            <label className={classes.labelAns} htmlFor="answerId">
              <p>Answer </p>
              <span className={classes.SubTextextLabelAns}>
                {' '}
                * นำคำตอบในช่องกลางมาใส่
              </span>
            </label>
            <textarea
              id="answerId"
              onChange={(e) => {
                setAnwser(e.target.value)
              }}
              className={classes.inputItemQuiz}
            />
          </div>
        </div>
        <div className={classes.btnZone}>
          <button className={classes.submitBth} onSubmit={addQuiz}>
            Post
          </button>
        </div>
      </form>
    </div>
  )
}
export default AddQuiz
