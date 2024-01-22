import React from 'react';
import Addcourse from '../componennts/Addcourse';
import { Divider, Container, useTheme, useMediaQuery } from '@mui/material';
import CourseColumn from '../componennts/CourseColumn.js';
import SideBar from '../componennts/SideBar.js';

export default function Courses() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Container
        sx={{
          marginLeft: { xs: 'auto', sm: isSmallScreen ? 'auto' : 35 },
        }}
      >
        <SideBar />
        <Addcourse />
        <Divider />
        <CourseColumn />
      </Container>
    </div>
  );
}
