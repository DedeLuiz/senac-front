// Agendamento.js
import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Agendamento(): JSX.Element {
  const [openSnackbarSalvar, setOpenSnackbarSalvar] = React.useState<boolean>(false);
  const [snackbarMessageSalvar, setSnackbarMessageSalvar] = React.useState<string>(''); 

  const handleClickSnackbarSalvar = (): void => {
      setOpenSnackbarSalvar(true);
      setSnackbarMessageSalvar('Consulta confirmada com sucesso!');
  };

  const handleCloseSnackbarSalvar = (event: React.SyntheticEvent | Event, reason?: string): void => {
      if (reason === 'clickaway') {
          return;
      }
      setOpenSnackbarSalvar(false);
  };

  const [openSnackbarCancelar, setOpenSnackbarCancelar] = React.useState<boolean>(false);
  const [snackbarMessageCancelar, setSnackbarMessageCancelar] = React.useState<string>('');

  const handleClickSnackbarCancelar = (): void => {
      setOpenSnackbarCancelar(true);
      setSnackbarMessageCancelar('Consulta cancelada!');
  };

  const handleCloseSnackbarCancelar = (event: React.SyntheticEvent | Event, reason?: string): void => {
      if (reason === 'clickaway') {
          return;
      }
      setOpenSnackbarCancelar(false);
  };

  const actionSalvar = (
      <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbarSalvar}>
              <CloseIcon fontSize="small" />
          </IconButton>
      </React.Fragment>
  );

  const actionCancelar = (
      <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbarCancelar}>
              <CloseIcon fontSize="small" />
          </IconButton>
      </React.Fragment>
  );

  return (
    <div>
      <h1>Agendamento</h1>
      
        <form>
            <label htmlFor="data_hora">Data e Hora:</label>
            <input type="datetime-local" id="data_hora" name="data_hora" />
            
            <label htmlFor="paciente">Paciente:</label>
            <input type="text" id="paciente" name="paciente" />

            <label htmlFor="podologo">Podólogo:</label>
            <input type="text" id="podologo" name="podologo" />
                        
            <label htmlFor="status">Status:</label>
            <select id="status" name="status">
                <option value="agendada">Agendada</option>
                <option value="confirmada">Confirmada</option>
                <option value="cancelada">Cancelada</option>
            </select>

            <label htmlFor="descricao">Descrição do exame:</label>
            <input type="text" id="descricao" name="descricao" />

            <Button onClick={handleClickSnackbarSalvar} style={{ textTransform: 'none' }}>Agendar</Button>
            <Button onClick={handleClickSnackbarCancelar} style={{ textTransform: 'none' }}>Cancelar</Button> {/* Adicione a classe aqui */}

                            <Snackbar
                                open={openSnackbarSalvar}
                                autoHideDuration={6000}
                                onClose={handleCloseSnackbarSalvar}
                                message={snackbarMessageSalvar}
                                action={actionSalvar}
                            />
                            <Snackbar
                                open={openSnackbarCancelar}
                                autoHideDuration={5000}
                                onClose={handleCloseSnackbarCancelar}
                                message={snackbarMessageCancelar}
                                action={actionCancelar}
                            />
            
      </form>
    </div>
        
        
        
    
  );
}

export default Agendamento;
