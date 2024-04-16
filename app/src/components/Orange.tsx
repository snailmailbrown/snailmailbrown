import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";

export default function Orange() {
    return (
      <Flex position="fixed" zIndex={-1} w="100vw" top="40%" h="60vh">
        <Canvas camera={{ fov: 75, near: 0.1, far: 2000, position: [0, 0, 8] }}>
          <ambientLight intensity={2} />
          <directionalLight
            intensity={2}
            castShadow
            color="white"
            position={[0, 10, 0]}
          />
          <Model />
        </Canvas>
      </Flex>
    );
}

