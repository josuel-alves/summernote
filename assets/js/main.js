//Editor
jQuery(document).ready(function () {
    jQuery('#summernote').summernote({
        lang: 'pt-BR',
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['link', ['link']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['view', ['codeview']],
            ['height', ['height']]
        ],
        height: "300px"
    });
/*
    jQuery('#summernote2').summernote({
        lang: 'pt-BR',
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['link', ['link']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['view', ['codeview']],
            ['height', ['height']]
        ],

        height: "300px"

    });

    jQuery('#summernote3').summernote({
        lang: 'pt-BR',
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['link', ['link']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['view', ['codeview']],
            ['height', ['height']]
        ],

        height: "300px"

    });
*/
});

(function ($) {
    $.extend(
            $.summernote.lang,
            {
                'pt-BR': {
                    font: {
                        bold: 'Negrito',
                        italic: 'Itálico',
                        underline: 'Sublinhado',
                        clear: 'Remover estilo da fonte',
                        height: 'Altura da linha',
                        name: 'Fonte',
                        strikethrough: 'Riscado',
                        size: 'Tamanho da fonte'
                    },
                    link: {
                        link: 'Link',
                        insert: 'Inserir link',
                        unlink: 'Remover link',
                        edit: 'Editar',
                        textToDisplay: 'Texto para exibir',
                        url: 'Para qual URL esse link leva?',
                        openInNewWindow: 'Abrir em uma nova janela'
                    },
                    table: {
                        table: 'Tabela'
                    },
                    hr: {
                        insert: 'Inserir linha horizontal'
                    },
                    style: {
                        style: 'Estilo',
                        normal: 'Normal',
                        blockquote: 'Citação',
                        pre: 'Código',
                        h1: 'Tí­tulo 1',
                        h2: 'Título 2',
                        h3: 'Tí­tulo 3',
                        h4: 'Título 4',
                        h5: 'Título 5',
                        h6: 'Título 6'
                    },
                    lists: {
                        unordered: 'Lista com marcadores',
                        ordered: 'Lista numerada'
                    },
                    options: {
                        help: 'Ajuda',
                        fullscreen: 'Tela cheia',
                        codeview: 'Ver código-fonte'
                    },
                    paragraph: {
                        paragraph: 'Parágrafo',
                        outdent: 'Menor tabulação',
                        indent: 'Maior tabulação',
                        left: 'Alinhar à  esquerda',
                        center: 'Alinhar ao centro',
                        right: 'Alinha à  direita',
                        justify: 'Justificado'
                    },
                    color: {
                        recent: 'Cor recente',
                        more: 'Mais cores',
                        background: 'Fundo',
                        foreground: 'Fonte',
                        transparent: 'Transparente',
                        setTransparent: 'Fundo transparente',
                        reset: 'Restaurar',
                        resetToDefault: 'Restaurar padrão'
                    },
                    shortcut: {
                        shortcuts: 'Atalhos do teclado',
                        close: 'Fechar',
                        textFormatting: 'Formatação de texto',
                        action: 'Ação',
                        paragraphFormatting: 'Formatação de parágrafo',
                        documentStyle: 'Estilo de documento'
                    },
                    history: {
                        undo: 'Desfazer',
                        redo: 'Refazer'
                    },
                    help: {
                        'insertParagraph': 'Inserir Parágrafo',
                        'undo': 'Desfazer o último comando',
                        'redo': 'Refazer o último comando',
                        'tab': 'Tab',
                        'untab': 'Desfazer tab',
                        'bold': 'Colocar em negrito',
                        'italic': 'Colocar em itálico',
                        'underline': 'Sublinhado',
                        'strikethrough': 'Tachado',
                        'removeFormat': 'Remover estilo',
                        'justifyLeft': 'Alinhar à esquerda',
                        'justifyCenter': 'Centralizar',
                        'justifyRight': 'Alinhar à esquerda',
                        'justifyFull': 'Justificar',
                        'insertUnorderedList': 'Lista não ordenada',
                        'insertOrderedList': 'Lista ordenada',
                        'outdent': 'Recuar parágrafo atual',
                        'indent': 'Avançar parágrafo atual',
                        'formatPara': 'Alterar formato do bloco para parÃ¡grafo(tag P)',
                        'formatH1': 'Alterar formato do bloco para H1',
                        'formatH2': 'Alterar formato do bloco para H2',
                        'formatH3': 'Alterar formato do bloco para H3',
                        'formatH4': 'Alterar formato do bloco para H4',
                        'formatH5': 'Alterar formato do bloco para H5',
                        'formatH6': 'Alterar formato do bloco para H6',
                        'insertHorizontalRule': 'Inserir régua horizontal',
                        'linkDialog.show': 'Inserir um Hiperlink'
                    }
                }
            });
})(jQuery);