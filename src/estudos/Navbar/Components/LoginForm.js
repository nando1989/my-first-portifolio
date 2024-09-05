import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();

  const handleLogin = () => {
    // Lógica de autenticação, validação, etc.
    
    // Redireciona para a página do dashboard após o login bem-sucedido
    history.push('/dashboard');
  };

  return (
    <div>
      {/* Seu formulário de login */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;