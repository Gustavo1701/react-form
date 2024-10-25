import { useEffect, useRef, useState } from 'react';
import './App.css'
import { Button } from './components/button/Button'
import { Input } from './components/input/Input'
import { Select } from './components/input/Select'
import axios from 'axios';
import { maskCep } from './util/cep';

function App() {
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [estados, setEstados] = useState();


  const handleChange = (e) => {
    const { id, value } = e.target;
    //console.log(id, value);

    if (id === 'cep') {
      setFormData({ ...formData, cep: maskCep(value) })
    } else {
      setFormData({ ...formData, [id]: value })
    }
  }

  useEffect(() => {
    // '?' O interrogação antes de uma propriedade ou função ser chamada, faz um check se existe, acessa a propriedade if (formData.cep && formData.cep.length === 8) {
    if (formData.cep?.length === 10) {
      fetchCep(maskCep(formData.cep));
    }
  }, [formData.cep])

  const enviar = e => {
    e.preventDefault();
    console.log('Form:', formData);
  }

  const fetchCep = async (cep) => {
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
      console.log('cep', response);

      setFormData({
        ...formData,
        endereco: response.data.street,
        bairro: response.data.neighborhood,
      })

      numero.focus();
    } catch (error) {
      console.log('error', error);
    }
  }

  const fetchEstado = async () => {
    try {
      const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
      const data = response.data;
      setEstados(data);

    } catch (error) {
      alert("Erro ao buscar os estados: ", error);
    }
  }

  useEffect(() => {
    fetchEstado();
  });


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
            handleChange={handleChange}
          />

          <Input
            inputSize={8}
            label='Endereço'
            id='endereco'
            value={formData.endereco}
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
            value={formData.bairro}
            handleChange={handleChange}
          />

          <Select
            label='Estado'
            id='estado'
            value={formData.estado}
            options={estados.map(item => ({
              value: item.sigla,
              label: item.nome
            }))}
            handleChange={handleChange}
          />

          <Select
            label='Cidade'
            id='cidade'
            value={formData.cidade}
            handleChange={handleChange}
          />

          <Button type='submit' label='Salvar' />
          <Button type='reset' variant='light' label='Limpar' onClick={() => setFormData({})} />

          <div className='mt-4' style={{ color: 'antiquewhite', textAlign: 'left' }}>
            <h3>Dados do JSON:</h3>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        </form>
      </main>
    </>
  )
}

export default App