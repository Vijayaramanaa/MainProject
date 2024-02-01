import React,{useState} from 'react'
import './login.scss'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import Register from './Register'
import Login from './Login'

function LoginForm() {
  const [lr,setLr] = useState(false)
  return (
    <div className='container'>
    {lr ? <Login setLr={setLr}lr={lr}/> : <Register setLr={setLr} lr={lr}/> }
    <div className='f2'>
        <div> 
        <h1>!!Welcome!!</h1>
        <h2>SmartHome Automation</h2>
        </div>
        <div className='canva'> 
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight/>
            <directionalLight/>

            <mesh>
                <Sphere args={[2.2]} >
                <MeshDistortMaterial  color={'lightgreen'} />
                </Sphere>
            </mesh>
        </Canvas>
        </div>
        <img src='iot.png'/>
    </div>
    </div>
  )
}

export default LoginForm