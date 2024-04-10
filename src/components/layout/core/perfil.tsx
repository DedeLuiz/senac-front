import React, { useState } from 'react';

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
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <img src={imagemPerfil} alt="Imagem de Perfil" style={{ width: 260, height: 300, borderRadius: 5, objectFit: 'cover' }} />
        <br />
        <input type="file" accept="image/*" onChange={handleSelectImage} style={{ marginTop: 10, width: 200 }} />
        <button onClick={handleSaveImage} style={{ marginTop: 10, backgroundColor: '#CCCCCC', color: '#000000', border: 'none', padding: '5px 10px', borderRadius: '5px', height: 33 }}>Salvar Imagem</button>
      </div>
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
  );
};

export default PerfilPaciente;