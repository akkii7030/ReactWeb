import React from 'react';
import { TextField, Paper, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = ({ onSearch }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper style={{ padding: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center', backgroundColor: '#fce4ec' }}>
      <Box flexGrow={1}>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          onChange={(e) => onSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#d32f2f' }} />
              </InputAdornment>
            ),
          }}
          style={{ backgroundColor: '#fff', borderRadius: '4px' }}
        />
      </Box>
    </Paper>
  );
};

export default SearchBar;
