import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, Outlet } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PatientAccordionModal from '../../modal/PatientAccordionModal';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openPatientModal, setOpenPatientModal] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenPatientModal = () => {
    setOpenPatientModal(true);
  };

  const handleClosePatientModal = () => {
    setOpenPatientModal(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
          {/* Adicionando o Avatar à direita */}
          <Stack direction="row" spacing={2} sx={{ marginLeft: 'auto', alignItems: 'center' }}>
            <Avatar
              src="/broken-image.jpg"
              sx={{ bgcolor: deepOrange[500] }}
            ></Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#F7941D', // Cor de fundo do Drawer
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Toolbar sx={{ backgroundColor: '#F7941D', height: 'auto' }}>
            <img 
              src="https://vestibular.sc.senac.br/img/brand/logo-ext-white.png" 
              alt="logo" 
              style={{ width: '180px', height: 'auto' }} // Defina as dimensões desejadas
            />
            <IconButton onClick={handleDrawerClose} sx={{ position: 'absolute', right: '0', top: '0' }}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Toolbar>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {texto: 'Início', icon: <HomeIcon sx={{ color: '#fff' }} />, to: "/inicio"}, 
            {texto: 'Agendamentos', icon: <CalendarMonthIcon sx={{ color: '#fff' }} />, to: "/agendamento"}, 
            {texto: 'Paciente', icon: <HowToRegIcon sx={{ color: '#fff' }} />, action: handleOpenPatientModal}, 
            {texto: 'Perfil', icon: <AccountBoxIcon sx={{ color: '#fff' }} />, to: "/perfil"},
            {texto: 'Profissional', icon: <PersonAddIcon sx={{ color: '#fff' }} />, to: "/cadastro-profissional"}, 
                    //{texto: 'Ficha Anamnese', icon: <FeedIcon sx={{ color: '#fff' }} />, to: "/ficha-anamnese"},   
                    //{texto: 'Consulta', icon: <QueryBuilderTwoToneIcon sx={{ color: '#fff' }} />, to: "/consulta-agendamento"},  
            {texto: 'Sair', icon: <ExitToAppIcon sx={{ color: '#fff' }} />, to: "/login"}
          ].map((item, index) => (
            <ListItem key={index} disablePadding onClick={item.action}>
              <ListItemButton component={item.to ? Link : 'button'} to={item.to} onClick={item.action}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.texto} sx={{ color: '#fff' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
      <Modal
        open={openPatientModal}
        onClose={handleClosePatientModal}
        aria-labelledby="patient-modal-title"
        aria-describedby="patient-modal-description"
      >
        <Box sx={{ ...modalStyle, top: '30%' }}>
          <PatientAccordionModal />
        </Box>
      </Modal>
    </Box>
  );
}
