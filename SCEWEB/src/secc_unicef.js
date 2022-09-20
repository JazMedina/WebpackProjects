import 'bootstrap';//Importar el JavaScript de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';//Importación de CSS de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';//Importación de CSS Icons
import './estilos.css';//Importación de estilos personalizados
import './estilos.scss';//Importación de estilos scss

//Importar imagenes
import Imagen from './img-unicef.jpg';
import Imagen2 from './img-educa2.jpg';

function crea_vista_unicef()
{
	const elemento = document.getElementById('img-portada-unicef');
	const elemento2 = document.getElementById('img-nino-covid');

	elemento.src = Imagen2;
	elemento2.src = Imagen;
}
crea_vista_unicef();