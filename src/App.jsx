import { useState } from 'react';
import './App.css'
import { Button } from './components/button/Button'
import { Input } from './components/input/Input'
import { Select } from './components/input/Select'

function App() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeMae, setNomeMae] = useState('');

  const enviar = e => {
    //evita que a tela carregue depois de clicar no botão submit do form
    e.preventDefault();
    console.log('Form:', nomeCompleto, nomeMae);
  }

  return (
    <>
      <main className="form-pessoa">
        <h2>Cadastro de Pessoa</h2>

        <form className='row g-3' onSubmit={enviar}>
          <Input
            label='Nome Completo'
            id='nomeCompleto'
            handleChange={(e) =>{ 
              console.log(e.target.value)
              setNomeCompleto(e.target.value)  // atualiza o state com o novo valor digitado no input
            }}
          />

          <Input
            label='Nome Mãe'
            id='nomeMae'
            handleChange={(e) =>{ 
              console.log(e.target.value)
              setNomeMae(e.target.value)  // atualiza o state com o novo valor digitado no input
            }}
          />

          <Input
            inputSize={2}
            label='Data Nascimento'
            id='dataNascimento'
            type='date'
          />

          <Input
            inputSize={5}
            label='Email'
            id='email'
            type='email'

          />

          <Input
            inputSize={5}
            label='Senha'
            id='senha'
            type='password'
          />

          <Input
            inputSize={4}
            label='CEP'
            id='cep'
            type='text'
          />

          <Input
            inputSize={8}
            label='Endereço'
            id='endereco'
          />

          <Input
            inputSize={1}
            label='Número'
            id='numero'
            type='number'
          />

          <Input
            inputSize={11}
            label='Complemento'
            id='complemento'
          />

          <Input
            inputSize={4}
            label='Bairro'
            id='bairro'
          />

          <Select
            label='Estado'
            id='estado'
          />

          <Select
            label='Cidade'
            id='cidade'
          />

          <Button type='submit' label='Salvar' />
          <Button type='reset' variant='light' label='Limpar' />
        </form>
      </main>
    </>
  )
}

export default App
