// CadastroPaciente.js
import React from 'react';

function CadastroPaciente() {
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
                                  
            <button type="submit">Cadastrar</button>
            <button className="ficha-anamnese-button" type="button">Ficha Anamnese</button>
        </form>

    </div>
  );
}

export default CadastroPaciente;
