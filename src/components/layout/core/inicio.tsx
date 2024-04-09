import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container, Paper } from '@mui/material';

const images = [
  'https://source.unsplash.com/featured/?podiatry',
  'https://source.unsplash.com/featured/?feet',
  'https://source.unsplash.com/featured/?bare-feet'
];

const Inicio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Box mt={5} mb={10} textAlign="center">
        <Typography variant="h2" gutterBottom>
          Bem-vindo à nossa clínica de Podologia
        </Typography>
        <Typography variant="h5" gutterBottom>
          Especialistas em cuidados com os pés
        </Typography>
      </Box>
      <Paper style={{ marginBottom: '20px' }}>
        <img
          src={images[currentImageIndex]}
          alt="Podologia"
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
        />
      </Paper>
      <Box textAlign="center">
        <Typography variant="body1" gutterBottom>
          Na nossa clínica, oferecemos uma variedade de serviços de podologia,
          incluindo tratamento de calos e calosidades, unhas encravadas,
          verrugas plantares, e muito mais. Nossa equipe experiente está aqui
          para ajudar a manter seus pés saudáveis e felizes.
        </Typography>
      </Box>
    </Container>
  );
};

export default Inicio;
