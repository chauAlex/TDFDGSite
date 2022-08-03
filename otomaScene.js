import * as THREE from 'three';

const SIZEADJ = 2.5;
const otomaScene = new THREE.Scene();
const otomaCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const otomaRenderer = new THREE.WebGLRenderer();
otomaRenderer.setSize( window.innerWidth/SIZEADJ, window.innerHeight/SIZEADJ );
$('#main__three--container2').appendChild( otomaRenderer.domElement );

const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x809C46 } );
const cube2 = new THREE.Mesh( geometry2, material2 );
otomaScene.add( cube2 );

otomaCamera.position.z = 5;

function animateOtoma() {
	requestAnimationFrame( animateOtoma );
	otomaRenderer.render( otomaScene, otomaCamera );

    cube2.rotation.y += 0.01;
}
animateOtoma();

window.addEventListener( 'resize', onWindowResizeOtoma, false );

function onWindowResizeOtoma(){

    otomaCamera.aspect = window.innerWidth / window.innerHeight;
    otomaCamera.updateProjectionMatrix();

    otomaRenderer.setSize( window.innerWidth/SIZEADJ, window.innerHeight/SIZEADJ );

}