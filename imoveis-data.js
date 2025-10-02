const imoveis = [
    {
        // 1. DADOS BASE E IDENTIFICAÇÃO
        id: 1, // Identificador único
        codigoImovel: '1', // Código de referência (ótimo para atendimento ao cliente)
        
        // 2. TÍTULO E DESCRIÇÃO (SEO e Impacto)
        title: 'Lote Plano - 360m²', // Título completo e amigável para SEO
        type: 'Lote', // Tipo de Imóvel para filtro
        
        // DESCRIÇÃO CURTA: Impacto imediato na listagem de resultados
        description: '360m² para construir AGORA. O tamanho ideal que garante espaço para a casa dos sonhos e o lazer da família. Potencial máximo, investimento CERTO.',
        
        // DESCRIÇÃO LONGA: Conteúdo detalhado para a página do imóvel
        fullDescription: 'Oportunidade única: Lote de 360 m². Metragem padrão e muito procurada (12x30m), garantindo excelente aproveitamento do terreno para construção. Com documentação regularizada e pronto para construir, é a escolha inteligente para quem busca um investimento seguro ou quer sair do aluguel. Um terreno sólido no tamanho certo, em uma área de fácil acesso. Agende sua visita e visualize seu projeto!',
        
        // 3. VALORES E METRAGEM (Filtros Numéricos)
        price: 470000,
        areaTotal: 360, // Área em número (fundamental para filtros e ordenação)
        areaFrente: 12, // Exemplo de medida
        areaFundo: 30, // Exemplo de medida
        
        // 4. LOCALIZAÇÃO (Mapas e Busca Local)
        location: {
            city: 'Contagem',
            state: 'MG',
        },
        
        // 5. CARACTERÍSTICAS (Bullet Points para Leitura Rápida)
        caracteristicas: [
            'Plano (Facilidade e economia na construção)',
            'Pronto para construir',
            'Documentação 100% regularizada',
            'Metragem 12x30m',
            'Infraestrutura completa (Água, luz, asfalto)',
        ],
        
        // 6. FILTROS BÁSICOS (Mantidos)
        quartos: 0, 
        banheiros: 0, 
        vagas: 0, 

        // 7. MÍDIA (URLs Confiáveis)
        // **ATENÇÃO: Links do Google Drive não são recomendados para sites de produção**
        // Troque por URLs de um servidor ou CDN (ex: Cloudinary, S3, ou servidor próprio)
        urlSlug: 'lote-360m-plano-bairro-exemplo', // URL amigável para a página do imóvel
        galeria: [
            'https://suaempresa.com.br/images/lote-360m-foto1.jpg',
            'https://suaempresa.com.br/images/lote-360m-croqui.jpg',
        ]
    }
];
