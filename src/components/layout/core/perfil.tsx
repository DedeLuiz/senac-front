import React from 'react';

function PerfilPaciente() {
  // Aqui você pode adicionar lógica para carregar os dados do paciente
  const paciente = {
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
  };

  return (
    <div>
      <h1>Perfil do Paciente</h1>
      <div>
        <h2>Dados Pessoais</h2>
        <p><strong>Nome:</strong> {paciente.nome}</p>
        <p><strong>Idade:</strong> {paciente.idade}</p>
        <p><strong>Gênero:</strong> {paciente.genero}</p>
        <p><strong>Endereço:</strong> {paciente.endereco}</p>
        <p><strong>Telefone:</strong> {paciente.telefone}</p>
        <p><strong>E-mail:</strong> {paciente.email}</p>
        <p><strong>CPF:</strong> {paciente.cpf}</p>
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
}

export default PerfilPaciente;
