// imoveis-data.js

// Importante: Todos os campos numéricos (quartos, banheiros, vagas, areaTotal, price) 
// devem ser definidos como números (Number) para o filtro funcionar corretamente.

const imoveis = [
    {
        id: 1, 
        codigoImovel: 'LOTE-001', 
        title: 'Lote Exclusivo - 360m²', 
        type: 'terreno', 
        address: '-',
        description: '360m² para construir AGORA. Potencial máximo, investimento CERTO.',
        fullDescription: 'Uma oportunidade imperdível para quem busca espaço e as dimensões ideais para construir. Este lote possui 360 metros quadrados, em uma área plana, pronto para você dar vida ao seu projeto residencial ou de investimento.',
        price: 470000,
        areaTotal: 360, 
        quartos: 0, 
        banheiros: 0, 
        vagas: 0, 
        image: 'https://drive.google.com/uc?export=view&id=14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8',
        galeria: ['https://drive.google.com/uc?export=view&id=14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8']
    },
    {
        id: 2, 
        codigoImovel: 'CASA-123', 
        title: 'Casa Luxuosa com Piscina - Centro', 
        type: 'casa', 
        address: 'Av. Brasil, 450 - Centro',
        description: '4 suítes, acabamento de alto padrão e área gourmet completa.',
        fullDescription: 'Espetacular casa de alto luxo no coração da cidade. Com 4 suítes espaçosas, 2 salas de estar, home theater e uma área externa invejável com piscina aquecida e área gourmet com churrasqueira. Garagem para 3 carros. Perfeito para quem busca conforto e centralidade.',
        price: 1850000,
        areaTotal: 300, 
        quartos: 4, 
        banheiros: 5, 
        vagas: 3, 
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fit=crop&w=600&h=450',
        galeria: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fit=crop&w=600&h=450', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=600&h=450']
    },
    {
        id: 3, 
        codigoImovel: 'APTO-402', 
        title: 'Apartamento Moderno - Vista Mar', 
        type: 'apartamento', 
        address: 'Rua da Praia, 770 - Boqueirão',
        description: '2 quartos (1 suíte), varanda gourmet, lazer completo. Novo!',
        fullDescription: 'Lindo apartamento recém-entregue com vista frontal para o mar. Possui dois dormitórios, sendo uma suíte, sala dois ambientes e varanda gourmet. O condomínio oferece lazer de clube com piscina, academia, salão de festas e segurança 24h. Excelente localização.',
        price: 850000,
        areaTotal: 90, 
        quartos: 2, 
        banheiros: 2, 
        vagas: 1, 
        image: 'https://images.unsplash.com/photo-1583608757962-e64e9a05a8f4?fit=crop&w=600&h=450',
        galeria: ['https://images.unsplash.com/photo-1583608757962-e64e9a05a8f4?fit=crop&w=600&h=450', 'https://images.unsplash.com/photo-1594246002956-6a4a5d8d0a8b?fit=crop&w=600&h=450']
    },
    {
        id: 4, 
        codigoImovel: 'TERR-250', 
        title: 'Terreno Comercial - Esquina Movimentada', 
        type: 'terreno', 
        address: 'Av. Industrial, 50 - Distrito Industrial',
        description: '250m² de esquina, ideal para ponto comercial ou galpão.',
        fullDescription: 'Terreno de esquina com excelente visibilidade e fluxo de veículos, perfeito para construção de lojas, escritórios ou um pequeno galpão. Oportunidade única para empresários. Possui toda a documentação em dia.',
        price: 320000,
        areaTotal: 250, 
        quartos: 0, 
        banheiros: 0, 
        vagas: 0, 
        image: 'https://images.unsplash.com/photo-1549410313-09720c754d9c?fit=crop&w=600&h=450',
        galeria: ['https://images.unsplash.com/photo-1549410313-09720c754d9c?fit=crop&w=600&h=450']
    },
    {
        id: 5, 
        codigoImovel: 'CASA-289', 
        title: 'Casa Térrea Charmosa - Bairro Calmo', 
        type: 'casa', 
        address: 'Rua das Orquídeas, 25 - Vila Nova',
        description: '3 quartos, 1 suíte, jardim de inverno e 2 vagas cobertas.',
        fullDescription: 'Aconchegante casa térrea, ideal para famílias. Conta com 3 quartos, sendo um suíte, sala de TV e jantar integradas, e um lindo jardim de inverno. O bairro é residencial e muito tranquilo, próximo a escolas e parques.',
        price: 590000,
        areaTotal: 150, 
        quartos: 3, 
        banheiros: 2, 
        vagas: 2, 
        image: 'https://images.unsplash.com/photo-1600047509807-acf924062143?fit=crop&w=600&h=450',
        galeria: ['https://images.unsplash.com/photo-1600047509807-acf924062143?fit=crop&w=600&h=450']
    },
    {
        id: 6, 
        codigoImovel: 'APTO-901', 
        title: 'Cobertura Duplex com Terraço Privativo', 
        type: 'apartamento', 
        address: 'Av. Principal, 1500 - Alto da Serra',
        description: '3 suítes, jacuzzi no terraço, 270m² e vista panorâmica.',
        fullDescription: 'Incrível cobertura duplex com design moderno. São 3 suítes, sala com pé direito duplo e um terraço privativo com jacuzzi e espaço gourmet. Ideal para quem valoriza a privacidade e vistas deslumbrantes. Prédio com apenas duas unidades por andar.',
        price: 2500000,
        areaTotal: 270, 
        quartos: 3, 
        banheiros: 4, 
        vagas: 2, 
        image: 'https://images.unsplash.com/photo-1595503023531-72f5342d0a0b?fit=crop&w=600&h=450',
        galeria: ['https://images.unsplash.com/photo-1595503023531-72f5342d0a0b?fit=crop&w=600&h=450', 'https://images.unsplash.com/photo-1567496894077-7038e2118329?fit=crop&w=600&h=450']
    },
    {
        id: 7, 
        codigoImovel: 'CASA-510', 
        title: 'Sobrado Econômico - Ótimo Custo-Benefício', 
        type: 'casa', 
        address: 'Rua Sete de Setembro, 510 - Jardim Floresta',
        description: '2 quartos, quintal, perfeito para primeira moradia. Aceita financiamento.',
        fullDescription: 'Casa simples e funcional, ótima para jovens casais ou para quem busca a segurança da casa própria. Possui 2 quartos, sala, cozinha e um pequeno quintal. Localizada em rua tranquila, com fácil acesso ao transporte público.',
        price: 290000,
        areaTotal: 70, 
        quartos: 2, 
        banheiros: 1, 
        vagas: 1, 
        image: 'https://images.unsplash.com/photo-1580584126903-886884177d9c?fit=crop&w=600&h=450',
        galeria: ['https://images.unsplash.com/photo-1580584126903-886884177d9c?fit=crop&w=600&h=450']
    },
    {
        id: 8, 
        codigoImovel: 'LOTE-1000', 
        title: 'Área Rural para Chácara - 1000m²', 
        type: 'terreno', 
        address: 'Estrada da Serra, S/N - Zona Rural',
        description: 'Terreno amplo para lazer e cultivo. Excelente para construir uma CHÁCARA.',
        fullDescription: 'Localização privilegiada na zona rural, com acesso facilitado e vista para as montanhas. O lote de 1000m² é ideal para construir sua chácara, piscina e área de lazer longe do barulho da cidade. Água e luz já instaladas.',
        price: 150000,
        areaTotal: 1000, 
        quartos: 0, 
        banheiros: 0, 
        vagas: 0, 
        image: 'https://images.unsplash.com/photo-1517454228919-bf9560eb1168?fit=crop&w=600&h=450',
        galeria: ['https://images.unsplash.com/photo-1517454228919-bf9560eb1168?fit=crop&w=600&h=450']
    },
    {
        id: 9, 
        codigoImovel: 'APTO-705', 
        title: 'Kitnet Compacta - Perto da Universidade', 
        type: 'apartamento', 
        address: 'Rua do Estudante, 10 - Universitário',
        description: 'Studio mobiliado, perfeito para estudantes ou investimento em aluguel.',
        fullDescription: 'Kitnet super funcional e totalmente mobiliada, localizada a 5 minutos a pé da principal universidade da cidade. Possui cozinha americana e banheiro moderno. Baixo custo de condomínio. Ótimo para quem procura algo pequeno e prático.',
        price: 190000,
        areaTotal: 35, 
        quartos: 1, 
        banheiros: 1, 
        vagas: 0, // Sem vaga de garagem
        image: 'https://images.unsplash.com/photo-1574519543161-5121b6d081f9?fit=crop&w=600&h=450',
        galeria: ['https://images.unsplash.com/photo-1574519543161-5121b6d081f9?fit=crop&w=600&h=450']
    },
    {
        id: 10, 
        codigoImovel: 'CASA-999', 
        title: 'Mansão de Cinema com 5 Suítes', 
        type: 'casa', 
        address: 'Rua dos Milionários, 1 - Alphaville',
        description: 'O auge do luxo e exclusividade. 5 suítes master, sauna e heliponto.',
        fullDescription: 'Propriedade cinematográfica em condomínio fechado de altíssimo padrão. Arquitetura moderna, elevador interno, 5 suítes completas, área de lazer completa com quadra de tênis, sauna e cinema particular. Um verdadeiro refúgio de luxo.',
        price: 8500000,
        areaTotal: 1200, 
        quartos: 5, 
        banheiros: 7, 
        vagas: 6, 
        image: 'https://images.unsplash.com/photo-1627443195972-e1d8d3211516?fit=crop&w=600&h=450',
        galeria: ['https://images.unsplash.com/photo-1627443195972-e1d8d3211516?fit=crop&w=600&h=450', 'https://images.unsplash.com/photo-1507747806497-b20f92b72449?fit=crop&w=600&h=450']
    },
];

// Define a variável global que é usada pelo script em imoveis.html
window.imoveis = imoveis;









