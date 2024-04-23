// CadastroPaciente.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function CadastroPaciente(): JSX.Element {
  const [openSnackbarSalvar, setOpenSnackbarSalvar] = React.useState<boolean>(false);
  const [snackbarMessageSalvar, setSnackbarMessageSalvar] = React.useState<string>(''); 

  const handleClickSnackbarSalvar = (): void => {
      setOpenSnackbarSalvar(true);
      setSnackbarMessageSalvar('Paciente cadastrado com sucesso!');
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
      setSnackbarMessageCancelar('Cadastro cancelado!');
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
      <h1>Cadastro de Paciente</h1>
      
        <form>
            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required />
            
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
                   
            <label htmlFor="data-nascimento">Data de Nascimento:</label>
            <input type="date" id="data-nascimento" name="data-nascimento" required />
            
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required />
            
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required />
            
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
            
            <label htmlFor="genero">Gênero:</label>
            <select id="genero" name="genero" required>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
            </select>
                                  
            <Button onClick={handleClickSnackbarSalvar} style={{ textTransform: 'none' }}>Cadastrar Paciente</Button>
            <Link to="/ficha-anamnese" className="ficha-anamnese-button">Ficha Anamnese</Link>
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

export default CadastroPaciente;
