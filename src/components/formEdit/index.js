import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import './Styles.scss';
import { editDatas } from '../../redux/action/action';
import { editData } from '../../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';

const FormEdit = ({onClick, keyName}) => {

  const dispatch = useDispatch();

  useEffect(
    () => {
      const getinfo = editDatas(keyName);
      dispatch(getinfo); 
    }, [keyName]
  );


  const dataInformation = [useSelector(state => state.infoReducer.getinfo[0])];
  const formik = useFormik({
    initialValues: {
      name: dataInformation.name,
      email: dataInformation.email,
      phone: dataInformation.phone,
    },
    onSubmit: values => {

        const key = {
          name: values.name,
          email: values.email,
          phone: values.phone,
        }
        const actionEdit =  editData(key);
        dispatch(actionEdit);
    },
  });

  return (
    <div className="forms">
    <h1>Edit Information</h1>
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
      <button type="submit" onClick={onClick}>Save Edit</button>
    </form>
    </div>
  );
};

export default FormEdit;