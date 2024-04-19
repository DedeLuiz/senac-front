import { createBrowserRouter } from "react-router-dom";
        //import ResponsiveDrawer from "../../../components/layout/core/ResponsiveDrawer";
import Login from "../../../components/layout/core/login";
import PerfilPaciente from "../../../components/layout/core/perfil";
import CadastroPaciente from "../../../components/layout/core/cadastro-paciente";
import Agendamento from "../../../components/layout/core/agendamento";
import CadastroProfissional from "../../../components/layout/core/cadastro-profissional";
import ConsultaAgendamento from "../../../components/layout/core/consulta-agendamento";
import FichaAnamnese from "../../../components/layout/core/ficha-anamnese";
import PersistentDrawerLeft from "../../../components/layout/core/PersistentDrawerLeft";
import Inicio from "../../../components/layout/core/inicio"

const router = createBrowserRouter([
        {
            path: '/',
            element: <PersistentDrawerLeft />,
            children: [
                //{
                    //path: '/home', 
                    //element: (<>Essa é a home</>)
                //},
                
                {
                    path: '/inicio', 
                    element: <Inicio />
                },

                {
                    path: 'agendamento', 
                    element: <Agendamento />
                },

                {
                    path: 'cadastro-paciente', 
                    element: <CadastroPaciente />
                },

                {
                    path: 'perfil',
                    element: <PerfilPaciente />
                },

                {
                    path: 'login',
                    element: <Login />
                },

                {
                    path: 'cadastro-profissional',
                    element: <CadastroProfissional />
                },

                {
                    path: 'consulta-agendamento',
                    element: <ConsultaAgendamento />
                },

                {
                    path: 'ficha-anamnese',
                    element: <FichaAnamnese />
                }
            ]
        }
    ]);

export default router