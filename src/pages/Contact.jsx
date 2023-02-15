import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/contact.css";

const Contact = () => {

  function feed() {
    alert('Agradecemos seu Feedback')
  }

  return (

  <div className='contatos' >
    <h1 className='formtitle'>Fale Conosco:</h1>
    <form className="formMsg" action='/Home'>
      <input 
        class='w-100' 
        className='caixaform'
        type="text" 
        name="nome" 
        placeholder='Nome' />
    
      <input 
        class='w-100'  
        className='caixaform' 
        type="telefone" 
        name="telefone"  
        placeholder='(xx) XXXXX-XXXX' />
      
      <input 
        class='w-100' 
        className='caixaform' 
        type="email" 
        name="email" 
        placeholder='seuemail@provedor.com' />
      
      <textarea 
        class='w-100' 
        className='caixatext' 
        name="mensagem" 
        id="mensagem" 
        placeholder='Escreva para nossa equipe'></textarea>

</form>
      
      <button 
        className='buttonform' 
        type="submit" 
        name="submit" 
        id="submit" 
        value="Enviar" 
        placeholder='Enviar' >
        <Link to='/home.jsx' onClick={feed}>
        Enviar</Link>
        </button>
      
    
  </div>

) }

export default Contact
