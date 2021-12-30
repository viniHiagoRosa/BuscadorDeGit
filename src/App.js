import { Repository } from "./componentes/Repository";
import { Resumo } from "./componentes/summary";


function App() {
  const lista_repositorios = [];
  
  for (let index = 0; index < 5; index++) {
    lista_repositorios.push({
      id: index + 1,
      titulo: `teste${index + 1}`,
      descricao: `teste${index + 1}`,
    });
  }

  const estiloMargin = {
    margin: '15px',
  }

  const estiloLista = {
    listStyle: 'none',
  }

  return (

    <>
        <h1 style={estiloMargin} >Meu portifólio, Github</h1>

  <Resumo imagem="https://github.com/viniHiagoRosa.png" nome="Vinicius Hiago da Rosa"/>   
  

  {!lista_repositorios.length && <p>nenhum item</p>}
      {lista_repositorios.length && (
        <ul style={estiloLista}>
          {lista_repositorios.map((item) => (
            <li key={item.id}>
              
                <Repository titulo={'Projeto'} destacar={true} descricao="Repositório lorem10lorem10"/>
             
            </li>
          ))}
        </ul>
      )}
       

    </>
     
        
  );
}

export default App;
