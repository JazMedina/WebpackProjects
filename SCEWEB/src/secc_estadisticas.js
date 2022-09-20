import Chart from 'chart.js/auto'//Importar chart.js
import 'bootstrap';//Importar el JavaScript de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';//Importación de CSS de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';//Importación de CSS Icons7
import './estilos.css';//Importación de estilos personalizados
import './estilos.scss';//Importación de estilos scss

//Importar archivos csv, json5 y yamls
import Datos_uso_tics from './uso_tics.csv';
import Datos_disercion from './disercion_ciclo.json5';
import Datos_act_esc from './actividades_escolares.yaml';


function crear_grafica()
{
	const grafica_tics = document.getElementById('grafica_tics');
	const grafica_inscripcion = document.getElementById('grafica_inscripcion');

	new Chart(grafica_tics, {
		type: 'bar',
		data: {
			labels: [Datos_uso_tics[1][0], Datos_uso_tics[2][0], Datos_uso_tics[3][0], Datos_uso_tics[4][0], Datos_uso_tics[5][0]],
			datasets: [{
				label: '% de población',
				data: [Datos_uso_tics[1][1], Datos_uso_tics[2][1], Datos_uso_tics[3][1], Datos_uso_tics[4][1], Datos_uso_tics[5][1]],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)'

				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});
	new Chart(grafica_inscripcion, {
		type: 'bar',
		data: {
			labels: ['Las clases a distancia son poco funcionales para el aprendizaje',
				'Alguno de sus padres o tutores se quedaron sin empleo',
				'Carece de computadora u otro o de conexión a internet',
				'La escuela cerró definitivamente',
				'El padre, madre o tutor no puede estar al pendiente de él(ella)',
				'Un familiar enfermó o falleció por COVID-19',
				'Se enfermó o contagió por COVID-19'],
			datasets: [{
				axis: 'y',
				label: '% de población',
				data: [26.6, 25.3, 21.9, 19.3, 4.4, 2.6, 2.3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)'

				],
				borderWidth: 1
			}]
		},
		options: {
			indexAxis: 'y',
		}
	});
}

function crear_tabla()
{
	let htmlTags = "";
	htmlTags += '<tr>' +
		'<td>' + Datos_disercion.motivo1.porcentaje + '</td>' +
		'<td>' + Datos_disercion.motivo1.motivo + '</td>' +
		'</tr>';
	htmlTags += '<tr>' +
		'<td>' + Datos_disercion.motivo2.porcentaje + '</td>' +
		'<td>' + Datos_disercion.motivo2.motivo + '</td>' +
		'</tr>';
	htmlTags += '<tr>' +
		'<td>' + Datos_disercion.motivo3.porcentaje + '</td>' +
		'<td>' + Datos_disercion.motivo3.motivo + '</td>' +
		'</tr>';
	htmlTags += '<tr>' +
		'<td>' + Datos_disercion.motivo4.porcentaje + '</td>' +
		'<td>' + Datos_disercion.motivo4.motivo + '</td>' +
		'</tr>';
	htmlTags += '<tr>' +
		'<td>' + Datos_disercion.motivo5.porcentaje + '</td>' +
		'<td>' + Datos_disercion.motivo5.motivo + '</td>' +
		'</tr>';
	htmlTags += '<tr>' +
		'<td>' + Datos_disercion.motivo6.porcentaje + '</td>' +
		'<td>' + Datos_disercion.motivo6.motivo + '</td>' +
		'</tr>';
	htmlTags += '<tr>' +
		'<td>' + Datos_disercion.motivo7.porcentaje + '</td>' +
		'<td>' + Datos_disercion.motivo7.motivo + '</td>' +
		'</tr>';

	document.getElementById("tbody_disercion_esc").innerHTML += htmlTags;
}
function crear_lista()
{
	let htmlLista = "";
	htmlLista += '<h1>' + Datos_act_esc.titulo + '</h1><br>';
	htmlLista += '<ul>' +
		'<li>' + Datos_act_esc.actividades.tiempo + '</li><br>' +
		'<li>' + Datos_act_esc.actividades.apoyo + '</li><br>' +
		'<li>' + Datos_act_esc.actividades.gastos + '</li>' +
		'</ul>';
	document.getElementById("lst_act_escolares").innerHTML += htmlLista;

}
crear_grafica();
crear_tabla();
crear_lista();