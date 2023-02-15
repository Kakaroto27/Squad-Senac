import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom';


/*import socialfacebook from '../assets/images/Facebook'
import socialgithub from '../assets/images/github.png'
import socialgoogle from '../assets/images/google.png'
import socialinsta from '../assets/images/Instagram.png'
     

<div className="all_btn_social">
      Hall Social
        <button><img scr={socialfacebook} alt='face'/>Facebook</button>
              
        <button><img src={socialgithub} alt="git" />Github</button>

        <button><img src={socialgoogle} alt="gg" />Google</button>

        <button><img src={socialinsta} alt="insta" />Instagram</button>
    </div>*/






const Login = () => {
  return (
  <div className='Page_login' action='/'>
    <h3 className='title_acess'>
      Acesse com seu Usuário
    </h3>

    <div className='logando'> 
      <label className='apres_caixa'>
        Usuário/E-mail:</label>
      <input className='user'
        type={'text'}
        placeholder="usuário/e-mail">
      </input>
    </div>

    <div className='logando'>
      <label className='apres_caixa'>
        Senha:</label>
    
      <input className='password'
        type={"password"}
       placeholder='senha'>
      </input>
    </div>
  

  <div className='buttons_login'>  
    <button 
      className='buttonform3' 
      type="submit" 
      name="login" 
      id="login" 
      value="cadastro" 
      placeholder='Cadastre-se'
      >
      <Link to={'./Register.jsx'}>
      Cadastre-se </Link> 
       </button>

    <button 
      className='buttonform2' 
      type="submit" 
      name="login" 
      id="login" 
      value="login" 
      placeholder='Login'> 
      <Link to='/Home'>
        Login </Link> </button>
  </div>

</div>



) }

export default Login
