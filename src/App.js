import { Repository } from "./componentes/Repository";
import { Resumo } from "./componentes/summary";
import { useEffect, useState } from 'react'
import { mapToRepoObject } from "./componentes/Data/data-utils";




function App() {
  const lista_repositorios = [];
  const [repositorios, setRepositorios] = useState(lista_repositorios, mapToRepoObject)
  const [idSelecionada] = useState(1)
  const [nomeUsuario, setNomeUsuario] = useState('viniHiagoRosa', )
    

  
  for (let i = 0; i < 5; i++) {
    
    lista_repositorios.push({
      id: i + 1,
      titulo: `teste`,
      descricao: `teste`,
      
    });
    
  }

  const color ={
    color: 'white',
    margin: '15px'
  }

  const estiloMargin = {
    margin: '15px',
  }

  const estiloLista = {
    listStyle: 'none',
  }

const fetchDadosDoUsuario = () => {
    fetch( `https://api.github.com/users/${nomeUsuario}/repos` )
        .then((resposta) => resposta.json())
        .then((resultado) => {
            const resultadoMapeado = mapToRepoObject(resultado);
            setRepositorios(resultadoMapeado);
            console.log(resultado)
        });
};

useEffect(() => {
  fetchDadosDoUsuario();
},[])
    

      const handleNomeUsuario = (valor) => {
        setNomeUsuario(valor)

      }

      const handleBuscar = () => {
        console.log()
        fetchDadosDoUsuario();
      };

  return (

    <>
        <h1 style={color} >Meu portifólio, Github</h1>

  <Resumo imagem={`https://github.com/${nomeUsuario}.png`} nome={nomeUsuario}/>   
  
    <input style={estiloMargin} type="text" onChange={(event) => handleNomeUsuario(event.target.value)} value={nomeUsuario}></input>
    <button onClick={handleBuscar}>Buscar</button>
    

  {!repositorios.length && <p>nenhum item</p>}
      {repositorios.length && (
        <ul style={estiloLista}>
          {repositorios.map((item) => (
            <li key={item.id}>

                <Repository 
                key={item.id}
                titulo={item.titulo} 
                destacar={item.id === idSelecionada}  
                descricao={item.descricao}/>
                
            </li>
          ))}
        </ul>
      )}
       

    </>
     
        
  );
}

export default App;
