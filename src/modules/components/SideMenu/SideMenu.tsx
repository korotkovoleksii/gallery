/* eslint-disable @typescript-eslint/naming-convention */
import { Box, Drawer, ListItem, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';

import { colors } from 'styles/variables';
import { mainSideMenuItem } from './consts/sideMenuItems';
import { Link } from 'react-router-dom';

const SideMenu = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  };
  const drawer = (
    <Box>
      <List disablePadding>
        {mainSideMenuItem.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <Link to={item.route} style={{ textDecoration: 'none', color: colors.light.textPrimary }}>
              <ListItemButton
                sx={{
                  width: 164,
                  borderRadius: '44px',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                  '&.Mui-selected': {
                    bgcolor: colors.light.selectedBtnMenuBG,
                    color: colors.light.selectedBtnMenuItem,
                    '& .MuiListItemIcon-root': { color: colors.light.selectedBtnMenuItem },
                  },
                }}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      sx={{
        width: 306,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          position: 'static',
          bgcolor: 'transparent',
          boxSizing: 'border-box',
          border: 'none',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {drawer}
    </Drawer>
  );
};

export default SideMenu;
