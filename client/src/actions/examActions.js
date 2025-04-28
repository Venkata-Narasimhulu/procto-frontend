import axios from 'axios';
import { GET_ERRORS } from './types'; // if you want to dispatch errors

export const validateExamCode = (examCode) => dispatch => {
  axios.get('https://practo-backend-ib8w.onrender.com/api/exams/examByCode', {
    params: {
      exam_code: examCode.trim()
    }
  })
  .then(res => {
    console.log('Exam Details:', res.data);
    // Proceed to exam page or whatever you want
  })
  .catch(err => {
    console.error('Exam Code Invalid:', err.response.data);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  });
};
