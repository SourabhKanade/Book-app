import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBookList, fetchAscBookList, fetchDescBookList } from './redux/BookReducer';
import Navbar from './Components/Navbar';
import Mainrouter from './Components/Mainrouter';

const App = () => {

  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const FullBooksData = useSelector(state => state.bookreducer.Booklist.data);


  useEffect(() => {
    dispatch(fetchAllBookList());
    dispatch(fetchAscBookList());
    dispatch(fetchDescBookList());

}, []);

console.log(FullBooksData, "pay");
console.log(store.bookreducer.Booklist.data, "pay_");

  return(

  <div>
  <Navbar />
  <Mainrouter />
  </div>

  )
}

export default App