
import React from 'react';

import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function FichaAnamnese(): JSX.Element {
    const [openSnackbarSalvar, setOpenSnackbarSalvar] = React.useState<boolean>(false);
    const [snackbarMessageSalvar, setSnackbarMessageSalvar] = React.useState<string>(''); 

    const handleClickSnackbarSalvar = (): void => {
        setOpenSnackbarSalvar(true);
        setSnackbarMessageSalvar('Dados salvos com sucesso!');
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
        setSnackbarMessageCancelar('Operação cancelada!');
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


                <form>
                    <div>
                        
                        <b>
                            <h1> Ficha De Anamnese </h1>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="numero">Ficha N.º</label>
                            <input type="text" id="numero" />
                        </b>
                        
                        <p></p>

                        <div className="ficha-anamnese">
                            <b>
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" id="nome" />
                            </b>
                        </div>
                        <p> 
                            <b>
                                <label htmlFor="ender">Endereço:</label>
                                <input type="text" id="ender" />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <label htmlFor="num">N.º</label>
                                <input type="text" id="num" />
                            </b>    
                        </p>
                        <p>
                            <b>
                                <label htmlFor="cidade">Cidade:</label>
                                <input type="text" id="cidade" />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <label htmlFor="cep">Cep:</label>
                                <input type="text" id="cep" />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <label htmlFor="data">Data de nascimento:</label>
                                <input type="date" id="data" />
                            </b>    
                        </p>

                        <b>Estado civil:</b>
                        <label htmlFor="sol">Solteiro(a):</label>
                        <input type="checkbox" id="sol" />
                        &nbsp;
                        <label htmlFor="cas">Casado(a):</label>
                        <input type="checkbox" id="cas" />
                        &nbsp;
                        <label htmlFor="viu">Viúvo(a):</label>
                        <input type="checkbox" id="viu" />
                        &nbsp;
                        <label htmlFor="des">Demasiado(a):</label>
                        <input type="checkbox" id="des" />

                        <b>
                            <p>
                            <label htmlFor="telefone">Telefone: </label>
                            <input
                                type="text"
                                id="telefone"
                                className="input-padrao"
                                required
                                placeholder="(xx) xxxxx-xxxx"
                            />
                            &nbsp;
                            <label htmlFor="telefonerec">Telefone para recado: </label>
                            <input
                                type="text"
                                id="telefonerec"
                                className="input-padrao"
                                required
                                placeholder="(xx) xxxxx-xxxx"
                            />
                            </p>
                        </b>

                        <p> <b>
                                <label htmlFor="prof">Profissão:</label>
                                <input type="text" id="prof" />
                            </b>    
                        </p>

                        <b>Posição em qual trabalha:</b>
                        <label htmlFor="pe">Em pé:</label>
                        <input type="checkbox" id="pe" />
                        &nbsp;
                        <label htmlFor="sen">Sentado:</label>
                        <input type="checkbox" id="sen" />
                        &nbsp;
                        <label htmlFor="and">Andando:</label>
                        <input type="checkbox" id="and" />
                        &nbsp;

                        <p>
                            <b>Estilista?</b>
                            <label htmlFor="s">Sim:</label>
                            <input type="checkbox" id="s" />
                            &nbsp;
                            <label htmlFor="n">Não:</label>
                            <input type="checkbox" id="n" />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="tempo1">Há quanto tempo? </label>
                            <input type="text" id="tempo1" />
                        </p>

                        <p>
                            <b>Tabagista?</b>
                            <label htmlFor="s1">Sim:</label>
                            <input type="checkbox" id="s1" />
                            &nbsp;
                            <label htmlFor="n1">Não:</label>
                            <input type="checkbox" id="n1" />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="tempo2">Há quanto tempo? </label>
                            <input type="text" id="tempo2" />
                        </p>

                        <p>
                            <b>Tipo de calçado que faz mais uso:</b>
                            <label htmlFor="aber">Aberto:</label>
                            <input type="checkbox" id="aber" />
                            &nbsp;
                            <label htmlFor="fech">Fechado:</label>
                            <input type="checkbox" id="fech" />
                            &nbsp;&nbsp;&nbsp;
                            <label htmlFor="numcal">N.º do calçado: </label>
                            <input type="text" id="numcal" />
                        </p>

                            <b>Tipo de meia que faz mais uso:</b>
                            <label htmlFor="soc">Social:</label>
                            <input type="checkbox" id="soc" />
                            &nbsp;
                            <label htmlFor="espo">Esportiva:</label>
                            <input type="checkbox" id="espo" />
                            &nbsp;
                            <label htmlFor="alg">Algodão:</label>
                            <input type="checkbox" id="alg" />
                            <p>

                                <b>Pratica algum esporte?</b>
                                <label htmlFor="s2">Sim:</label>
                                <input type="checkbox" id="s2" />
                                &nbsp;
                                <label htmlFor="n2">Não:</label>
                                <input type="checkbox" id="n2" />
                                &nbsp;&nbsp;
                                <label htmlFor="qual">Qual?</label>
                                <input type="text" id="qual" />
                            </p>

                            <label htmlFor="hali">Habitos alimentares:</label>
                            <input type="text" id="hali" />
                            <p>

                                <b>Toma algum medicamento de uso contínuo?</b>
                                <label htmlFor="meds">Sim:</label>
                                <input type="checkbox" id="meds" />
                                &nbsp;
                                <label htmlFor="medn">Não:</label>
                                <input type="checkbox" id="medn" />
                            </p>

                            <label htmlFor="quais">Quais?</label>
                            <input type="text" id="quais" />
                            <p>

                                <b>
                                <label htmlFor="estatura">Estatura:</label>
                                <input type="text" id="estatura" />
                                <label htmlFor="peso">Peso:</label>
                                <input type="text" id="peso" />
                                <label htmlFor="pa">P.A:</label>
                                <input type="text" id="pa" />
                                </b>
                            </p>    
                            <b>
                                <p>
                                <label htmlFor="glicemina">Glicemina:</label>
                                <input type="text" id="glicemina" />
                                <label htmlFor="tipagem">Tipagem sanguínea:</label>
                                <input type="text" id="tipagem" />
                                </p>
                            </b>

                            <b>Doenças pré-existentes:</b>
                            <label htmlFor="doençass">Sim:</label>
                            <input type="checkbox" id="doençass" />
                            &nbsp;
                            <label htmlFor="doençasn">Não:</label>
                            <input type="checkbox" id="doenças" />
                            <p>
                                <label htmlFor="quais2">Quais?</label>
                                <input type="text" id="quais2" />
                            </p>

                            <b>Já fez algum tratamento podológico:</b>
                            <label htmlFor="tratas">Sim:</label>
                            <input type="checkbox" id="tratas" />
                            &nbsp;
                            <label htmlFor="tratan">Não:</label>
                            <input type="checkbox" id="tratan" />
                            <p>
                                <label htmlFor="quais3">Quais?</label>
                                <input type="text" id="quais3" />
                            </p>

                            <b>Já fez algum cirurgia nos membros inferiores:</b>
                            <label htmlFor="cirurs">Sim:</label>
                            <input type="checkbox" id="cirurs" />
                            &nbsp;
                            <label htmlFor="cirurn">Não:</label>
                            <input type="checkbox" id="cirurn" />
                            <p>
                                <label htmlFor="quais4">Quais?</label>
                                <input type="text" id="quais4" />
                            </p>

                            <b>Possui alguma alergia:</b>
                            <label htmlFor="alers">Sim:</label>
                            <input type="checkbox" id="alers" />
                            &nbsp;
                            <label htmlFor="alern">Não:</label>
                            <input type="checkbox" id="alern" />
                            <p>
                                <label htmlFor="quais5">Quais?</label>
                                <input type="text" id="quais5" />
                            </p>

                            <b>Gestante:</b>
                            <label htmlFor="gests">Sim:</label>
                            <input type="checkbox" id="gests" />
                            &nbsp;
                            <label htmlFor="gestn">Não:</label>
                            <input type="checkbox" id="gestn" />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <b>Lactante:</b>
                            <label htmlFor="lacts">Sim:</label>
                            <input type="checkbox" id="lacts" />
                            &nbsp;
                            <label htmlFor="lactn">Não:</label>
                            <input type="checkbox" id="lactn" />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <b>Varizes:</b>
                            <label htmlFor="varis">Sim:</label>
                            <input type="checkbox" id="varis" />
                            &nbsp;
                            <label htmlFor="varin">Não:</label>
                            <input type="checkbox" id="varin" />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <b>Amputações:</b>
                            <label htmlFor="amputs">Sim:</label>
                            <input type="checkbox" id="amputs" />
                            &nbsp;
                            <label htmlFor="amputn">Não:</label>
                            <input type="checkbox" id="amputn" />
                            <p>
                                <label htmlFor="quais6">Quais?</label>
                                <input type="text" id="quais6" />
                            </p>

                            <b>Especificando sua dor de 1 a 10:</b>
                            <p>
                                <label htmlFor="dor">Especificando sua dor de 1 a 10:</label>
                                <input type="text" id="dor" />
                            </p>

                            <b>
                                <p>
                                Portador de pinos ou marcapasso:
                                </p>
                            </b>
                            <label htmlFor="marcaps">Sim:</label>
                            <input type="checkbox" id="marcaps" />
                            &nbsp;
                            <label htmlFor="marcapn">Não:</label>
                            <input type="checkbox" id="marcapn" />
                            <p>
                                <label htmlFor="quais7">Quais?</label>
                                <input type="text" id="quais7" />
                            </p>

                            <b>Perfusão:</b>
                            &nbsp;&nbsp;&nbsp;
                            <label htmlFor="pd">PD:</label>
                            <select name="pd">
                                <option value="pd1">Normal</option>
                                <option value="pd2">Pálido</option>
                                <option value="pd3">Cianótico</option>
                                <option value="pd3">C/ edemas</option>
                            </select>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="pe">PE:</label>
                            <select name="pe">
                                <option value="pe1">Normal</option>
                                <option value="pe2">Pálido</option>
                                <option value="pe3">Cianótico</option>
                                <option value="pe3">C/ edemas</option>
                            </select>
                                

                                    <b>Digito de pressão:</b>
                                    <div>
                                        <label htmlFor="pd">PD &nbsp;</label>
                                        <input type="text" id="pd" /> &nbsp; segundos.
                                    </div>
                                        <label htmlFor="pe">PE &nbsp;</label>
                                        <input type="text" id="pe" /> &nbsp; segundos.
                                        <p>

                                        <b>Formato das unhas:</b>
                                </p>

                                    <div>   
                                            <label htmlFor="fpd">PD:</label>
                                            <select name="fpd">
                                            <option value="fpd1">Normal</option>
                                            <option value="fpd2">Normal com corte incorreto</option>
                                            <option value="fpd3">Funil</option>
                                            <option value="fpd4">Gancho</option>
                                            <option value="fpd5">Involuta</option>
                                            <option value="fpd6">Entelha</option>
                                            <option value="fpd7">Em torques</option>
                                            <option value="fpd8">Em caracol</option>
                                            </select>
                                    </div>

                                    <div>
                                        <label htmlFor="fpe">PE:</label>
                                        <select name="fpe">
                                            <option value="fpe1">Normal</option>
                                            <option value="fpe2">Normal com corte incorreto</option>
                                            <option value="fpe3">Funil</option>
                                            <option value="fpe4">Gancho</option>
                                            <option value="fpe5">Involuta</option>
                                            <option value="fpe6">Entelha</option>
                                            <option value="fpe7">Em torques</option>
                                            <option value="fpe8">Em caracol</option>
                                        </select>
                                    </div>

                                        <p>
                                            <b>Formato dos pés:</b>
                                        </p>
                                            <div>

                                                <label htmlFor="ffpd">PD:</label>
                                                <select name="ffpd">
                                                <option value="ffpd1">Egípcio</option>
                                                <option value="ffpd2">Romano</option>
                                                <option value="ffpd3">Oriental</option>
                                                <option value="ffpd4">Africano</option>
                                                <option value="ffpd5">Germânico</option>
                                                <option value="ffpd6">Celta</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="ffpe">PE:</label>
                                                <select name="ffpe">
                                                    <option value="ffpe1">Egípcio</option>
                                                    <option value="ffpe2">Romano</option>
                                                    <option value="ffpe3">Oriental</option>
                                                    <option value="ffpe4">Africano</option>
                                                    <option value="ffpe5">Germânico</option>
                                                    <option value="ffpe6">Celta</option>
                                                </select>
                                            </div>

                                                    <b>Teste com monofila mento:</b>
                                                <div>
                                                    <b>PD:</b>
                                                    <label htmlFor="testes">C/S:</label>
                                                    <input type="checkbox" id="testes" />
                                                    &nbsp;
                                                    <label htmlFor="testen">S/S:</label>
                                                    <input type="checkbox" id="testen" />
                                                </div>

                                                        <b>PE:</b>
                                                        <label htmlFor="teste2s">C/S:</label>
                                                        <input type="checkbox" id="teste2s" />
                                                        &nbsp;
                                                        <label htmlFor="teste2n">S/S:</label>
                                                        <input type="checkbox" id="teste2n" />
                                                        <p>

                                                        <Button onClick={handleClickSnackbarSalvar} style={{ textTransform: 'none' }}>Salvar</Button>
                                                        <Button onClick={handleClickSnackbarCancelar} style={{ textTransform: 'none' }}>Cancelar</Button>

                            </p> 
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
                    </div>

                </form>
                
    );
}

export default FichaAnamnese