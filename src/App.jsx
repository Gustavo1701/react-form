import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input';
import { Select } from './components/input/Select';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({});
  const [jsonOutput, setJsonOutput] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault(); // Evita o reload da página
    console.log('Form:', formData);

    const jsonData = JSON.stringify(formData, null, 2);
    setJsonOutput(jsonData);

    setFormData({}); // Limpar os campos após envio
  };

  useEffect(() => {
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
      setFormData((prevData) => ({
        ...prevData,
        endereco: response.data.street,
        bairro: response.data.neighborhood,
        estado: response.data.state,
        cidade: response.data.city,
      }));

    } catch (error) {
      console.error("Erro ao buscar o CEP: " + cep, error);
      alert("CEP " + cep + " não encontrado. Digite apenas os números.");
    }
  };

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
            handleChange={handleChange}
          />

          <Select
            label='Estado'
            id='estado'
            handleChange={handleChange}
          />

          <Select
            label='Cidade'
            id='cidade'
            handleChange={handleChange}
          />

          <Button type='submit' label='Salvar' />
          <Button type='reset' variant='light' label='Limpar' onClick={() => setFormData({})} />
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
