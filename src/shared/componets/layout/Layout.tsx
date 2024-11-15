import { ReactNode } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import logo from '../../../logo.svg';

interface LayoutProps {
  title?: string;
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
        width: '100%',
        backgroundColor: 'primary.main',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', }}>
          <ReactLogo />
          <Typography variant="h4" >
            Edgar's Order Management App
          </Typography>
          <ReactLogo />
        </Box>
        <Typography variant="body1" >
          To receive email notifications about your order status, simply create an order and fill in your details. We'll keep you updated every step of the way!
        </Typography>
      </Box>

      {/* Data Grid Section or any other content */}
      <Paper
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: 1200,
          padding: 4,
          backgroundColor: '#f5f5f5',
          display: 'flex',
          overflow: 'auto',
          flexDirection: 'column',
        }}
      >
        {children}
      </Paper >
    </Box >
  );
};

export default Layout;
