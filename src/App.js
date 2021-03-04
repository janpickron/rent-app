import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './scenes/Welcome'
import Properties from './scenes/Properties'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopMenu from './components/TopMenu'
import PropertyDetails from './scenes/PropertyDetails'

import './App.css'

function App() {
  return (
    <Router>
      <TopMenu />
      <Switch>
        <Route path="/properties/:propertyId" component={PropertyDetails} />
        <Route path="/properties" component={Properties} />
        <Route path="/" component={Welcome} />
      </Switch>
    </Router>
  )
}

export default App
