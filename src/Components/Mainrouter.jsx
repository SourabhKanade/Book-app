import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCardLayout from "./BookCardLayout";
import { Grid, Container, TablePagination, Typography } from "@mui/material";
// import { fetchAllBookList, fetchAscBookList, fetchDescBookList } from './redux/BookReducer';
import Dialog from './Dialog';


const Mainrouter = () => {

// const [rows, rowchange] = useState([]);
const [page, pagechange] = useState(0);
const [rowperpage, rowperpagechange] = useState(5);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const FullBooksData = useSelector((state) => state.bookreducer.Booklist.data);
  const Bookquerylist = useSelector((state) => state.bookreducer.Bookquerylist.data);
  const Booksearchquery = useSelector((state) => state.bookreducer.Booksearchquery);
  
  const handlechangepage = (event, newpage) => {
    pagechange(newpage)
}
const handleRowsPerPage = (event) => {
    rowperpagechange(+event.target.value)
    pagechange(0);
}

  console.log("book_Full_list:" ,FullBooksData);
  console.log("book_search", Bookquerylist, Booksearchquery );


  return (
    <Container maxWidth="lg">
      <Dialog />
      <Grid
        container
        spacing={12}
        style={{ marginTop: "20px", 
        display: "flex",
            alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
         }}
        //  sx={{display: "flex",
        //     alignContent: "center",
        //     flexWrap: "wrap",
        //     justifyContent: "space-evenly"
        //     }}>>
      >

{/* {store.process.processlist.length > 1 && (
        {store.process.processlist.filter(li => li.processname.toLowerCase().includes(store.master.search.toLowerCase())).map((item) =>
)} */}

{Booksearchquery !== "" ? (
  // If there's a search query, display the filtered results
  Bookquerylist?.length > 0 ? (
    Bookquerylist
      .slice(page * rowperpage, page * rowperpage + rowperpage)
      .map((book, index) => (
        <BookCardLayout 
          key={index} 
          title={book?.title}
          author={book?.author}
          country={book?.country}
          pages={book?.pages}
          year={book?.year}
        />
      ))
  ) : (
    <Typography style={{display: "flex"}}>No Data found.</Typography>
  )
) : (
  // If there's no search query, display the full list
  FullBooksData
    ?.slice(page * rowperpage, page * rowperpage + rowperpage)
    ?.map((book, index) => (
      <BookCardLayout 
        key={index}
        title={book?.title}
        author={book?.author}
        country={book?.country}
        pages={book?.pages}
        year={book?.year}
      />
    ))
)}


        {/* { Booksearchquery !== "" && Bookquerylist?.length > 0 ?
          Bookquerylist?.slice(page * rowperpage, page * rowperpage + rowperpage)?.map((book, index) => (
          <BookCardLayout 
          key={index} 
          title={book?.title}
          author={book?.author}
          country={book?.country}
          pages={book?.pages}
          year={book?.year}
          />
        )) : <Typography style={{display: "flex"}}> No Data found.</Typography> }
          
         { FullBooksData?.length > 0 ? FullBooksData?.slice(page * rowperpage, page * rowperpage + rowperpage)?.map((book, index) => (
          <BookCardLayout 
          key={index}
          title={book.title}
          author={book.author}
          country={book.country}
          pages={book.pages}
          year={book.year}
          />
        ))
        : <Typography> No Data</Typography>
        } */}

      </Grid>

      <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    rowsPerPage={rowperpage}
                    page={page}
                    count={FullBooksData?.length}
                    component="div"
                    onPageChange={handlechangepage}
                    onRowsPerPageChange={handleRowsPerPage}

                >

                </TablePagination>
    </Container>
  );
};

export default Mainrouter;


// {
//     "author": "Divya",
//     "country": "India",
//     "language": "Hindi",
//     "link": "melwek",
//     "pages": "290",
//     "title": "Dreams",
//     "year": "2020",
//     "id": 19
//   },