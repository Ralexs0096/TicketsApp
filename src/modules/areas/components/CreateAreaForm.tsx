import { Button, TextField, Typography } from '@mui/material';

const CreateAreaForm = () => {
  return (
    <>
      <Typography variant="h5" component="h2" mb={2} textAlign="left">
        Create a new Area
      </Typography>
      <TextField placeholder="Insert the Area Name" />
      <Button
        variant="contained"
        style={{ height: 54, width: 100, marginLeft: 10 }}
      >
        Add
      </Button>
    </>
  );
};

export default CreateAreaForm;
