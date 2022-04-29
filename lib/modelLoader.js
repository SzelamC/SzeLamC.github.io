import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export const loadModel = (scene, modelPath) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "gameboy";
        obj.position.y = 0;
        obj.position.x = 0;
        // obj.scale.set(0.5, 0.5, 0.5)
        obj.receiveShadow = true;
        obj.castShadow = true;
        obj.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
          }
        })
        scene.add(obj);
        resolve(obj);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
};
