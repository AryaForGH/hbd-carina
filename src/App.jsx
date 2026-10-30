import { useState } from 'react'
import BirthdayPage from './pages/BirthdayPage.jsx'
import BigSurprisePage from './pages/BigSurprisePage.jsx'
import EntryPage from './pages/EntryPage.jsx'
import { birthdayContent } from './data/birthdayContent.js'
import './App.css'

function App() {
  const [page, setPage] = useState('entry')
  const unlock = () => {
    setPage('birthday')
    window.scrollTo(0, 0)
  }
  const replay = () => {
    setPage('entry')
    window.scrollTo(0, 0)
  }
  const backToMemories = () => {
    setPage('birthday')
    window.setTimeout(() => {
      document.getElementById('birthday-top')?.scrollIntoView()
    }, 0)
  }
  return (
    <div className="app-shell">
      {page === 'entry' && <EntryPage content={birthdayContent} onUnlock={unlock} />}
      {page === 'birthday' && <BirthdayPage onFinal={() => { setPage('surprise'); window.scrollTo(0, 0) }} />}
      {page === 'surprise' && <BigSurprisePage onReplay={replay} onBack={backToMemories} />}
    </div>
  )
}

export default App
