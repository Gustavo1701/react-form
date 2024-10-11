import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <main className='form-pessoa bg-info-subtle text-info-emphasis'>
      <h2 className='p-2'>Cadastro de Pessoa</h2>

      <form className='row g-3 p-5'>

        <div className="col-md-6">
          <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
          <input type="text" className="form-control" id="nomeCompleto" />
        </div>

        <div className="col-md-6">
          <label htmlFor="nomedamae" className="form-label">Nome da Mãe</label>
          <input type="text" className="form-control" id="nomeMae" />
        </div>

        <div className="col-md-2">
          <label htmlFor="senha" className="form-label">Data Nascimento</label>
          <input type="date" className="form-control" id="dtNascimento" />
        </div>

        <div className="col-md-4">
          <label htmlFor="senha" className="form-label">Senha</label>
          <input type="password" className="form-control" id="senha" />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="col-md-4">
          <label htmlFor="cep" className="form-label">CEP</label>
          <input type="text" className="form-control" id="cep" />
        </div>

        <div className="col-md-8">
          <label htmlFor="endereco" className="form-label">Endereço</label>
          <input type="text" className="form-control" id="endereco" />
        </div>

        <div className="col-md-1">
          <label htmlFor="numero" className="form-label">Número</label>
          <input type="number" className="form-control" id="numero" />
        </div>

        <div className="col-md-11">
          <label htmlFor="complemento" className="form-label">Complemento</label>
          <input type="text" className="form-control" id="complemento" />
        </div>

        <div className="col-md-4">
          <label htmlFor="bairro" className="form-label">Bairro</label>
          <input type="text" className="form-control" id="bairro" />
        </div>

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
