import React from 'react';
import { useFormik } from 'formik';
import './Styles.scss';
import { saveData } from '../../redux/action/action';
import { useDispatch } from 'react-redux';

const NewForm = ({onClick, click}) => {

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: values => {
        const key = {
          name: values.name,
          email: values.email,
          phone: values.phone,
        }
        const actionEdit =  saveData(key);
        dispatch(actionEdit);
    },
  });
  return (
    <div className="forms">
    <button className='btns_close' onClick={onClick}><i class="fas fa-times"></i></button>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <button type="submit" onClick={onClick}>Create Information</button>
    </form>
    </div>
  );
};

export default NewForm;