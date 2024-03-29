import React from 'react';

function ConsultaAgendamento() {
  return (
  <div className="consulta-container">
    <h1>Consulta</h1>
    
    <form>
      <label htmlFor="data_hora">Data e Hora:</label>
      <input type="datetime-local" id="data_hora" name="data_hora" />
      
      <label htmlFor="paciente">Paciente:</label>
      <input type="text" id="paciente" name="paciente" />

      <label htmlFor="podologo">Podólogo:</label>
      <input type="text" id="podologo" name="podologo" />

      <button type="submit" className="consultar-button">Consultar</button>
      
    </form>
  </div>




  );
}

export default ConsultaAgendamento;
