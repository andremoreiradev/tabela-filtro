let bebidas = [
    {
        id: 1,
        nome: 'Coca Cola',
        descricao: 'KS 390ml',
        quantidade: 12,
        foto: 'https://seivina.com.vn/uploads/source/products/co-(9).jpg',
    },
    {
        id: 2,
        nome: 'Ypioca',
        descricao: 'Prata 960ml',
        quantidade: 24,
        foto: 'https://hiperideal.vteximg.com.br/arquivos/ids/181976-1000-1000/1908510.jpg?v=637254061913470000'
    },
    {
        id: 3,
        nome: 'Vodka Slova',
        descricao: 'Garrafa 1Lt',
        quantidade: 6,
        foto: ' https://media.cotabest.com.br/media/sku/vodka-limao-garrafa-965ml-slova-un.png '
    },
    {
        id: 4,
        nome: 'Vinho São Braz',
        descricao: 'O vinho do santo forte, garrafão 900mL',
        quantidade: 18,
        foto: 'https://saobrazbebidas.com.br/wp-content/uploads/2022/04/Frame-93.png'
    },
    {
        id: 5,
        nome: 'Sapupara',
        descricao: 'Celular 450ml',
        quantidade: 20,
        foto: 'https://images-americanas.b2w.io/produtos/3171868445/imagens/aguardente-ypioka-limao-meiota-marcante-480ml/3171868453_1_xlarge.jpg'
    },
    {
        id: 6,
        nome: 'Cachaça Caranguejo',
        descricao: 'Picthulinha',
        quantidade: 12,
        foto: 'https://cdn.awsli.com.br/600x450/1958/1958204/produto/203200457/screenshot_20221124-215601_chrome-ufiigo.jpg'
    },
    {
        id: 7,
        nome: 'Kaiser',
        descricao: 'Lata 395ml',
        quantidade: 12,
        foto: 'https://deskontao.agilecdn.com.br/24996_1.jpg?v=17-34904774'
    },
    {
        id: 8,
        nome: 'Vinho Vale Real',
        descricao: 'Garrafa 900ml',
        quantidade: 12,
        foto: 'https://us-southeast-1.linodeobjects.com/storage/evandro/media/uploads/produto/beb_vinho_coquetel_compo_vale_real_900ml_e5c786f2-3fab-477e-a23b-7bc6315a58ba.jpeg'
    },
    {
        id: 9,
        nome: 'Suco Del Vale',
        descricao: 'Garrafa 1L',
        quantidade: 6,
        foto: 'https://www.drogariaminasbrasil.com.br/media/product/098/suco-del-valle-frut-sabor-laranja-1l-e4d.jpg'
    },
    {
        id: 10,
        nome: 'Skol',
        descricao: 'Roberto Claudio',
        quantidade: 24,
        foto: 'https://pbs.twimg.com/media/ECW0Pt6WsAAmJDZ.jpg'
    },
    {
        id: 11,
        nome: 'Colonial',
        descricao: 'Garrafa 960ml',
        quantidade: 20,
        foto: 'https://cdn.awsli.com.br/600x450/2080/2080181/produto/176170158/22fd37c904.jpg'
    },
    {
        id: 12,
        nome: 'Rum Montila',
        descricao: 'Garrafa 900ml',
        quantidade: 24,
        foto: 'https://images.tcdn.com.br/img/img_prod/686651/rum_montilla_carta_cristal_1000ml_14251640_1_20190308181452.jpg'
    },
];

    function abrirModal(foto, nome) {
    modalFotoConteudo.innerHTML =`<img width="100%" src="${foto}">`;
    modalTitulo.innerHTML = nome;
}

function atualizarTabela(lista) {
    lista.map((cada) => {
        document.getElementById('tabela-dados').innerHTML += `
            <tr>
                <td>${cada.id}</td>
                <td>${cada.nome}</td>
                <td>${cada.descricao}</td>
                <td>${cada.quantidade}</td>
                <td>
                <a onclick="abrirModal('${cada.foto}', '${cada.nome}')" href="#" data-bs-toggle="modal" data-bs-target="#modalFoto">
                <img src="${cada.foto}" width="50px">
                </a>                
                </td>
                <td>
                    <button class="btn btn-outline-warning btn-sm">Editar</button>
                    <button class="btn btn-outline-danger btn-sm">Excluir</button>
                </td>
            </tr>
        `;
    });
}

atualizarTabela(bebidas);