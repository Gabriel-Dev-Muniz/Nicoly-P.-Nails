// PERSONALIZE A MARCA AQUI. Troque os campos de exemplo pelos dados reais.
export const siteConfig = {
  brand: 'Nicoly P. Nails', // Nome provisório baseado no Instagram; ajuste se necessário
  logo: '/images/logo.jpg',
  monogram: 'NP',
  role: 'Nail designer',
  tagline: 'Beleza nos detalhes. Cuidado em cada escolha.',
  description: 'Um espaço para cuidar de você, valorizar sua beleza e transformar pequenos detalhes em momentos especiais.',
  aboutTitle: 'Prazer, sou a Nicoly Pacheco! 🤍',
  about: 'Tenho 25 anos e estou começando a trilhar meu caminho no mundo das unhas, realizando um sonho que é construir minha carreira profissional como nail designer. Já realizei cursos de Alongamento no Molde F1 e Esmaltação em Gel, técnicas com as quais trabalho atualmente. Sou iniciante nessa área, mas tenho muita vontade de aprender, evoluir e aperfeiçoar cada vez mais meu trabalho. Acredito que cada atendimento é uma oportunidade de crescer e entregar o meu melhor. Tudo está sendo construído com muito carinho, dedicação e amor pelo que faço. Meu maior objetivo é proporcionar momentos de autoestima e cuidado, fazendo com que cada cliente se sinta especial. Será um prazer fazer parte da tua jornada de autocuidado! 💅🏻✨',
  profileImage: '/images/fotoPrincipal.jpg',
  heroImage: '/images/imagemInicial.jpg',
  priceImage: '/images/tabelaValores.jpg',
  whatsapp: '5554992090334', // Formato internacional: 55 + DDD + número, somente dígitos
  instagram: 'https://www.instagram.com/nicolypnaildesigner/',
  instagramHandle: '@nicolypnaildesigner',
  gallery: [
    { src: '/images/unhaUm.jpg', alt: 'Unhas delicadas em tom nude' },
    { src: '/images/unhaDois.jpg', alt: 'Detalhe de nail art elegante' },
    { src: '/images/unhaTres.jpg', alt: 'Manicure com acabamento sofisticado' },
    { src: '/images/unhaCinco.jpg', alt: 'Inspiração de unhas' },
    { src: '/images/unhaQuatro.jpg', alt: 'Unhas com acabamento delicado' },
    { src: '/images/unhaSeis.jpg', alt: 'Modelos que mudaram sua autoestima' }
  ]
}

export const whatsappLink = (message = 'Olá! Gostaria de consultar horários disponíveis.') =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
