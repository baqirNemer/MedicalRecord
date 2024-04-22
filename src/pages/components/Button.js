
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" style={{ backgroundColor: '#008A88' }} >READ MORE</Button>
    </Stack> 
  );
}
