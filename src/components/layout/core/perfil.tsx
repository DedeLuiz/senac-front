import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

interface Paciente {
  nome: string;
  idade: number;
  genero: string;
  endereco: string;
  telefone: string;
  email: string;
  cpf: string;
  planoDeSaude: string;
  numeroCarteirinha: string;
  historicoMedico: string;
}

const PerfilPaciente: React.FC = () => {
  const [imagemPerfil, setImagemPerfil] = useState('');
  const [paciente, setPaciente] = useState<Paciente>({
    nome: 'Fulano de Tal',
    idade: 30,
    genero: 'Masculino',
    endereco: 'Rua Exemplo, 123',
    telefone: '(00) 1234-5678',
    email: 'fulano@example.com',
    cpf: '123.456.789-00',
    planoDeSaude: 'Plano de Saúde XYZ',
    numeroCarteirinha: '1234567890',
    historicoMedico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo urna nec commodo dapibus.',
  });

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagemPerfil(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    // Lógica para salvar a imagem aqui
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <h1>Perfil do Paciente</h1>
        <div>
          <strong>Nome:</strong> {paciente.nome}
        </div>
        <div>
          <strong>CPF:</strong> {paciente.cpf} {' '}
          <strong>Idade:</strong> {paciente.idade} {' '}
          <strong>Telefone:</strong> {paciente.telefone} {' '}
          <strong>Gênero:</strong> {paciente.genero}
        </div>
        <div>
          <strong>Endereço:</strong> {paciente.endereco}
        </div>
        <div>
          <strong>E-mail:</strong> {paciente.email}
        </div>
        <div>
          <h2>Plano de Saúde</h2>
          <p><strong>Plano:</strong> {paciente.planoDeSaude}</p>
          <p><strong>Número da Carteirinha:</strong> {paciente.numeroCarteirinha}</p>
        </div>
        <div>
          <h2>Historico Médico</h2>
          <p>{paciente.historicoMedico}</p>
        </div>
      </div>
      <Stack direction="column" alignItems="center" spacing={4} sx={{ marginRight: '100px' }}>
        {imagemPerfil ? (
          <Avatar alt="Imagem de Perfil" src={imagemPerfil} sx={{ width: 200, height: 200 }} />
        ) : (
          <>
            <input type="file" accept="image/*" onChange={handleSelectImage} style={{ display: 'none' }} id="avatar-input" />
            <label htmlFor="avatar-input">
              <Avatar alt="Upload Image" sx={{ backgroundColor: 'white/black', width: 200, height: 200 }}>
                {imagemPerfil ? null : <AccountCircleIcon style={{ fontSize: 200 }} />}
              </Avatar>
            </label>
          </>
        )}
        <Stack direction="row" spacing={2}>
          {imagemPerfil && (
            <>
              <Button variant="contained" onClick={handleSaveImage}>
                Salvar Foto
              </Button>
              <Button variant="outlined" onClick={() => setImagemPerfil('')}>
                Cancelar
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </div>
  );
};

export default PerfilPaciente;
