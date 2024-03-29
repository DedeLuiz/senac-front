import { RouterProvider } from 'react-router-dom';
import '../src/styles/agendamento.css';
import '../src/styles/cadastro-paciente.css';
import '../src/styles/perfil.css';
import '../src/styles/ficha-anamnese.css';
import '../src/styles/login.css';
import '../src/styles/cadastro-profissional.css';
import '../src/styles/consulta-agendamento.css';
import router from './main/config/route';



function App() {
  return (
    <RouterProvider router={router} />  
  );
}

export default App;
