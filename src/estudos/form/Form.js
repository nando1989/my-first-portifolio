function Form () {
  
  function cadastrarUsuario(e) {
    e.preventDefault()
    alert("Cadastrou o usuario!")
  }

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeHolder="DIgite seu nome"/>
        </div>
        <div>
          <input type="submit" value="Cadastrar"/>
        </div>
      </form>
      </div>
  )
}

export default Form