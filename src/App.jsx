import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input';
import { Select } from './components/input/Select';

function App() {
  const [formData, setFormData] = useState({});
  const [jsonOutput, setJsonOutput] = useState('');
  const [userData, setUserData] = useState({
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData, null, 2);
    setJsonOutput(jsonData);
    setFormData({});
  };

  useEffect(() => {
    const { cep } = formData;
    if (cep && cep.length === 8) {
      buscarCep(cep);
    }
  }, [formData.cep]);

  const buscarCep = async (cep) => {
    try {
      const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
      if (!response.ok) throw new Error('Erro ao buscar CEP');
      const data = await response.json();
      console.log(data);
      
      setUserData({
        endereco: data.endereco,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="form-pessoa">
      <h2>Cadastro de Pessoa</h2>

      <form className='row g-3' onSubmit={enviar}>
        <Input label='Nome Completo' id='nomeCompleto' handleChange={handleChange} />
        <Input label='Nome Mãe' id='nomeMae' handleChange={handleChange} />
        <Input inputSize={2} label='Data Nascimento' id='dataNascimento' type='date' handleChange={handleChange} />
        <Input inputSize={5} label='Email' id='email' type='email' handleChange={handleChange} />
        <Input inputSize={5} label='Senha' id='senha' type='password' handleChange={handleChange} />
        <Input inputSize={4} label='CEP' id='cep' type='text' maxLength="8" handleChange={handleChange} />
        <Input inputSize={8} label='Endereço' id='endereco' value={userData.endereco} readOnly handleChange={handleChange} />
        <Input inputSize={1} label='Número' id='numero' type='number' handleChange={handleChange} />
        <Input inputSize={11} label='Complemento' id='complemento' handleChange={handleChange} />
        <Input inputSize={4} label='Bairro' id='bairro' value={userData.bairro} readOnly handleChange={handleChange} />
        
        <Select label='Estado' id='estado' value={userData.estado} readOnly handleChange={handleChange} />
        <Select label='Cidade' id='cidade' value={userData.cidade} readOnly handleChange={handleChange} />
        
        <Button type='submit' label='Salvar' />
        <Button type='reset' variant='light' label='Limpar' onClick={() => setFormData({})} />
      </form>

      <div className="container text-light bg-dark">
        <h3>Dados do JSON:</h3>
        <pre>{jsonOutput}</pre>
      </div>
    </main>
  );
}

export default App;
