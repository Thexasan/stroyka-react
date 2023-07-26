import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons2(props) {
  return (
    <Stack spacing={2} direction="row">
  <Button variant="contained" color="info" sx={{backgroundColor:"white",color:"black"}}>{props.btn}</Button>
    </Stack>
  );
}