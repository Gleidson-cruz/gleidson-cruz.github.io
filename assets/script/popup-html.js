// Array com as informações sobre as tecnologias
const tecnologias = [
  {
    nome: 'HTML',
    descricao: `<ul>
      <ul>
        <li>Criar websites semânticos.
        <li>Utilizar tags HTML adequadas para cada tipo de conteúdo (exemplo: &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;).</li>
        <li>Incorporar meta tags para melhorar o SEO e acessibilidade do site.</li>
      </ul>

      <ul>
        <li>Páginas web acessíveis e bem estruturados.
        <li>Implementar atributos como alt em imagens para tornar o conteúdo acessível a usuários com deficiência visual.</li>
        <li>Utilizar marcação semântica para facilitar a compreensão da estrutura do site.</li>
      </ul>
  </ul>`
  },
  {
    nome: 'CSS',
    descricao: `<ul>
      <ul>
        <li>Web Sites responsivos.
        <li>Utilizar media queries para ajustar o layout e estilo conforme o tamanho da tela.</li>
        <li>Implementar grids ou flexbox para criar layouts flexíveis e adaptáveis.</li>
      </ul>

    
      <ul>
        <li>Páginas web intuitivas e visualmente atraentes.
        <li>Aplicar princípios de design como contraste, hierarquia visual e espaçamento adequado.</li>
        <li>Utilizar animações e transições CSS para criar interações sutis e agradáveis.</li>
      </ul>
 

      <ul>
        <li>Cores selecionadas.   
        <li>Escolher paletas de cores harmoniosas e que transmitam a identidade visual desejada.</li>
        <li>Utilizar técnicas de design para criar contrastes eficazes e legibilidade.</li>
      </ul>
 
  </ul>`
  },
  {
    nome: 'JavaScript',
    descricao: `<ul>

      <ul>
        <li>Implementar pop-ups.
        <li>Utilizar bibliotecas como jQuery UI ou criar pop-ups customizados com JavaScript puro.</li>
        <li>Gerenciar eventos de clique e interações do usuário para exibir pop-ups de forma responsiva.</li>
      </ul>

      <ul>
        <li>Manipular CSS e HTML.  
        <li>Alterar estilos CSS dinamicamente com JavaScript para criar efeitos visuais interativos.</li>
        <li>Manipular elementos HTML para adicionar ou remover conteúdo de forma dinâmica.</li>
      </ul>


      <ul>
        <li>Mais interações.
        <li>Criar efeitos de scroll suaves para melhorar a experiência de navegação.</li>
        <li>Validar formulários em tempo real para fornecer feedback imediato aos usuários.</li>
      </ul>

  </ul>`
  },
{
    nome: 'PHP',
    descricao: `<ul>

      <ul>
        <li>Manipulação de formulários.
        <li>Receber dados de formulários HTML utilizando o método POST ou GET.</li>
        <li>Validar e processar dados submetidos pelos usuários antes de inseri-los no banco de dados.</li>
      </ul>


      <ul>
        <li>Conexão e CRUD com banco de dados.
        <li>Estabelecer conexão com bancos de dados MySQL ou MariaDB utilizando PHP PDO.</li>
        <li>Executar operações CRUD (Create, Read, Update, Delete) para interagir com os dados do banco de dados.</li>
      </ul>

  </ul>`
  },
  {
    nome: 'Figman',
    descricao: `<ul>

      <ul>
        <li>Desenvolver projetos de interfaces.
        <li>Criar wireframes e protótipos interativos para visualização e teste de fluxos de usuário.</li>
        <li>Utilizar componentes reutilizáveis e estilos globais para manter a consistência no design.</li>
      </ul>


      <ul>
        <li>Desktop e mobile.
        <li>Adaptar designs para diferentes resoluções e dispositivos, considerando as diretrizes de design responsivo.</li>
        <li>Exportar assets e especificações de design para desenvolvedores implementarem nos projetos.</li>
      </ul>

  </ul>`
  },
  {
    nome: 'UX/UI Designer',
    descricao: ` <ul>
    
      
      <ul>
       <li> <strong>Design Visual Atraente e Funcional:</strong> </li>
        <li>Criar layouts que sejam atraentes visualmente e ao mesmo tempo funcionais, garantindo uma boa experiência de usuário.</li>
        <li>Utilizar técnicas de design como espaçamento adequado, hierarquia visual e uso inteligente de elementos gráficos para direcionar o olhar do usuário e facilitar a compreensão da interface.</li>
      </ul>
    
      <ul>
      <li> <strong>Escolha de Paletas de Cores:</strong> 
        <li>Selecionar paletas de cores que sejam harmoniosas e que transmitam a mensagem desejada, considerando a psicologia das cores e o contexto do projeto.</li>
        <li>Garantir que as cores escolhidas também sejam acessíveis para usuários com diferentes necessidades visuais.</li>
      </ul>

      <ul>
        <li> <strong>Tipografia Eficiente:</strong> </li>
        <li>Escolher tipografias adequadas que sejam legíveis em diferentes tamanhos e dispositivos, mantendo a consistência e o estilo do design.</li>
        <li>Utilizar hierarquia tipográfica para destacar informações importantes e facilitar a leitura.</li>
      </ul>

      <ul>
        <li> <strong>Elementos Gráficos Coesos:</strong> </li>
        <li>Integrar elementos gráficos, como ícones e ilustrações, de forma coesa e alinhada com a identidade visual do projeto.</li>
        <li>Certificar-se de que esses elementos contribuam para a compreensão e usabilidade da interface, evitando poluição visual desnecessária.</li>
      </ul>
    
  </ul>`
  },
];

