for (let g = 0; g < groupCount; g++) {
	const video = document.createElement("video");
	video.crossOrigin = "anonymous";
	video.src =
		"https://raw.githubusercontent.com/Green-Saffron/HDR-panorama/main/Grani%202.webm";
	video.loop = true;
	video.muted = true;
	video.playbackRate = 0.010 + Math.random() * 1.0;
	video.play();
	const videoTexture = new THREE.VideoTexture(video);
	videoTexture.colorSpace = THREE.SRGBColorSpace;
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

	const particlesGeometry = new THREE.BufferGeometry();
	const positionsArray = new Float32Array(particlesPerGroup * 3);
	const colorsArray = new Float32Array(particlesPerGroup * 3);

	for (let i = 0; i < particlesPerGroup; i++) {
		const i3 = i * 3;

		positionsArray[i3] = (Math.random() - 0.5) * 30;
		positionsArray[i3 + 1] = (Math.random() - 0.5) * 30;
		positionsArray[i3 + 2] = (Math.random() - 0.5) * 30;

		const randomColor = palette[Math.floor(Math.random() * palette.length)];
		colorsArray[i3] = randomColor.r;
		colorsArray[i3 + 1] = randomColor.g;
		colorsArray[i3 + 2] = randomColor.b;
	}

	particlesGeometry.setAttribute(
		"position",
		new THREE.BufferAttribute(positionsArray, 3),
	);
	particlesGeometry.setAttribute(
		"color",
		new THREE.BufferAttribute(colorsArray, 3),
	);
  
	const particlesMaterial = new THREE.PointsMaterial({
		size: 10,
		transparent: true,
		depthWrite: false,
		alphaTest: 0.001,
		alphaMap: videoTexture,
		vertexColors: false,
	});

	const particles = new THREE.Points(particlesGeometry, particlesMaterial);
	particles.frustumCulled = false;

	particlesGroup.add(particles);
}