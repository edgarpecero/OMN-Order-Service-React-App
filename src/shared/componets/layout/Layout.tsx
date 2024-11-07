import { ReactNode } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import logo from '../../../logo.svg';

interface LayoutProps {
  title: string;
  children: ReactNode; 
}

const ReactLogo = () => <img src={logo} className="App-logo" alt="logo" style={{ width: 80, height: 80 }} />;

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3, 
        gap: 3, 
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <ReactLogo />
        <Typography variant="h4" >
          {title}
        </Typography>
        <ReactLogo />
      </Box>

      {/* Data Grid Section or any other content */}
      <Paper
        sx={{
          width: '100%',
          maxWidth: 1200, 
          padding: 3,
          backgroundColor: '#f5f5f5', 
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default Layout;
