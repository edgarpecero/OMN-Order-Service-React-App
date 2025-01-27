import { ReactNode } from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import logo from '../../../logo.svg';

interface LayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const ReactLogo = () => <img src={logo} className="App-logo" alt="logo" style={{ width: 80, height: 80 }} />;

const Layout = ({ title, children, subtitle }: LayoutProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
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
      <Typography variant='body1'>
        {subtitle ?? `To receive email notifications about your order status, simply create an order and fill in your details. We'll keep you updated every step of the way!`}
      </Typography>

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
