import Post from './componentes/Post';
import Comentario from './componentes/Comentario';
import imagem from './img/escola.jpg';
import imagemfoto from './img/foto.jpg';
import './Post.css';

function App() {
  return (
    <div className="body">

      <Post
        titulo="Study blog"
        imagem={imagem}
        descricao="Entende-se por escola a instituição que se dedica ao processo de ensino e aprendizagem entre alunos e docente. A escola é uma das instituições mais importantes na vida de uma pessoa, talvez também como uma das primordiais da família, já que na atualidade se estabelece que uma criança faça parte da escola desde a sua infância para finalizar aproximadamente na idade adulta. Neste contexto, abordaremos o conceito da escola, e o papel fundamental que ela tem na sociedade. Também, traremos atenção, ao papel que ela tem segundo a Lei de Diretrizes e Bases (LDB), os Parâmetros Curriculares Nacionais (PCNs) que foi elaborado pelo Ministério da Educação (MEC) e a importância nos dias atuais.
        Abordaremos com clareza, alguns artigos e práticas que a escola contém quando se fala sobre a importância do seu papel na sociedade, trazendo o professor, a comunidade e a forma de avaliação como transmissores de normas e valores. "
        categoria="Educação"
      />
      <h3> Comentários </h3>
      <Comentario
        nome="Estefani Felix"
        imagemfoto={imagemfoto}
        comentario="Gostei muito desse blog, sempre aborda temas muito importantes, a Educação é a chave para a mudança."
      />
    </div>


  );
}
export default App;
