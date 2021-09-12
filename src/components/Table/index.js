import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Styles.scss';
import NewForm from '../formSave/index';
import FormEdit from '../formEdit/index';
import { deleteData } from '../../redux/action/action';

const useStyles = makeStyles({
  container: {
    maxWidth: '95%',
    marginTop: '80px',
    width: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Montserrat, sansSerif',
  },
  table: {
    maxWidth: '100%',
  },
  tbcell: {
    fontWeight: '500',
  },
  tbcells: {
    fontWeight: 'bolder',
    fontFamily: 'Montserrat, sansSerif'
  },
  tbrow: {
    height: 70,
  },
 
  btnone: {
    padding: 4,
    marginLeft: 3, 
    width: '27%',
    background: 'rgb(6, 47, 59)',
    borderRadius: '4px',
    color: '#fff',
    border: '1px solid black',
    cursor: 'pointer',
    '&:hover': {
      background: '#fff',
      color: 'black'
    } 
  },
  btntwo: {
    padding: 4,
    marginLeft: 3, 
    width: '30%',
    background: 'rgb(245, 36, 9)',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    '&:hover': {
      background: '#fff',
      color: 'black'
    } 
  }

});

function createData(name, email, phone) {
  return { name, email, phone };
}


export default function DenseTable(props) {

  const classes = useStyles();

  const [openForm, setOpenForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [KN, setKN] = useState('');

  const dataInfo = useSelector(state => state.infoReducer.info);
  const dispatch = useDispatch();


  const data = dataInfo.map((data) => 
    createData(data.name, data.email, data.phone)
  );



  const deleteInfo = (e) => {
    const event = e.target.value;
    const actionDel = deleteData(event);
    dispatch(actionDel)
  }

  const openInfo = () => {
    setOpenForm(!openForm);
  }
  const openEdit = (e) => {
    setEditForm(!editForm);
    const event = e.target.value;
    setKN(event)
  }
  return (

    <div className="tables" >
      <h1>INFORMATION CONTACT</h1>
      <TableContainer className={classes.container} component={Paper} >
      <button className='btns' onClick={openInfo}>Create Information</button>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className={classes.tbrow}>
              <TableCell className={classes.tbcells} align="left">Name</TableCell>
              <TableCell className={classes.tbcells} align="center">Email</TableCell>
              <TableCell className={classes.tbcells} align="center">Phone</TableCell>
              <TableCell className={classes.tbcells} align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name} className={classes.tbrow}>
                <TableCell className={classes.tbcell} component="th" scope="row" >
                  {row.name}
                </TableCell>
                <TableCell className={classes.tbcell} align="center">{row.email}</TableCell>
                <TableCell className={classes.tbcell} align="center">{row.phone}</TableCell>
                <TableCell className="button" align="center">
                  <button className={classes.btnone} type="button" value={row.name} onClick={openEdit}>Edit</button>
                  <button className={classes.btntwo} type="button" value={row.name}  onClick={deleteInfo} >Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={openForm? "wrap__form" : "wrap__forms"}>
          <NewForm  onClick={() => setOpenForm(!openForm)} />
        </div>
        <div className={editForm? "wrap__form" : "wrap__forms"}>
          <FormEdit keyName={KN}  onClick={() => setEditForm(!editForm)} />
      </div>
      </TableContainer>
    </div>
  );
}
