import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import './styles.css';

const Model3D = () => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  const targetRotationY = -0.1;

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.0003;
       if (ref.current.rotation.y <= targetRotationY) {
          ref.current.rotation.y = targetRotationY;
        }
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={2.5} />;
};

const SceneRender = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
     <Canvas style={{
        backgroundColor: '#ccfcff',
        animation: 'fadeIn 1s ease-out'
      }}>
        <PerspectiveCamera makeDefault fov={75} position={[50, 300, 600]} />
        <ambientLight intensity={1.0} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2.0} />

        <pointLight position={[-10, -10, -10]} color="white" intensity={2.0} />
        <pointLight position={[20, 20, 20]} color="red" intensity={1.0} />
        <pointLight position={[-20, -20, 0]} color="blue" intensity={0.8} />
        <directionalLight position={[0, 0, 100]} intensity={1.5} />

        <Suspense fallback={null}>
          <Model3D />
        </Suspense>
        <OrbitControls 
          enableZoom={false}       
          zoomSpeed={1.0}        
          enablePan={true}       
          enableRotate={true}    
          autoRotate={false}     
        />
        <Environment preset="sunset" /> 
      </Canvas>
    </div>
  );
};

export default SceneRender;
