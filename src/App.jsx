import { useRef, useState } from 'react';
import './App.css'
import { Button } from './components/button/Button'
import { Input } from './components/input/Input'
import { Select } from './components/input/Select'

function App() {
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({});


  const handleChange = (e) => {
    /* formData.nomeCompleto = 12
    formData['nomeMae'] */

    console.log(e.target.id, e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const enviar = e => {
    //evita que a tela carregue depois de clicar no botão submit do form
    e.preventDefault();
    console.log('Form:', formData);
  }

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
            handleChange={handleChange}
          />

          <Input
            inputSize={1}
            label='Número'
            id='numero'
            type='number'
            //ref={inputRef}
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
          <Button type='reset' variant='light' label='Limpar' />
        </form>
      </main>
    </>
  )
}

export default App