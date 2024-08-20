import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBookList, postaBook } from "../redux/BookReducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const FullBooksData = useSelector((state) => state.bookreducer.Booklist.data);

  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    author: "",
    country: "",
    language: "",
    link: "",
    pages: "",
    title: "",
    year: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      { ...formData, id: Math.floor(Math.random() * 1000) },
      "mybook"
    );
    dispatch(postaBook({ ...formData, id: Math.floor(Math.random() * 1000) }));

    //     "author": "Divya",
    //     "country": "India",
    //     "language": "Hindi",
    //     "link": "melwek",
    //     "pages": "290",
    //     "title": "Dreams",
    //     "year": "2020",
    //     "id": 19
    //   },

    setSnackbarOpen(true);
    setOpen(false);
  };

  React.useEffect(() => {
    dispatch(fetchAllBookList());
    // dispatch(fetchAscBookList());
    // dispatch(fetchDescBookList());
  }, [open]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div style={{    marginTop: "14px"}}>
      <Button variant="outlined" onClick={handleOpen}>Add to Books List</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleSubmit} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a New Book
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Link"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Pages"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />

          {/* Button Group for Save and Close */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 2, justifyContent: "flex-end" }}
          >
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Close
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Snackbar for Save Confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message="Book saved successfully!"
      />
    </div>
  );
}
