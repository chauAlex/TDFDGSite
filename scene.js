import * as THREE from 'three';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x141414 );
const SIZEADJ = 2.5;
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/SIZEADJ, window.innerHeight/SIZEADJ );
$('#main__three--container').appendChild( renderer.domElement );

const loader = new GLTFLoader();

const light = new THREE.AmbientLight( 0xffffff, 0.7 );
light.position.set(1, 2, 1);
scene.add( light );
var model;
loader.load( 'models/Trumpet Cannon.gltf', function ( gltf ) {

	scene.add( gltf.scene );
    model = gltf.scene;

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.x = -0.25;
camera.position.z = 1.5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    model.rotation.y += 0.01;
    //cube.rotation.y += 0.01;
}
animate();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth/SIZEADJ, window.innerHeight/SIZEADJ );

}