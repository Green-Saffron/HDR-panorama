import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import { HDRLoader } from "jsm/loaders/HDRLoader.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000,
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector(".webgl"),
	antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const textureLoader = new THREE.TextureLoader();

const particlesGroup = new THREE.Group();
scene.add(particlesGroup);

const groupCount = 3;
const particlesPerGroup = 30;

const palette = [
	new THREE.Color(0x00ffcc),
	new THREE.Color(0x00e5ff),
	new THREE.Color(0xffffff),
]