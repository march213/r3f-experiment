import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <Canvas
      camera={{
        position: [1, 1, 2],
      }}
    >
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
