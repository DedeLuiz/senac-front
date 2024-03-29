import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CadastroPaciente from '../layout/core/cadastro-paciente';
import ConsultaAgendamento from '../layout/core/consulta-agendamento';

const accordionStyle = {
  marginBottom: '20px', // Adiciona margem inferior ao Accordion
};

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const modal1Style = {
  ...modalStyle,
  width: 1000,
};

const modal2Style = {
  ...modalStyle,
  width: 1500, // Define um tamanho maior para o segundo modal
};

export default function PatientAccordionModal() {
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);

  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  return (
    <div>
      {/* Accordion 1 */}
      <Accordion style={accordionStyle}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Consulta</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button onClick={handleOpenModal1}>Abrir Modal 1</Button>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion style={accordionStyle}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Cadastro de Paciente</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button onClick={handleOpenModal2}>Abrir Modal 2</Button>
        </AccordionDetails>
      </Accordion>

      {/* Modal 1 - Tela de Consulta */}
      <Modal
              open={openModal1}
              onClose={handleCloseModal1}
              aria-labelledby="modal1-modal-title"
              aria-describedby="modal1-modal-description"
              >
              <Box sx={modal1Style}>
                <ConsultaAgendamento />
              </Box>
              </Modal>

              <Modal
              open={openModal2}
              onClose={handleCloseModal2}
              aria-labelledby="modal2-modal-title"
              aria-describedby="modal2-modal-description"
              >
              <Box sx={modal2Style}>
                <CadastroPaciente />
              </Box>
            </Modal>
    </div>
  );
}
