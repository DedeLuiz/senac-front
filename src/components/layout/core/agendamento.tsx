// Agendamento.js
import React from 'react';

function Agendamento() {
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

            <button type="submit">Agendar</button>
            
            
      </form>
    </div>
        
        
        
    
  );
}

export default Agendamento;
