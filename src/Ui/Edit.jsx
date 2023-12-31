import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Forms from '../Form/Forms';
import EditIcon from '@mui/icons-material/Edit';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundImage: 'linear-gradient(45deg, #283334, #303541)',
  width: 700,
  b: '',
  boxShadow: 24,
  p: 4,
};

 function Edit({eleData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className='tareq' variant="contained" onClick={handleOpen} sx={{bgcolor:'red'}}><EditIcon /></Button>   

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
          <Forms eleData={eleData} />
        </Box>
      </Modal>
    </div>
  );
}

export default Edit

