
X = 0;

function $(id) {
    return document.getElementById(id);
}

window.addEventListener('load', function(){
    var matrix = $('matrix').getElementsByTagName('ul');
    
    $('h1').innerText = window.innerWidth + 'px';

    for (var i = 0; i < matrix.length; i++) {
        var row = matrix[i].getElementsByTagName('li');
        for (var j = 0; j < row.length; j++) {
            row[j].style.width = window.innerWidth + 'px';
            row[j].style.height = window.innerHeight + 'px';
        }
    }

    $('right').addEventListener('click', function(){
        X -= window.innerWidth;
        matrix[0].style['transition'] = 'all .5s ease 0s';
        matrix[0].style['transform'] = 'translate3d(' + X + 'px, 0px, 0px)';
    });

    $('left').addEventListener('click', function(){
        X += window.innerWidth;
        matrix[0].style['transition'] = 'all 1s ease 0s';
        matrix[0].style['transform'] = 'translate3d(' + X + 'px, 0px, 0px)';
    });

    var menu = $('menu').getElementsByTagName('a');
    var x = 0;
    for (var k = 0; k < menu.length; k++) {
        menu[k].x = x;
        menu[k].addEventListener('click', function(){
            matrix[0].style['transition'] = 'all .5s ease 0s';
            matrix[0].style['transform'] = 'translate3d(' + this.x + 'px, 0px, 0px)';
        });
        x -= window.innerWidth;
    }
});