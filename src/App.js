import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { fetchItems } from './api';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setItems(data);
      setFilteredItems(data);
    };
    getItems();
  }, []);

  const handleSearch = (query) => {
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
      <Box my={4}>
        <Typography variant="h4" gutterBottom align="center" style={{ color: '#4a90e2' }}>
          Item List
        </Typography>
        <SearchBar onSearch={handleSearch} />
        <ItemList items={filteredItems} />
      </Box>
    </Container>
  );
  
};

export default App;
