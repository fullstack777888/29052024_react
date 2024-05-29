import './App.css'
import Card from './components/card'

function App() {
  return (
    <>    
      <Card type="Mobile" title='Nokiea' price={200} imgSource="https://d3m9l0v76dty0.cloudfront.net/system/photos/13555399/large/f28eadfccfdb00ae5a64e9ea4747d68b.png" alt='phone' />
      <Card type="Mobile" title='Samsung' price={300} />
      <Card type="Mobile" title='Iphone' price={30000} />
      <Card type="bike" title='bmx' price={200000} />
    </>
  )
}

export default App
