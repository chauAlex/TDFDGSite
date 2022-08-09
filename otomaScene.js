import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {updateSplineTexture} from "three/examples/jsm/modifiers/CurveModifier";

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x141414 );
const SIZEADJ = 2.5;
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: false});
renderer.setSize( window.innerWidth/SIZEADJ, window.innerHeight/SIZEADJ );
renderer.setPixelRatio(window.devicePixelRatio);
$('#main__three--container2').appendChild( renderer.domElement );

const loader = new GLTFLoader();
const controls = new OrbitControls( camera, renderer.domElement );

const light = new THREE.AmbientLight( 0xffffff, 0.7 );
light.position.set(1, 2, 1);
scene.add( light );

const dirlight = new THREE.DirectionalLight( 0xffffff, 0.7 );
light.position.set(1, 2, 1);
scene.add( dirlight );
var model;
loader.load( '/models/Cube Cannon.gltf', function ( gltf ) {

    scene.add( gltf.scene );
    model = gltf.scene;

}, undefined, function ( error ) {

    console.error( error );

} );

camera.position.x = -0.25;
camera.position.z = 1.9;
controls.update();

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    model.rotation.y += 0.01;
    controls.update();
    //cube.rotation.y += 0.01;
}
animate();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth/SIZEADJ, window.innerHeight/SIZEADJ );

}