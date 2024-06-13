import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { View } from './components/View'
import { Add } from './components/Add'
import { Item } from './components/Item'
import { dummyData } from './data';
import { ItemDefault } from './components/ItemDefault';
import { PageNotFound } from './components/PageNotFound';

function Footer() {
  return (
    <h2>Footer Here</h2>
  )
}

function App() {

  const [list, setList] = useState(dummyData);

  function handleDeleteProduct (id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='view' element={<View list={list} />}>
              <Route index element={<ItemDefault />} />
              <Route path=':id' element={<Item list={list} handlerDelete={handleDeleteProduct}/>}/>
            </Route>
            <Route path='add' element={<Add />} />
          </Route>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </>
  )
}

export default App
