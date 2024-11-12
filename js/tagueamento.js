// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Pageviews
gtag('event', 'page_view', {
    'page_title': document.title,
    'page_path': window.location.pathname,
    'page_location': window.location.href
});

// Eventos - menu
document.getElementById('menu-fechar').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6-menu',
        'event_label': 'botao-menu-fechar',
        'value': 1
    });
});

document.getElementById('menu-inicio').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'menu-inicio',
        'value': 1
    });
});

document.getElementById('menu-analise').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'menu-analise',
        'value': 1
    });
});

document.getElementById('menu-analise-tristique').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'menu-analise-tristique',
        'value': 1
    });
});

document.getElementById('menu-analise-conclusoes').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'menu-analise-conclusoes',
        'value': 1
    });
});

// Link "Sobre"
document.getElementById('menu-sobre').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'menu-sobre',
        'value': 1
    });
});

// Sublink "Contato"
document.getElementById('menu-sobre-contato').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'menu-sobre-contato',
        'value': 1
    });
});

// Sublink "História"
document.getElementById('menu-sobre-historia').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'menu-sobre-historia',
        'value': 1
    });
});

// Sublink "Valores"
document.getElementById('menu-sobre-valores').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'menu-sobre-valores',
        'value': 1
    });
});

document.getElementById('menu-contato').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'page_location': window.location.href,
        'element_name': 'entre_em_contato',
        'element_group': 'menu'
    });
});

document.getElementById('menu-download').addEventListener('click', function() {
    gtag('event', 'file_download', {
        'event_category': 'case-dp6',
        'page_location': window.location.href,
        'element_name': 'download_pdf',
        'element_group': 'menu'
    });
});

// Eventos - Página Início
document.getElementById('botao-analise-inicio').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'botao-analise-inicio',
        'value': 1
    });
});

// Eventos - Página Análise
document.getElementById('lorem-texto').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'page_location': window.location.href,
        'element_name': 'lorem',
        'element_group': 'ver_mais'
    });
});

document.getElementById('ipsum').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'page_location': window.location.href,
        'element_name': 'ipsum',
        'element_group': 'ver_mais'
    });
});

document.getElementById('dolor').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'page_location': window.location.href,
        'element_name': 'dolor',
        'element_group': 'ver_mais'
    });
});

document.getElementById('botao-sobre-analise').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'botao-sobre-analise',
        'value': 1
    });
});

// Eventos - Página Sobre
document.querySelector('form#contato').addEventListener('focus', function() {
    gtag('event', 'form_start', {
        'page_location': window.location.href,
        'form_id': document.querySelector('form#contato').id,
        'form_name': document.querySelector('form#contato').name || 'Formulário sem nome',
        'form_destination': document.querySelector('form#contato').action || 'Destino não especificado'
    });
}, true); 
document.querySelector('form#contato').addEventListener('focus', function() {
    gtag('event', 'form_submit', {
        'page_location': window.location.href, // URL da página atual
        'form_id': document.querySelector('form').id, // ID do elemento <form>
        'form_name': document.querySelector('form').name || 'Formulário sem nome', // Nome do elemento <form> (ou texto padrão)
        'form_destination': document.querySelector('form').action || 'Destino não especificado', // URL para onde o formulário está sendo enviado
        'form_submit_text': document.querySelector('form button[type="submit"]').innerText // Texto do botão de envio
    });
});    

document.querySelector('form#contato').addEventListener('focus', function() {
    gtag('event', 'form_submit', {
        'page_location': window.location.href, // URL da página atual
        'form_id': document.querySelector('form').id, // ID do elemento <form>
        'form_name': document.querySelector('form').name || 'Formulário sem nome', // Nome do elemento <form> (ou texto padrão)
        'form_destination': document.querySelector('form').action || 'Destino não especificado', // URL para onde o formulário está sendo enviado
        'form_submit_text': document.querySelector('form button[type="submit"]').innerText // Texto do botão de envio
    });
});    

document.querySelectorAll('.lightbox').forEach(function(element) {
    element.addEventListener('click', function() {
        gtag('event', 'click', {
            'event_category': 'case-dp6',
            'event_label': 'lightbox',
            'value': 1
        });
    });
});

document.getElementById('botao-sobre-inicio').addEventListener('click', function() {
    gtag('event', 'click', {
        'event_category': 'case-dp6',
        'event_label': 'botao-sobre-inicio',
        'value': 1
    });
});