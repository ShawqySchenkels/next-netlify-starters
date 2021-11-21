import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
           <code>Made by Shawqy Schenkels</code>
        </p>

        <h1>Some screenshots</h1>
      <img style="width: 300px;" src="scr1.PNG"></img>
      <img style="width: 300px;" src="scr2.PNG"></img>
      <img style="width: 300px;" src="scr3.PNG"></img>
      <img style="width: 300px;" src="scr4.PNG"></img>
      <p>The app u see, is a quiz app. Here the user can press the start button, then he gets a question with a couple of possible answers. After the user answered the question he gets the next question and so forth until he answered all the questions. After all the questions are answered u get the results shown on the screen. U have 15 seconds per answer</p>
      <img style="width: 300px; height: 300px;" src="frame.png"></img>
      </main>

      <Footer />
    </div>
  )
}
