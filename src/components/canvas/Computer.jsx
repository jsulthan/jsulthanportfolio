import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from 'three'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'

const Computer = ({ open, hinge, ...props }) => {
    const group = useRef()
    // Load model
    const { nodes, materials } = useGLTF('./mac-draco.glb')
    // Take care of cursor state on hover
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    // Make it float in the air when it's opened
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1)
        group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1)
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
    })
  
    return (
        <group
            ref={group}
            {...props}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={(e) => setHovered(false)}
            dispose={null}>
            <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
                <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
                <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />
                </group>
            </three.group>
            <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
                <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
            </group>
            <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
        </group>
    );
  };
  
const ComputersCanvas = () => {
    // This flag controls open state, alternates between true & false
    const [open, setOpen] = useState(false)
    // We turn this into a spring animation that interpolates between 0 and 1
    const props = useSpring({ open: Number(open) })
  
    return (
      <web.main style={{ background: props.open.to([0, 1], ['#f0f0f0', '#d25578']) }}>
        <web.h1 style={{ opacity: props.open.to([0, 1], [1, 0]), transform: props.open.to((o) => `translate3d(-50%,${o * 50 - 100}px,0)`) }}>
          click
        </web.h1>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
          <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
              <Computer open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
        </Canvas>
      </web.main>
    );
  };
  export default ComputersCanvas;