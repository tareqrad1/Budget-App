import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Forms from '../Form/Forms';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundImage: 'linear-gradient(45deg, #283334, #303541)',
  width: 700,
  b: '',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 function Buttons() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} sx={{bgcolor:'#714fda'}}>+</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Forms />
        </Box>
      </Modal>
    </div>
  );
}

export default Buttons