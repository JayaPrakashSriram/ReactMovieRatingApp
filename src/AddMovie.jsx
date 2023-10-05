import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from "yup";
import { API } from "./global";

const formValidationSchema = yup.object({
  name: yup.string().required("A cool name is in need"),
  poster: yup
    .string()
    .required("A cool poster is in need") 
    .url(),
  rating: yup
    .number()
    .required("A cool rating is in need") 
    .min(0, "provide rating at the scale of 0.0 to 10.0")
    .max(10, "provide rating at the scale of 0.0 to 10.0"),
  summary: yup
    .string()
    .required("A cool summary is in need") 
    .min(20, "Need a bigger Summary"),
  trailer: yup
    .string()
    .required("A cool trailer is in need") 
    .url(),
});

export function AddMovie() {
  const {handleSubmit, handleChange, handleBlur, values, touched, errors} =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
        validationSchema: formValidationSchema,
        onSubmit: (newMovie) => {
          console.log("Form values", newMovie);
          addMovie(newMovie)
        },
  });

const navigate = useNavigate();

const addMovie = async(newMovie) => {
  console.log(newMovie);

  await fetch(`${API}/movies`, { //Three steps of POST operation
    method:'POST',                                          // 1. method -POST
    body: JSON.stringify(newMovie),                         // 2. data (newMovie) - body & JSON
    headers:{                                               // 3. Header - JSON
      "Content-Type": "application/json",
    },
  });
  navigate('/movies');
};

  return (
    <form onSubmit={handleSubmit} className='movieForm'>
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        label="Name"
        varient="Outlined"
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name: null}
      />
      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        label="Poster"
        varient="Outlined"
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster: null}
      />
      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        label="Rating"
        varient="Outlined"
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating: null}
      />
      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        label="Summary"
        varient="Outlined"
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary: null}
      />      
      <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        label="Trailer"
        varient="Outlined"
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer: null}
      />
      <Button
        variant="contained"
        type="submit">
        Add Movie
      </Button>
    </form>
  );
}