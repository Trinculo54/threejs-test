import * as THREE from './three.module.js';

import {
    EffectComposer
} from 'https://threejs.org/examples/jsm/postprocessing/EffectComposer.js';
import {
    RenderPass
} from 'https://threejs.org/examples/jsm/postprocessing/RenderPass.js';
import {
    GlitchPass
} from "https://threejs.org/examples/jsm/postprocessing/GlitchPass.js"

let camera, scene, renderer, composer;
let object, light;

let glitchPass;

renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//

camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 100;

scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(50, 50, 50);
const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
    color: 0x00FF00
}));
line.material.depthTest = false;
line.material.opacity = 0.5;
line.material.transparent = true;
scene.add(line);

// postprocessing

composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

glitchPass = new GlitchPass();
composer.addPass(glitchPass);


//

window.addEventListener('resize', onWindowResize);

animate();

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);


}

function animate() {

    requestAnimationFrame(animate);

    line.rotation.y += 0.01;

    composer.render();

}