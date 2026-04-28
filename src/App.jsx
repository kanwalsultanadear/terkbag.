import { useState } from 'react';
import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';

function App() {
  const  [ items, setItems ] = useState([]);
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