// Função que cria o popup
function createPopup(element, tecnologias) {
  const popup = document.createElement('div');
  popup.innerHTML = `
    <h2>O que eu sei fazer com ${element.title}</h2>
    <p>${tecnologias.find(t => t.nome.toLowerCase() === element.title.toLowerCase()).descricao}.</p>
    <button id="fechar-popup">Fechar</button>
  `;
  popup.id = 'popup-menu';
  popup.style.position = 'fixed';
  popup.style.top = '50%';
  popup.style.left = '50%';
  popup.style.transform = 'translate(-50%, -50%)';
  popup.style.background = 'white';
  popup.style.padding = '1.953vw';
  popup.style.border = '0.195vw solid #28a7ff';
  popup.style.borderRadius = '0.452vw';
  popup.style.boxShadow = '0 0 0.903vw rgba(0,0,0,0.2)';
  popup.style.zIndex = '1000';
  popup.style.fontFamily = '"oswald", sans-serif';
  popup.style.maxHeight = '80vh'; // Define a altura máxima do popup
  popup.style.overflowY = 'auto'; // Adiciona a barra de rolagem vertical
  popup.style.transition = 'max-height 0.3s ease-out'; // Adiciona a animação de transição

  const p = popup.querySelector('p');
  p.style.marginBlockStart = '0.83em';
  p.style.marginBlockEnd = '0.83em';
  p.style.marginInlineStart = '0px';
  p.style.marginInlineEnd = '0px';

  // Estiliza o h2
  const h2 = popup.querySelector('h2');
  h2.style.display = 'block';
  h2.style.marginBlockStart = '0.83em';
  h2.style.marginBlockEnd = '0.83em';
  h2.style.marginInlineStart = '0px';
  h2.style.marginInlineEnd = '0px';
  h2.style.fontWeight = 'bold';
  h2.style.textAlign = 'center';

  // Estiliza o botão
  const fecharPopupButton = popup.querySelector('#fechar-popup');
  fecharPopupButton.style.borderRadius = '0.452vw';
  fecharPopupButton.style.border = 'none';
  fecharPopupButton.style.backgroundColor = '#3490dc';
  fecharPopupButton.style.color = '#fff';
  fecharPopupButton.style.fontWeight = 'bolder';
  fecharPopupButton.style.marginBlockStart = '0.83em';
  fecharPopupButton.style.marginBlockEnd = '0.83em';
  fecharPopupButton.style.marginInlineStart = '0.488vw';
  fecharPopupButton.style.marginInlineEnd = '8.105vw';
  fecharPopupButton.style.textAlign = 'center';

  // Adiciona o hover no botão
  fecharPopupButton.addEventListener('mouseover', function() {
    fecharPopupButton.style.backgroundColor = '#1e90ff';
  });
  fecharPopupButton.addEventListener('mouseout', function() {
    fecharPopupButton.style.backgroundColor = '#28a7ff';
  });

  // Adiciona o evento de click no botão de fechar popup
  fecharPopupButton.addEventListener('click', function() {
    popup.remove();
  });

  // Adiciona o popup ao elemento clicado
  document.body.appendChild(popup);
}

// Seleciona todas as divs com a classe tec-config
const tecConfigDivs = document.querySelectorAll('.tec-config');

// Adiciona o evento de click em cada div
tecConfigDivs.forEach(function(div) {
  div.addEventListener('click', function() {
    createPopup(div, tecnologias);
  });
});