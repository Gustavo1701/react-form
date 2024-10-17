import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/input/input'

function App() {


  return (
    <main className='form-pessoa bg-info-subtle text-info-emphasis'>
      <h2 className='p-2'>Cadastro de Pessoa</h2>

      <form className='row g-3 p-5'>

        <Input
          label='Nome Completo'
          id='nomeCompleto'
        />

        {/* <div className="col-md-6">
          <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
          <input type="text" className="form-control" id="nomeCompleto" />
        </div> */}

        <Input
          label='Nome Mãe'
          id='nomeMae'
        />

        {/* <div className="col-md-6">
          <label htmlFor="nomedamae" className="form-label">Nome da Mãe</label>
          <input type="text" className="form-control" id="nomeMae" />
        </div> */}
         <Input
            label='Data Nascimento'
            id='dtNascimento'
            type='date' 
            inputSize={2}
         />   

        {/* <div className="col-md-2">
          <label htmlFor="senha" className="form-label">Data Nascimento</label>
          <input type="date" className="form-control" id="dtNascimento" />
        </div> */}

        <Input
          label='Senha'
          id='senha'
          type='password'
          inputSize={4}
        />
        {/* <div className="col-md-4">
          <label htmlFor="senha" className="form-label">Senha</label>
          <input type="password" className="form-control" id="senha" />
        </div> */}

        <Input 
          label='Email'
          id='email'
          type='email'
          
        />

        {/* <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div> */}

        <Input
          label='CEP'
          id='cep'
          inputSize='4'
        />

        {/* <div className="col-md-4">
          <label htmlFor="cep" className="form-label">CEP</label>
          <input type="text" className="form-control" id="cep" />
        </div> */}

        <Input
          label='Endereço'
          id='endereco'
          inputSize='8'
        />

        {/* <div className="col-md-8">
          <label htmlFor="endereco" className="form-label">Endereço</label>
          <input type="text" className="form-control" id="endereco" />
        </div> */}

        <Input
          label='numero'
          id='numero'
          type='number'
          inputSize='2'
        />

        {/* <div className="col-md-2">
          <label htmlFor="numero" className="form-label">Número</label>
          <input type="number" className="form-control" id="numero" />
        </div> */}

        <Input
          label='Complemento'
          id='complemento'
          inputSize='10' 
        />

        {/* <div className="col-md-10">
          <label htmlFor="complemento" className="form-label">Complemento</label>
          <input type="text" className="form-control" id="complemento" />
        </div> */}

        <Input
          label='Bairro'
          id='bairro'
          inputSize='4'
        />

        {/* <div className="col-md-4">
          <label htmlFor="bairro" className="form-label">Bairro</label>
          <input type="text" className="form-control" id="bairro" />
        </div> */}


        <div className="col-md-4">
          <label htmlFor="estado" className="form-label">Estado</label>
          <select id="estado" class="form-select">
            <option selected>Selecione...</option>
            <option>.</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="cidade" className="form-label">Cidade</label>
          <select id="cidade" class="form-select">
            <option selected>Selecione...</option>
            <option>.</option>
          </select>
        </div>


      </form>

    </main>
  )
}

export default App
