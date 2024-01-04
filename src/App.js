import React from 'react';
import SceneRender from './SceneRender';
import Card from './component/Card';

function App() {
  return (
    <>
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <SceneRender />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        color: 'white', 
        fontSize: '40px',
        fontWeight: 'bold',
      }}>
        <h1>Hello World Three js 3D</h1>
      </div>
    </div>
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '20px' }}>
            <Card 
              title="Title 1"
              description="This is a description for card 1."
              imageUrl="https://img.freepik.com/free-photo/grandma-taking-care-plants-garden_23-2149518819.jpg?t=st=1704383809~exp=1704384409~hmac=2d99fadc4ba63c00a9a8cfdbdb163409ca8f5a58fc0eb3f2e2a69e672c123006"
            />
            
            <Card 
              title="Title 2"
              description="This is a description for card 2."
              imageUrl="https://img.freepik.com/free-photo/working-construction-site_1098-18144.jpg?w=1380&t=st=1704384860~exp=1704385460~hmac=e29b95e535eb3afc59b8c1cb6f1e8b1c8cfe6b84e4be2f657d941a17fc00b302"
            />
            <Card 
              title="Title 3"
              description="This is a description for card 3."
              imageUrl="https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?t=st=1704384856~exp=1704385456~hmac=1eca578c481ef12a263d566723b163b903966ff361847bdaac32500a6c9cabce"
            />
        </div>
        <img  src="./favicon.ico" alt="React Logo" style={{
                  position: 'absolute',
                  top: '40%', 
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                  width: '100px',
                  height: 'auto'
              }}/>
              <h1 style={{
                  position: 'absolute',
                  top: '45%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                  color: 'white', 
                  fontSize: '40px',
                  fontWeight: 'bold',
                }}>React</h1>
                
    </div>
    </>
  );
}

export default App;
