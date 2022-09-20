import 'bootstrap';//Importar el JavaScript de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';//Importación de CSS de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';//Importación de CSS Icons
import './estilos.css';//Importación de estilos personalizados
import './estilos.scss';//Importación de estilos scss

//Importar imagenes
import Imagen from './img-educa1.jpg';
import Imagen2 from './img-educa2.jpg';
import Imagen3 from './img-educa3.jpg';
import Imagen4 from './img-impacto1.jpg';

//Registrar service worker
if('serviceWorker' in navigator)
{
	window.addEventListener('load', () =>
	{
		navigator.serviceWorker.register('./service-worker.js').then(registration =>
		{
			console.log("Service Worker registrado", registration);
		}).catch(err =>
		{
			console.log("Service Worker no registrado", err);
		});
	});
}
function crear_index()
{
	const elemento = document.getElementById('img-car-1');
	const elemento2 = document.getElementById('img-car-2');
	const elemento3 = document.getElementById('img-car-3');
	const elemento4 = document.getElementById('img-impacto');

	elemento.src = Imagen;
	elemento2.src = Imagen2;
	elemento3.src = Imagen3;
	elemento4.src = Imagen4;
}
crear_index();
