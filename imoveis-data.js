const imoveis = [
    {
        id: 1,
        title: 'Apartamento Moderno com Lazer Completo',
        type: 'apartamento', // Chave para filtro de tipo
        description: '2 quartos, 1 suíte, varanda gourmet. Lazer completo.',
        price: 850000,
        image: 'https://images.unsplash.com/photo-1570129477492-45e003058866?q=80&w=2670&auto=format&fit=crop',
        // Otimização: Keywords em minúsculo e simplificados para busca
        keyword: 'apartamento moderno suíte varanda gourmet lazer completo piscina academia salão de festas alto padrão recém construído vista', 
        
        // Chaves para filtros de características (MUITO IMPORTANTES)
        quartos: 2, 
        banheiros: 2, 
        vagas: 1, 

        fullDescription: 'Apartamento de alto padrão, recém-construído e com uma vista deslumbrante da cidade. A varanda gourmet é perfeita para receber amigos e a área de lazer do condomínio conta com piscina, academia e salão de festas. Uma oportunidade imperdível para quem busca qualidade de vida e praticidade no dia a dia.',
        galeria: [
            'https://images.unsplash.com/photo-1570129477492-45e003058866?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896555-c58066f21272?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop'
        ]
    },
    {
        id: 2,
        title: 'Casa Espaçosa com Piscina',
        type: 'casa',
        description: '4 quartos, 3 banheiros, 2 vagas. Área de lazer incrível.',
        price: 1500000,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b169?q=80&w=2574&auto=format&fit=crop',
        keyword: 'casa espaçosa piscina luxo lazer condomínio bairro tranquilo',
        
        quartos: 4, 
        banheiros: 3, 
        vagas: 2,

        fullDescription: 'Esta magnífica casa oferece o melhor em conforto e elegância. Com amplos espaços, acabamentos de alta qualidade e uma área de lazer completa com piscina, é o local ideal para sua família desfrutar de momentos inesquecíveis. Localizada em um bairro tranquilo e seguro, com fácil acesso às principais vias da cidade.',
        galeria: [
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b169?q=80&w=2574&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1558036117-15d822180860?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592595896555-c58066f21272?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop'
        ]
    },
    {
        id: 3,
        title: 'Terreno em Condomínio de Alto Padrão',
        type: 'terreno',
        description: '800 m². Perfeito para construir a casa dos seus sonhos.',
        price: 350000,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
        keyword: 'terreno condomínio construir grande plano quintal investimento segurança clube',
        
        quartos: 0, 
        banheiros: 0, 
        vagas: 0,

        fullDescription: 'Grande oportunidade de investimento em um dos melhores condomínios da região. Terreno plano com 800m², ideal para a construção de uma residência com amplo quintal e área de lazer. O condomínio oferece segurança 24 horas, clube e quadras esportivas.',
        galeria: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop'
        ]
    },
    {
        id: 4,
        title: 'Apartamento Compacto e Funcional',
        type: 'apartamento',
        description: '1 quarto, 1 banheiro. Ideal para solteiros ou casais.',
        price: 450000,
        image: 'https://images.unsplash.com/photo-1493663284861-bdc1157121b2?q=80&w=2670&auto=format&fit=crop',
        keyword: 'apartamento compacto funcional solteiros casais jovens alugar',
        
        quartos: 1, 
        banheiros: 1, 
        vagas: 1,

        fullDescription: 'Apartamento compacto e funcional, perfeito para quem busca praticidade. Localizado em uma área de fácil acesso, próximo a comércios e transporte público. Ideal para solteiros ou casais jovens.',
        galeria: [
            'https://images.unsplash.com/photo-1493663284861-bdc1157121b2?q=80&w=2670&auto=format&fit=crop'
        ]
    },
    {
        id: 5,
        title: 'Casa de Campo Aconchegante',
        type: 'casa',
        description: '3 quartos, 2 banheiros. Varanda com vista para a natureza.',
        price: 900000,
        image: 'https://images.unsplash.com/photo-1560518883-ce09259bc43e?q=80&w=2670&auto=format&fit=crop',
        keyword: 'casa campo aconchegante natureza varanda relaxar refúgio tranquilidade',
        
        quartos: 3, 
        banheiros: 2, 
        vagas: 2,

        fullDescription: 'Experimente a tranquilidade do campo sem abrir mão do conforto. Esta casa aconchegante possui uma varanda espaçosa com vista para a natureza exuberante. O refúgio perfeito para relaxar e fugir do ritmo da cidade.',
        galeria: [
            'https://images.unsplash.com/photo-1560518883-ce09259bc43e?q=80&w=2670&auto=format&fit=crop'
        ]
    },
    {
        id: 6,
        title: 'Apartamento Duplex de Luxo',
        type: 'apartamento',
        description: '2 andares, 3 suítes, acabamento de alto padrão.',
        price: 1800000,
        image: 'https://images.unsplash.com/photo-1558000570-5b123659223e?q=80&w=2574&auto=format&fit=crop',
        keyword: 'apartamento duplex suíte alto padrão luxo sofisticação',
        
        quartos: 3, 
        banheiros: 3, 
        vagas: 2,

        fullDescription: 'Este apartamento duplex impressiona com seus dois andares e acabamento de alto padrão. Com três suítes espaçosas, oferece o máximo de privacidade e conforto para toda a família. Um imóvel de luxo para quem não abre mão de sofisticação.',
        galeria: [
            'https://images.unsplash.com/photo-1558000570-5b123659223e?q=80&w=2574&auto=format&fit=crop'
        ]
    },
    {
        id: 7,
        title: 'Casa em Condomínio com Jardim Amplo',
        type: 'casa',
        description: '3 quartos, 2 banheiros, 2 vagas. Ótimo jardim.',
        price: 1100000,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a60?q=80&w=2670&auto=format&fit=crop',
        keyword: 'casa jardim condomínio família segurança natureza',
        
        quartos: 3, 
        banheiros: 2, 
        vagas: 2,

        fullDescription: 'Moradia ideal para a família que busca segurança e contato com a natureza. Esta casa em condomínio oferece um ótimo jardim para as crianças brincarem e uma planta bem distribuída para o conforto de todos.',
        galeria: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a60?q=80&w=2670&auto=format&fit=crop'
        ]
    },
    {
        id: 8,
        title: 'Apartamento com Vista Panorâmica para o Mar',
        type: 'apartamento',
        description: 'Apartamento de 1 quarto com varanda, vista incrível para o mar.',
        price: 650000,
        image: 'https://images.unsplash.com/photo-1549419167-27b9ef8b939e?q=80&w=2670&auto=format&fit=crop',
        keyword: 'apartamento mar praia vista varanda férias lazer',
        
        quartos: 1, 
        banheiros: 1, 
        vagas: 1,

        fullDescription: 'Desfrute de uma vista panorâmica para o mar todos os dias! Este apartamento de um quarto com varanda é a oportunidade perfeita para quem sonha em morar perto da praia ou ter um imóvel para lazer e férias.',
        galeria: [
            'https://images.unsplash.com/photo-1549419167-27b9ef8b939e?q=80&w=2670&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502691873130-bb02878c5ed3?q=80&w=2670&auto=format&fit=crop'
        ]
    }
];

// Torna a variável 'imoveis' acessível globalmente
window.imoveis = imoveis;
