import Header from './components/Header'
import './App.css'
import Entry from './components/Entry'
import data from './data/data'

function App() {
  const entryData = data.map((attraction) => {
    //console.log(attraction)
    return <Entry 
    key={attraction.id}
    {...attraction}
    />
  })

  return (
    <>
      <Header />
      {entryData}
    </>
  )
}

export default App
