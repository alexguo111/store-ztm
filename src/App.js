import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import Auth from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>Shop</h1>
}

const App = () => {
  console.log("APP");
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes >
  )
}

export default App;
