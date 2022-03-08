import { Button, Dialog, Grid, Table, TableCell, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './common.css';
import { Delete, Edit } from '@material-ui/icons';
function HeaderComponent() {
  const [text, setText] = useState('');
  const [listTodo, setListTodo] = useState([]);
  const [load, setLoad] = useState(0);
  const [openDiaLog, setOpenDiaLog] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [indexContent, setIndexContent] = useState();

  useEffect(() => {
    setListTodo(listTodo);
  }, [load]);

  const handClickAddListTodo = () => {
    const dataFm = {
      content: text,
    }
    const count = listTodo.push(dataFm)
    setLoad(new Date() * 1)

  }

  const deleteListTodo = (index) => {
    listTodo.splice(index, 1);
    setListTodo(listTodo);
    setLoad(new Date() * 1)
  };

  const editListTodo = (data, index) => {
    setOpenDiaLog(true)
    setEditContent(data)
    setIndexContent(index)
  }

  const handClickEditListTodo = () => {
    listTodo[indexContent].content = editContent;
    setListTodo(listTodo);
    setLoad(new Date() * 1)
    setOpenDiaLog(false)
  }

  return (
    <div>
      <Grid container spacing={8} direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid xs={3}>
        </Grid>
        <Grid xs={6} style={{ marginTop: 20, display: 'flex' , justifyContent: 'center'}} >
          <div>
            <h1>To do List</h1>
            <TextField
              id="outlined-multiline-static"
              label="Nội dung"
              multiline
              value={text}
              onChange={(e) => setText(e.target.value)}
              variant="outlined"
            />
            <Button size="large" variant="contained" color="primary" onClick={handClickAddListTodo} >Add</Button>
            {Array.isArray(listTodo) && listTodo.length > 0 ? listTodo.map((item, index) =>
              <div style={{ marginTop: 20, display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  value={item.content}
                  variant="outlined"
                  disabled
                  
                />
                <Edit style={{ cursor: 'pointer' }} onClick={() => editListTodo(item.content, index)} />
                <Delete style={{ cursor: 'pointer' }} onClick={() => deleteListTodo(index)} />
              </div>
            ) : null}
          </div>

        </Grid>
        <Grid xs={3}>





        </Grid>
        <Dialog
          open={openDiaLog}
          onClose={() => setOpenDiaLog(false)}
          aria-labelledby="customized-dialog-title"
          fullWidth
        >
          <Grid container style={{ padding: '10px 24px' }}>
            <Grid xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Nội dung"
                multiline
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid xs={12}>
              <Button style={{ marginTop: 20 }} color="primary" variant="outlined" onClick={handClickEditListTodo} >Lưu</Button>
            </Grid>


          </Grid>

        </Dialog>
      </Grid>
      {/* day la ma jsx */}



    </div>
  )
}
export default HeaderComponent;