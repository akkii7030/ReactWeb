import React from 'react';
import { List, ListItem, ListItemText, Paper, Divider, ListItemAvatar, Avatar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FolderIcon from '@mui/icons-material/Folder';

const ItemList = ({ items }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper style={{ maxHeight: 400, overflow: 'auto', padding: '20px', backgroundColor: '#e3f2fd' }}>
      <List>
        {items.map(item => (
          <React.Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: '#4caf50' }}>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={item.body}
                primaryTypographyProps={{ style: { color: '#ff9800' } }}
                secondaryTypographyProps={{ style: { color: '#2196f3' } }}
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default ItemList;
