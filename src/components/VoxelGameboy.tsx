import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { loadModel } from "../../lib/modelLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const VoxelGameboy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [scene] = useState<THREE.Scene>(new THREE.Scene());
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [camera, setCamera] = useState<
    THREE.OrthographicCamera | THREE.PerspectiveCamera
  >();
  const [control, setControl] = useState<OrbitControls>();

  const handleResize = useCallback(() => {
    const container = containerRef.current;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  useEffect(() => {
    const container = containerRef.current;

    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setSize(scW, scH);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(-3, 3, 5);
      directionalLight.castShadow = true;
      scene.add(directionalLight);
      // directionalLight.shadow.mapSize.width = 512;
      // directionalLight.shadow.mapSize.height = 512;
      // directionalLight.shadow.camera.near = 0.5;
      // directionalLight.shadow.camera.far = 500;

      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(500, 500, 32, 32),
        new THREE.ShadowMaterial({ opacity: 0.4 })
      );
      plane.rotation.x = -Math.PI / 2;
      plane.receiveShadow = true;
      scene.add(plane);

      const camera = new THREE.PerspectiveCamera(75, scW / scH, 0.1, 30);

      const lookAtPos = new THREE.Vector3(-0.5, 3, 0);
      const cameraPos = new THREE.Vector3(5, 7, 15);
      camera.position.copy(cameraPos);
      camera.lookAt(lookAtPos);
      // setCamera(camera);

      const control = new OrbitControls(camera, renderer.domElement);
      control.autoRotate = true;
      control.target = lookAtPos;

      const ambientLight = new THREE.AmbientLight(0x404040, 4);
      scene.add(ambientLight);

      loadModel(scene, "/public/gameboy.glb").then(() => {
        animate();
        setLoading(false);
      });

      let req: number = 0;
      const rotationSpeed = 1;
      const animate = () => {
        req = requestAnimationFrame(animate);
        // camera.position.y = 10;
        // camera.position.x =
        //   cameraPos.x * Math.cos(20) + cameraPos.z * Math.sin(20);
        // camera.position.z =
        //   cameraPos.z * Math.cos(20) - cameraPos.x * Math.sin(20);
        // camera.lookAt(lookAtPos);
        renderer.render(scene, camera);
        control.update();
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, [renderer, handleResize]);

  return (
    <div
      className="sm:w-[230px] sm:h-[230px] md:w-[430px] md:h-[430px] lg:w-[640px] lg:h-[640px] mt-10"
      ref={containerRef}
    ></div>
  );
};

export default VoxelGameboy;
