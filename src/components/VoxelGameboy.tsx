import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { loadModel } from "../../lib/modelLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const VoxelGameboy: React.FC<{ className?: string }> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [scene] = useState<THREE.Scene>(new THREE.Scene());
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [camera, setCamera] = useState<
    THREE.OrthographicCamera | THREE.PerspectiveCamera
  >();

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

      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      const spotLight = new THREE.SpotLight(0xffffff, 1);
      spotLight.position.set(-30, 100, 100);
      spotLight.castShadow = true;
      spotLight.shadow.mapSize.width = 2048;
      spotLight.shadow.mapSize.height = 2048;
      scene.add(spotLight);
      // spotLight.shadow.camera.near = 0.5;
      // spotLight.shadow.camera.far = 500;

      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(500, 500, 32, 32),
        new THREE.ShadowMaterial({ opacity: 0.4 }),
      );
      plane.rotation.x = -Math.PI / 2;
      plane.receiveShadow = true;
      scene.add(plane);

      const camera = new THREE.PerspectiveCamera(75, scW / scH, 0.1, 100);

      const lookAtPos = new THREE.Vector3(-0.5, 3, 0);
      const cameraPos = new THREE.Vector3(5, 7, 15);
      camera.position.copy(cameraPos);
      camera.lookAt(lookAtPos);
      // setCamera(camera);

      const control = new OrbitControls(camera, renderer.domElement);
      control.autoRotate = true;
      control.target = lookAtPos;
      control.autoRotateSpeed = 2;

      loadModel(scene, "/gameboy.glb").then(() => {
        animate();
        setLoading(false);
      });

      let req: number = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
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
    <React.Fragment>
      <div
        className={`w-[200px] h-[200px] md:w-[420px] md:h-[420px] lg:w-[640px] lg:h-[640px] ${className}`}
        ref={containerRef}
      ></div>
    </React.Fragment>
  );
};

export default VoxelGameboy;
