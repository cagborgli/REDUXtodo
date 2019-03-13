import React from 'react'
import Footer from './Footer'
import AddTodo from '../../components/smart/AddTodo'
import VisibleTodoList from '../../components/smart/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
