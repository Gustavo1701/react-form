import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input';
import { Select, SelectMunicipio } from './components/input/Select';
import axios from 'axios'

function App() {
  const [formData, setFormData] = useState({});
  const [jsonOutput, setJsonOutput] = useState('');
  
  const [estadosArmazenados, setEstados] = useState([]);
  const [municipiosArmazenados, setMunicipios] = useState([]);

  const [dataCep, setDataCep] = useState({
    endereco: null,
    bairro: null,
    cidade: null,
    estado: null,
  }); //dataCep criado para armazenar os dados da requisição Buscar CEP

  const [dadosFinaisAtualizados, setDadosFinaisAtualizados] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }; // handleChange captura todos os dados dos inputs

  useEffect(() => { //atravez do formeData ele pega o objeto cep e verifica se foi digitado 8 caracteres, após isso ele inicia a função buscarCep com o parametro CEP
    const { cep } = formData;
    if (cep && cep.length === 8) {
      buscarCep(cep);
    }
  }, [formData.cep]);

  const buscarCep = async (cep) => {
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);

      if (response.data.erro) {
        console.error("CEP " + cep + " não encontrado");
        alert("CEP " + cep + " não encontrado");
        return;
      }

      // Atualizando os campos do formulário
      const newDataCep = {
        endereco: response.data.street,
        bairro: response.data.neighborhood,
        estado: response.data.state,
        cidade: response.data.city,
      };

      setDataCep(newDataCep); // Atualiza o estado com os novos dados
      numero.focus();
     

    } catch (error) {
      console.error("Erro ao buscar o CEP: " + cep, error);
      alert("CEP " + cep + " não encontrado. Digite apenas os números.");
    }
  };

  const preencherEstados = async () => {

    try {
      const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
      setEstados(response.data);

    } catch (error) {
      alert("Erro ao buscar os estados: ", error);
    }
  }
  useEffect(() => {
    const estadoAtualizado = dataCep.estado;
    if (estadoAtualizado) {
      preencherMunicipios(estadoAtualizado); // Chama a função com o estado atualizado
    }
  }, [dataCep.estado]);

  const preencherMunicipios = async (estadoAtualizado) => {
    try {
      const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoAtualizado}/municipios`)
      setMunicipios(response.data)
      console.log("preencher municipios com sucesso");

    } catch (error) {
      alert("Erro ao buscar municipios: ", error)
      console.log("erro ao buscar municipio");

    }
  }

  // useEffect para atualizar dados finais
  useEffect(() => {
    const dadosAtualizados = {
      ...formData,
      ...dataCep,
    };
    setDadosFinaisAtualizados(dadosAtualizados);
  }, [formData, dataCep]);
  

  const enviar = (e) => {
    e.preventDefault();
    console.log('Form:', dadosFinaisAtualizados);

    const jsonData = JSON.stringify(dadosFinaisAtualizados, null, 2);
    setJsonOutput(jsonData); //jsonData captura todas as informações dos inputs através do formData, transforma em string e coloca em um arquivo JSON

    // setFormData({}); // não está limpando os campos
  };

  useEffect(() => {
    preencherEstados();
  }, [])

  // useEffect(() => {
  //   const estadoSelecionado = formData.estado; // Pega o estado selecionado
  //   if (estadoSelecionado) {
  //     preencherMunicipios(estadoSelecionado);
  //   }
  // }, [formData.estado]); // Chama ao mudar o estado


  return (
    <>
      <main className="form-pessoa">
        <h2>Cadastro de Pessoa</h2>

        <form className='row g-3' onSubmit={enviar}>
          <Input
            label='Nome Completo'
            id='nomeCompleto'
            handleChange={handleChange}
          />

          <Input
            label='Nome Mãe'
            id='nomeMae'
            handleChange={handleChange}
          />

          <Input
            inputSize={2}
            label='Data Nascimento'
            id='dataNascimento'
            type='date'
            handleChange={handleChange}
          />

          <Input
            inputSize={5}
            label='Email'
            id='email'
            type='email'
            handleChange={handleChange}
          />

          <Input
            inputSize={5}
            label='Senha'
            id='senha'
            type='password'
            handleChange={handleChange}
          />

          <Input
            inputSize={4}
            label='CEP'
            id='cep'
            type='text'
            maxlength="8"
            handleChange={handleChange}
          />

          <Input
            inputSize={8}
            label='Endereço'
            id='endereco'
            value={dataCep.endereco}
            handleChange={handleChange}
          />

          <Input
            inputSize={1}
            label='Número'
            id='numero'
            type='number'
            handleChange={handleChange}
          />

          <Input
            inputSize={11}
            label='Complemento'
            id='complemento'
            handleChange={handleChange}
          />

          <Input
            inputSize={4}
            label='Bairro'
            id='bairro'
            value={dataCep.bairro}
            handleChange={handleChange}
          />

          <Select
            label='Estado'
            id='estado'
            valueEstado={dataCep.estado}
            handleChange={handleChange}
            options={estadosArmazenados.map(estado => ({
              value: estado.nome,
              label: estado.sigla,
            }))}
          />

          <SelectMunicipio
            label='Cidade'
            id='cidade'
            valueMunicipio={dataCep.cidade}
            handleChange={handleChange}
            options={municipiosArmazenados.map(municipio => ({
              value: municipio.nome,
              label: municipio.nome,
            }))}
          />

          <Button type='submit' label='Salvar' />
          <Button type='reset' variant='light' label='Limpar' onClick={() => jsonOutput({})} />
        </form>

        <div className="container text-light bg-dark">
          <h3>Dados do JSON:</h3>
          <pre>{jsonOutput}</pre>

        </div>
      </main>
    </>
  );
}

export default App;
