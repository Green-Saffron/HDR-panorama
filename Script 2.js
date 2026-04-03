const hdrLoader = new HDRLoader();
const hdrTexture = hdrLoader.load(
	"https://raw.githubusercontent.com/Green-Saffron/HDR-panorama/refs/heads/main/Bereg.hdr",
  
	() => {
		hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
		hdrTexture.colorSpace = THREE.SRGBColorSpace;
		scene.background = hdrTexture;
		scene.backgroundRotation.y = (Math.PI / 180) * -160;
		scene.backgroundRotation.x = (Math.PI / 180) * -20;
	},
);

const clock = new THREE.Clock();

const tick = () => {
	const elapsedTime = clock.getElapsedTime();

	particlesGroup.rotation.x = elapsedTime * 0.1;

	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(tick);
};
tick();

window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});