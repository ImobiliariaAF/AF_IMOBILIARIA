// imoveis-data.js

const imoveis = [
    {
        id: 1, 
        codigoImovel: 'LOTE-1', 
        title: 'Lote - 360m²', 
        type: 'Lote', // Mantenha o type 'Lote' para diferenciar
        description: '360m² para construir AGORA. Potencial máximo, investimento CERTO.',
        fullDescription: 'Oportunidade única: Lote de 360 m². Metragem padrão (12x30m), garantindo excelente aproveitamento do terreno para construção. Documentação regularizada e pronto para construir.',
        price: 470000,
        areaTotal: 360, 
        image: 'https://drive.google.com/file/d/14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8/view?usp=sharing', 
        quartos: 0,
        banheiros: 0,
        vagas: 0,
        galeria: [
            'https://drive.google.com/file/d/14cBK_MU3hqEfS-cBQGOasFkidXtPMWU8/view?usp=sharing']
    },
    {
        id: 2, 
        codigoImovel: 'CASA-456', 
        title: 'Casa Luxuosa com 3 Quartos e Piscina', 
        type: 'Casa', 
        description: '3 quartos, 2 suítes. O conforto e o luxo que sua família merece.',
        fullDescription: 'Residência de alto padrão com acabamentos em porcelanato, área gourmet completa e piscina com borda infinita. O imóvel ideal para quem busca exclusividade e lazer.',
        price: 1500000,
        areaTotal: 280, 
        image: 'https://via.placeholder.com/600x400?text=Casa+Principal', 
        quartos: 3,
        banheiros: 4,
        vagas: 2,
        galeria: [
            'https://via.placeholder.com/200x150?text=Piscina',
            'https://via.placeholder.com/200x150?text=Sala',
            'https://via.placeholder.com/200x150?text=Suite'
        ]
    }
    // Adicione mais imóveis aqui!
];

// Torna a lista acessível ao main-detalhe.js
window.imoveis = imoveis;


