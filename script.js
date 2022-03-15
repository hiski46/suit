// const judul = document.getElementById("judul");
// judul.style.color = 'red';
// judul.style.backgroundColor="#ccc";
// judul.innerHTML= "Hiskia";

// const p = document.getElementsByTagName('p');

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelectorAll('p');

const body = document.getElementsByTagName('body')[0];

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});


document.body.addEventListener('mousemove', function(e) {
    //e.clientX
    const xPos = Math.round((e.clientX/window.innerWidth)*255);
    const yPos = Math.round((e.clientY/window.innerHeight)*255);
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+','+100+')';
})