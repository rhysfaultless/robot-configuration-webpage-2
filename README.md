# robot-configuration-webpage-2

Deployed site: <a>https://robot-configuration-webpage-2.vercel.app/</a> <br />
Vercel home: <a>https://vercel.com/rhysfaultless/robot-configuration-webpage-2</a> <br />

## running on a local machine

1. clone this repository
2. in a terminal, navigate to the repository on your local machine, and then run:
  1. `npm install`
  2. `npm run dev`
3. go to a web browser like Google Chrome, and enter the address <a>localhost:3000</a>

## opensource packages used in this project:

1. `react.js`
2. `next.js`
3. `tailwind css`
4. `react-three-fiber`
5. `react-three-drei`
6. `jspdf`
7. `html2canvas`

## deploying on Vercel

This proccess is rather simple. 
The Production Deployment on Vercel uses the code on this Github repositorie's `main` branch.
Vercel uses the information in this repositorie's `package.json` to build the site properly.
You can test code by:

1. Creating a new branch on Github.
2. Make changes as necessary, and then locally build the project using `npm run build` to find errors.
3. Assuming the local build went well, push the changes to the new branch on Github
4. Then, on the Vercel deashboard, you should see a Preview Deplyment being built. This is also visible on the right side of the Github repository.
5. This Preview Deployment will have a Visit option in its hamburger menu so you can confirm that the site looks correct.
6. There shouldn't be any errors since you tested with a local build. Any errors could be related to issues with the `package.json'
7. Once you are happy that the Preview Deployment looks good; merge the development branch into the main branch.
8. Vercel will build again, and the Production Deployment should show the changes.

## site's architecture

```
project
│   .gitignore
│   package.json
│   README.md
│   tailwind.config.js
│
└───components
│   └───page-layout
│   |   │   page-layout-component-1.js
│   |   │   page-layout-component-2.js
│   |   │   ...
│   |   │   page-layout-component-n.js
│   |
│   └───price-lead-quote
│   |   │   price-lead-quote-component-1.js
│   |   │   price-lead-quote-component-2.js
│   |   │   ...
│   |   │   price-lead-quote-component-n.js
│   |
│   └───three-models
│   |   │   three-model-component-1.js
│   |   │   three-model-component-2.js
│   |   │   ...
│   |   │   three-model-component-n.js
│   |
│   └───three-settings
│   |   │   three-settings-component-1.js
│   |   │   three-settings-component-2.js
│   |   │   ...
│   |   │   three-settings-component-n.js
│   
└───pages
│   │   _app_.js
│   │   index.js
│   │   404.js
│   │
│   └───indoor
│   |   │   index.js
│   |   │   dingo-diff.js
│   |   │   dingo-omni.js
│   |   │   ridgeback.js
│   │
│   └───outdoor
│   |   │   index.js
│   |   │   husky.js
│   |   │   jackal.js
│
└───public
│   │   favicon.ico
│   │
│   └───images
│   |   │   image-file-1.png
│   |   │   image-file-2.jpg
│   |   │   ...
│   |   │   image-file-n.jpg
│   │
│   └───json
│   |   │   DataComputer.json
│   |   │   DataDingoDiff.js
│   |   │   DataDingoOmni.js
│   |   │   Husky.js
│   |   │   Jackal.js
│   |   │   Ridgeback.js
│   │
│   └───models
│   |   │   attachment-hokuyo.glb
│   |   │   attachment-microstrain-3dm-gx5-15.glb
│   |   │   ...
│   |   │   banana.glb
│   |   │   ...
│   |   │   chassis-base-dingo-d.glb
│   |   │   chassis-panels-dingo-d.glb
│   |   │   chassis-tower-dingo-d.glb
│   |   │   chassis-wheels-dingo-d.glb
│   |   │   ...
│   |   │   chassis-base-husky.glb
│   |   │   chassis-panels-husky.glb
│   |   │   chassis-tower-husky.glb
│   |   │   chassis-wheels-husky.glb
│   |   │   ...
│
└───styles
│   │   global.css
│   │   Home.module.css
│   │   Layout.module.css
```


## process for adding a new 3d model

1. Using Solidworks:
2. Create a SLDPRT of the attachment with the origin centred at (0, 0, 0,) .
   The ground plane is to be the X-Y plane.
3. Export the model as an `STL` surface model.
4. Using Blender:
5. Import the STL model.
6. Export as `gITF 2.0 (.glb/.gltf)`
7. name the file the same as your STL, such as `attachment-hokuyo.glb`
8. Copy this file to the correct folder in the RCW project, `/public/models/`
9. In a web browser like Google Chrome:
10. Open the website [https://gltf.pmnd.rs/](https://gltf.pmnd.rs/)
11. Drag-and-drop your `.glb` file that was created in step 2.3. into the browser
12. The webpage will now show a rendering of your model, and some JavaScript code.
    Keep this page open as you will copy the JavaScript code into our project shortly.
13. In VS Code:
  1. Create a JavaScript file in the project directory `/components/three-models/`.
    Name this new file with a similar scheme to your model but using PascalCase, such as `AttachmentHokuyo.js`.
    This example would have a file with the path `/components/three-models/AttachmentHokuyo.js`
  2. Copy the webpage code from step 3.3.
  3. Paste this code into your new JavaScript file that was created in step 4.1.
  4. change line 10:

    - from: `const { nodes, materials } = useGLTF('/attachment-hokuyo.glb')`
    - to: `const { nodes, materials } = useGLTF('/models/attachment-hokuyo.glb')`
      Note: your file will have a different name than this example of `attachment-hokuyo.glb`.

  5. change line 23:

    - from: `useGLTF.preload('/attachment-hokuyo.glb')`
    - to: `useGLTF.preload('/models/attachment-hokuyo.glb')`
      Note: your file will have a different name than this example of `attachment-hokuyo.glb`.

  6. Optonal: you can add more parameters to your three.js model by adding to the `<mesh />`.
    For example, you could add a colour to the model by adding `color={props.modelColour}` to the `<mesh />` component.
    Here is the full JavaScript code of the example component:

    ```javascript
    /*
    Auto-generated by: https://github.com/pmndrs/gltfjsx
    */

    import React, { useRef } from "react";
    import { useGLTF } from "@react-three/drei";

    export default function Model(props) {
      const group = useRef();
      const { nodes, materials } = useGLTF("/models/attachment-hokuyo.glb");
      return (
        <group ref={group} {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["attachment-hokuyo"].geometry}
            material={nodes["attachment-hokuyo"].material}
            color={props.modelColour}
          />
        </group>
      );
    }

    useGLTF.preload("/attachment-hokuyo.glb");
    ```

14. you can now add this component to three.js scenes like any other React component in Next.js:

    ```javascript
    import { React } from "react";
    import { Canvas } from "@react-three/fiber";
    import { OrbitControls } from "@react-three/drei";
    import ModelAttachmentHokuyo from "/components/three-models/ModelAttachmentHokuyo";

    function Page() {
      return (
        <main>
          <Canvas>
            <ambientLight intensity={0.7} />

            <OrbitControls makeDefault maxPolarAngle={Math.PI / 2.4} minPolarAngle={0.5} enableZoom={false} enablePan={false} />

            <ModelAttachmentHokuyo />
          </Canvas>
        </main>
      );
    }
    export default Page;
    ```
