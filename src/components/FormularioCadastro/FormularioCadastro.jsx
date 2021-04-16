import React, { useState } from 'react'
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

export default function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
            }}
        >
            <TextField
                value={nome}
                onChange={(e) => {
                    setNome(e.target.value);
                }}
                id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />
            <TextField
                value={sobrenome}
                onChange={(e) => {
                    setSobrenome(e.target.value);
                }}
                id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
            <TextField
                value={cpf}
                onChange={(e) => {
                    setCpf(e.target.value);
                }}
                
                onBlur={(e) =>{
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido});
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

            <FormControlLabel 
            label="Promoções" 
            control={
            <Switch
            checked={promocoes}
            onChange={(e) => {
                setPromocoes(e.target.checked)
            }} name="promocoes" defaultChecked={promocoes} color="primary" />} />
            <FormControlLabel label="Novidades" control={
            <Switch
            checked={novidades}
            onChange={(e) => {
                setNovidades(e.target.checked)
            }}
            name="novidades" 
            defaultChecked={novidades} 
            color="primary" />} />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}
