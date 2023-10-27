const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

class App {
  sunRising = `<div class="flex flex-col justify-center items-center">
  <img
    src="src/assets/logo.png"
    alt=""
    class="w-[35%] modal__logo pt-6"
  />
  <h2 class="modal__title font-sunRising text-sunRising text-3xl">
    Sun Rising
  </h2>
</div>
<div class="flex flex-col justify-center items-center">
  <img
    src="src/assets/sunRisingPrint.png"
    alt=""
    class="modal__img w-[70%]"
  />
  <p
    class="modal__description p-6 font-poppins text-sm text-justify indent-2"
  >
    O Sun Rising é um aplicativo de Surf Reports! A partir da API
    Stormglass, oferecemos informações sobre a velocidade e direção do
    vento; altura, período e direção do Swell e das ondas. Para além das
    praias pré-definidas, de Ubatuba-SP, podemos registrar novas praias a
    partir de suas coordenadas geográficas, obtidas por meio de um mapa
    interativo.
  </p>
  <a
    class="font-poppins mb-6 bg-pinkFiap p-3 text-gray-100"
    href="https://github.com/thidematos/sun-rising"
    target="_blank"
    >Github! <i class="fa-brands fa-github"></i
  ></a>
</div>`;

  farmWise = `<div class="flex flex-col justify-center items-center">
    <img
      src="src/assets/farm-wise.png"
      alt=""
      class="w-[35%] modal__logo pt-6"
    />
    <h2 class="modal__title font-farmWise text-farmWise text-3xl">
      Farm Wise
    </h2>
  </div>
  <div class="flex flex-col justify-center items-center pt-3">
    <img
      src="src/assets/farmWisePrint.png"
      alt=""
      class="modal__img w-[70%]"
    />
    <p
      class="modal__description p-6 font-poppins text-sm text-justify indent-2"
    >
      O principal objetivo do projeto "Farm Wise: Feeding the Future" é
      oferecer um "companheiro" para os pequenos/médios agricultores.
      Trata-se de um assistente que fornece as respostas para as perguntas
      desses produtores, de forma rápida, simples e objetiva. A API
      fornecida pela Open AI nos permite interagir com IA generativa "Chat
      GPT". Aplicada ao "Farm Wise", a IA interpreta o carinhoso papel de
      "Wise", um sábio e experiente agricultor.
    </p>
    <a
      class="font-poppins mb-6 bg-pinkFiap p-3 text-gray-100"
      href="https://github.com/thidematos/farm-wise"
      target="_blank"
      >Github! <i class="fa-brands fa-github"></i
    ></a>
  </div>`;
  coliseu = `<div class="flex flex-col justify-center items-center">
    <img
      src="src/assets/coliseu.png"
      alt=""
      class="w-[35%] modal__logo pt-6"
    />
    <h2 class="modal__title font-coliseu text-coliseu font-bold text-3xl">
      O Coliseu
    </h2>
  </div>
  <div class="flex flex-col justify-center items-center pt-3">
    <img
      src="src/assets/coliseuPrint.png"
      alt=""
      class="modal__img w-[70%]"
    />

    <p
      class="modal__description p-6 font-poppins text-sm text-justify indent-2"
    >
      Na Marmoraria O Coliseu, entendemos a importância de cada projeto e
      nos dedicamos a criar resultados que sejam duradouros e
      impressionantes. Valorizamos a satisfação do cliente e buscamos
      superar suas expectativas em todos os aspectos do nosso trabalho. Seja
      para projetos residenciais ou comerciais, conte com a Marmoraria O
      Coliseu para oferecer soluções personalizadas e de alta qualidade em
      pedras naturais. Estamos aqui para transformar suas ideias em
      realidade, de acordo com a tradição, requintes de modernidade,
      qualidade e perfeição atemporal.
    </p>

    <a
      class="font-poppins mb-6 bg-pinkFiap p-3 text-gray-100"
      href="https://marmorariaocoliseu.com.br/"
      target="_blank"
      >Acesse!
      <!-- <i class="fa-brands fa-github"></i
    >--></a
    >
  </div>`;
  asteroids = `<div class="flex flex-col justify-evenly items-center h-full">
  <div class="flex flex-col justify-center items-center">
    <img
      src="src/assets/asteroids.png"
      alt=""
      class="w-[35%] modal__logo"
    />
    <h2 class="modal__title font-asteroids text-gray-700 text-3xl">
      Asteroids
    </h2>
  </div>
  <div class="flex flex-col justify-center items-center">
    <img
      src="src/assets/asteroidsPrint.png"
      alt=""
      class="modal__img w-[70%]"
    />
    <p
      class="modal__description p-6 font-poppins text-sm text-justify indent-2"
    >
      Recriação do clássico jogo "Asteroids"!
    </p>
    <a
      class="font-poppins mb-6 bg-pinkFiap p-3 text-gray-100"
      href="https://github.com/thidematos/asteroids"
      target="_blank"
      >Acesse! <i class="fa-brands fa-github"></i
    ></a>
  </div>
</div>`;

  constructor() {
    this.addEventListeners();
  }

  addEventListeners() {
    const slideButton = document.querySelectorAll('.slide__button');
    const tabButtonContainer = document.querySelector('.tab__buttons');
    const projectsContainer = document.querySelector('.tab__content-projetos');
    const modalCover = document.querySelector('.modal__cover');

    slideButton.forEach((button) => {
      button.addEventListener('click', (event) => {
        this.nextMove(event);
      });
    });

    tabButtonContainer.addEventListener(
      'click',
      this.switchTabContent.bind(this)
    );

    projectsContainer.addEventListener(
      'click',
      this.setModalContent.bind(this)
    );

    modalCover.addEventListener('click', () => {
      this.toggleModal(false);
    });
  }

  nextMove(event) {
    const button = event.target.closest('.slide__button');

    if (!button) return;

    swiper.slideNext(300, false);
  }

  switchTabContent(event) {
    const tabContents = document.querySelectorAll('.tab__content');
    tabContents.forEach((content) => content.classList.add('hidden'));

    const tabButtons = document.querySelectorAll('.tab__button');
    tabButtons.forEach((button) =>
      button.classList.remove('swiper__tab-active')
    );

    const tab = event.target.closest('.tab__button');
    if (!tab) return;

    tab.classList.add('swiper__tab-active');
    const currentTab = document.querySelector(
      `.tab__content-${tab.dataset.content}`
    );

    currentTab.classList.remove('hidden');
  }

  toggleModal(state) {
    const modal = document.querySelector('.modal');
    const modalCover = document.querySelector('.modal__cover');

    if (state) {
      modal.classList.remove('hidden');
      modalCover.classList.remove('hidden');
    }

    if (!state) {
      modal.classList.add('hidden');
      modalCover.classList.add('hidden');

      modal.innerHTML = ``;
    }
  }

  setModalContent(event) {
    const modal = document.querySelector('.modal');
    const project = event.target.closest('.projects__button');
    if (!project) return;

    modal.insertAdjacentHTML('beforeend', this[project.dataset.project]);
    this.toggleModal(true);
  }
}

const app = new App();
