$(document).ready(function () {
    console.log('jQuery bien chargé.');
    $('#img').on('load', () => {
        console.log('image chargée');
         $('#chargement').hide();
         $('#contenu').show();
        $('#btn_zoom').click(() => {
            console.log('zoom');
            // $('#btn_zoom').prop('disabled',true);
            // $('#btn_dezoom').prop('disabled',false)
            $('img').each((index, image) => {
                console.log('img');
                console.log(image);
                // $(image).css('width', '100%')
                // $(image).css('height', '100%')
                let hauteur = Math.floor(parseInt($(image).css('height').replaceAll('px',''))*1.10);
                let largeur = Math.floor(parseInt($(image).css('width').replaceAll('px',''))*1.10);
                letNewHauteur=hauteur+'px'
                letNewLargeur=largeur+'px'
                console.log(letNewHauteur);
                $(image).css('width', letNewLargeur)
                $(image).css('height',letNewHauteur)

            })
        })
        $('#btn_dezoom').click(() => {
            console.log('dezoom');
            // $('#btn_zoom').prop('disabled',false);
            // $('#btn_dezoom').prop('disabled',true);
            $('img').each((index, image) => {
                console.log('img');
                console.log(image);
                // $(image).css('width', '25%')
                // $(image).css('height', '25%')
                let hauteur = Math.floor(parseInt($(image).css('height').replaceAll('px',''))*.90);
                let largeur = Math.floor(parseInt($(image).css('width').replaceAll('px',''))*.90);
                letNewHauteur=hauteur+'px'
                letNewLargeur=largeur+'px'
                console.log(letNewHauteur);
                $(image).css('width', letNewLargeur)
                $(image).css('height',letNewHauteur)
            })
        })
    })
})
