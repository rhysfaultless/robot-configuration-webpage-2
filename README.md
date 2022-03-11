# robot-configuration-webpage-2
Deployed site: <a>https://robot-configuration-webpage-2.vercel.app/</a> <br />
Vercel home: <a>https://vercel.com/rhysfaultless/robot-configuration-webpage-2</a> <br />

## opensource packages used in this project:

1. `react.js`
2. `next.js`
3. `tailwind css`
4. `react-three/fiber`
5. `react-three/drei`
6. `jspdf`
7. `html2canvas`

`react-three/fiber` and `react-three/drei` could be replaced with `react-three-next` in the future. 
`react-three-next` includes:

- `react-three/fiber`
- `react-three/drei`
- `react-three/a11y`

This change would simplify the `import` process for three.js functions into our javascript pages, 
even though we do not make use of `react-three/a11y`.

## running on a local machine
1. clone this repository
2. in a terminal, navigate to the repository on your local machine, and then run:
  1. `npm install`
  2. `npm run dev`
3. go to a web browser like Google Chrome, and enter the address <a>localhost:3000</a>

## deploying on Vercel ( internet )
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
This site uses Next.js, a framework built around React. 
Next.js uses Pages to define the routing structure of the site, rather than using the react-router library. 
Next.js still maintains the React approach, of making reuasable Components that will render the User's web browser. 

<details>
  <summary>Structure, click to expand</summary>

  ```
  project
  ├─── .gitignore
  ├─── next.config.js
  ├─── package.json
  ├─── README.md
  ├─── tailwind.config.js
  │
  ├─── components
  │    ├─── page-layout
  │    |    ├─── page-layout-component-1.js
  │    |    ├─── page-layout-component-2.js
  │    |    |     ...
  │    |    └─── page-layout-component-n.js
  │    |
  │    ├─── price-lead-quote
  │    |    ├─── price-lead-quote-component-1.js
  │    |    ├─── price-lead-quote-component-2.js
  │    |    |     ...
  │    |    └─── price-lead-quote-component-n.js
  │    |
  │    ├─── three-models
  │    |    ├─── three-model-component-1.js
  │    |    ├─── three-model-component-2.js
  │    |    |     ...
  │    |    └─── three-model-component-n.js
  │    |
  │    └─── three-settings
  │         ├─── three-settings-component-1.js
  │         ├─── three-settings-component-2.js
  │         |     ...
  │         └─── three-settings-component-n.js
  │    
  ├─── pages
  │    ├─── _app_.js
  │    ├─── index.js
  │    ├─── 404.js
  │    │
  │    ├─── indoor
  │    |    ├─── index.js
  │    |    ├─── dingo-diff.js
  │    |    ├─── dingo-omni.js
  │    |    └─── ridgeback.js
  │    │
  │    └─── outdoor
  │         ├─── index.js
  │         ├─── husky.js
  │         └─── jackal.js
  │
  ├─── public
  │    │    favicon.ico
  │    │
  │    ├─── images
  │    |    ├─── image-file-1.png
  │    |    ├─── image-file-2.jpg
  │    |    |     ...
  │    |    └─── image-file-n.jpg
  │    │
  │    ├─── json
  │    |    ├─── DataComputer.json
  │    |    ├─── DataDingoDiff.js
  │    |    ├─── DataDingoOmni.js
  │    |    ├─── Husky.js
  │    |    ├─── Jackal.js
  │    |    └─── Ridgeback.js
  │    │
  │    └─── models
  │         ├─── attachment-hokuyo.glb
  │         ├─── attachment-microstrain-3dm-gx5-15.glb
  │         │     ...
  │         ├─── banana.glb
  │         |     ...
  │         ├─── chassis-base-dingo-d.glb
  │         ├─── chassis-panels-dingo-d.glb
  │         ├─── chassis-tower-dingo-d.glb
  │         ├─── chassis-wheels-dingo-d.glb
  │         │    ...
  │         ├─── chassis-base-husky.glb
  │         ├─── chassis-panels-husky.glb
  │         ├─── chassis-tower-husky.glb
  │         └─── chassis-wheels-husky.glb
  │              ...
  │
  └─── styles
      ├─── global.css
      ├─── Home.module.css
      └─── Layout.module.css
  ```
</details>

## JSON structure, computers
Notice a few things that are important in the computers JSON file, for the website's state-machine to function:

- computers have a value `configurableComputerBool`
  - when `true`, the site will allow the user to select a processor, RAM, storage, and a GPU
  - when `false`, the site will remove these select filels, such as with a Raspberry Pi


Some other things to note:

- `labels` are what appear in the webpage's Select dropdowns
- `value` is just used as a key, so you may notice odd behaviour when they are not unique per Select dropdown
- `itemNumber` is shown on the PDF quote, and should match a unique Arena PLM number when possible, or use *042000* by default
- `price` should be an integer rather than a string, since it is used in calculating the total configured robot price
- `leadTime` should be an integer, for similar reasons as `price`
- `description` will be displayed on the PDF quote, and does not line wrap, so keep lines under 75 characters long

<details>
  <summary>Structure, click to expand</summary>
  
  ```
  DataComputers.json
  ├─── computers
  |    ├─── mini-itx
  |    |    ├─── "label": "mini ITX",
  |    |    ├─── "value": "A",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 300,
  |    |    ├─── "leadTime": 3,
  |    |    ├─── "configurableComputerBool": true,
  |    |    └─── "description": [
  |    |           "line 1, on PDF quote",
  |    |           "line 2, on PDF quote",
  |    |           "line 3, on PDF quote",
  |    |           "line 4, on PDF quote",
  |    |           "line 5, on PDF quote",
  |    |           "line 6, on PDF quote",
  |    |           "line 7, on PDF quote",
  |    |           "line 8, on PDF quote",
  |    |           "line 9, on PDF quote" ]
  |    |
  |    ├─── raspberry-pi
  |    |    ├─── "label": "Raspberry Pi, 4 GB RAM",
  |    |    ├─── "value": "B",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 300,
  |    |    ├─── "leadTime": 3,
  |    |    ├─── "configurableComputerBool": false,
  |    |    └─── "description": [
  |    |           "line 1, on PDF quote",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    | 
  |    └─── ...
  |
  ├─── processors
  |    ├─── intel i3
  |    |    ├─── "label": "intel i3",
  |    |    ├─── "value": "A",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 300,
  |    |    ├─── "leadTime": 4,
  |    |    └─── "description": [
  |    |           "line 1, on PDF quote",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    ├─── ...
  |    |
  |    └─── intel i9
  |         ├─── "label": "intel i9",
  |         ├─── "value": "B",
  |         ├─── "itemNumber": "042000",
  |         ├─── "price": 500,
  |         ├─── "leadTime": 4,
  |         └─── "description": [
  |                "line 1, on PDF quote",
  |                "line 2, on PDF quote",
  |                ...
  |                "line 9, on PDF quote" ]
  |
  ├─── ram
  |    ├─── 8 GB
  |    |    ├─── "label": "8 GB",
  |    |    ├─── "value": "A",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 100,
  |    |    ├─── "leadTime": 0,
  |    |    └─── "description": [
  |    |           "line 1, on PDF quote",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    ├─── ...
  |    |
  |    |
  |    └─── 64 GB
  |         ├─── "label": "64 GB",
  |         ├─── "value": "D",
  |         ├─── "itemNumber": "042000",
  |         ├─── "price": 700,
  |         ├─── "leadTime": 0,
  |         └─── "description": [
  |                "line 1, on PDF quote",
  |                "line 2, on PDF quote",
  |                ...
  |                "line 9, on PDF quote" ]
  |     
  ├─── storage
  |    ├─── 250 GB
  |    |    ├─── "label": "250 GB",
  |    |    ├─── "value": "A",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 140,
  |    |    ├─── "leadTime": 0,
  |    |    └─── "description": [
  |    |           "line 1, on PDF quote",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    ├─── ...
  |    |
  |    └─── 2 TB
  |         ├─── "label": "2 TB",
  |         ├─── "value": "D",
  |         ├─── "itemNumber": "042000",
  |         ├─── "price": 675,
  |         ├─── "leadTime": 1,
  |         └─── "description": [
  |                "line 1, on PDF quote",
  |                "line 2, on PDF quote",
  |                ...
  |                "line 9, on PDF quote" ]
  |
  └─── gpu
      ├─── None
      |    ├─── "None",
      |    ├─── "value": "A",
      |    ├─── "itemNumber": "042000",
      |    ├─── "price": 140,
      |    ├─── "leadTime": 0,
      |    └─── "description": [
      |           "line 1, on PDF quote",
      |           "line 2, on PDF quote",
      |           ...
      |           "line 9, on PDF quote" ]
      |
      ├─── 1050 Ti
      |    ├─── "Nvidia GTX 1050 Ti",
      |    ├─── "value": "B",
      |    ├─── "itemNumber": "042000",
      |    ├─── "price": 640,
      |    ├─── "leadTime": 0,
      |    └─── "description": [
      |           "line 1, on PDF quote",
      |           "line 2, on PDF quote",
      |           ...
      |           "line 9, on PDF quote" ]
      |
      └─── ...
  ```
</details>


## JSON structure, robots

- DataDingoDiff.json
- DataDingoOmni.json
- Husky.json
- Jackal.json
- Ridgeback.json

Notice a few things that are important in the robots's JSON files, for the website's state-machine to function:
- `panelColours` have an element `"rgb": "rgb(255, 167, 0)"` where the three values from 0-255 will alter the 3d model's colour
  - this colour update happens as a prop, passed from the dingo-omni.js Page into the Component:
  `<ModelRobotChassisPanels modelColour={colourSelectionState.rgb} />`
- `tower` and `kits` each have a field called `attachmentPosition`
  - `attachmentPosition` has fourteen `{}` items, each with an:
    - `id`
    - `bool`
  - the `bool` value will decide if sensor attachments can be placed on these parts of the robot. 
  - example: the dingo-omni.js state machine will not allow a sensor to be placed on position 5 when the tower is set to *No*, since `tower -> attachmentPosition -> {"id": 5, "bool": false}`
  - models are hidden or added based on an *if* statement in dingo-omni.js, and only renders if both the *kit* and *tower* `attachmentPosition` bools are true:

  ```javascript
  // Attachment Models rendering functions
  function ModelAttachmentsRendererHelper(elementFromArray) {
    const tempKeyName = "modelAttachmentsRendererKey" + String(elementFromArray[2]);
    if (kitSelectionState.attachmentPosition[elementFromArray[2]].bool && towerSelectionState.attachmentPosition[elementFromArray[2]].bool) {
      return (
        <AttachmentsRenderer
          attachmentSelectionState={elementFromArray[0]}
          attachmentPosition={elementFromArray[2]}
          options={attachmentData}
          dataFile={dataFile}
          key={tempKeyName}
        />
      );
    }
  }
  ```

  - related to the `kits -> attachmentPosition`, you may also see two more fields in an element:
    - `"attachmentItem": 4,`
    - `"postion": 0`
    
    this will attach the 4th item from the `attachmentItem` list, to position 0, noting that both lists are zero indexed
  - the order of elements in `attachmentItems` will be the order they are displayed in the webpage's Select fields
  - the `attachmentItem -> value` element needs to match the key in model rendering component `/components/three-models/AtachmentRenderer.js`


Some other things to note:

- the `webpage` element `tabTitle` value will populate what is displayed on their web-browser's tab
- the `robotPlatform` element `labelPdf` value will populate what is displayed the PDF quote
- `labels` are what appear in the webpage's Select dropdowns
- `value` is just used as a key, so you may notice odd behaviour when they are not unique per Select dropdown
- `itemNumber` is shown on the PDF quote, and should match a unique Arena PLM number when possible, or use *042000* by default
- `price` should be an integer rather than a string, since it is used in calculating the total configured robot price
- `leadTime` should be an integer, for similar reasons as `price`
- `description` will be displayed on the PDF quote, and does not line wrap, so keep lines under 75 characters long
- `attachmentPositions` have fourteen elements, detailing the *xyz* location and *rpy* rotation of the attachment positions

```javascript
  {
    "id": 1,
    "xyz": [240, 69, 0],
    "rpy": [0, 0, 0]
  },
  {
    "id": 14
  }
```

- `bananaPosition` has a similar structure, with *xyz* location, and *rpy* rotation

<details>
  <summary>Structure, click to expand</summary>
  
  ```
  DataDingoOmni.json
  ├─── webpage
  |    └─── "tabTitle": "Clearpath | Dingo-O"
  |
  ├─── robotPlatform
  |    ├─── "label": "Dingo Omnidirectional",
  |    ├─── "price": 10000,
  |    ├─── "leadTime": 3,
  |    ├─── "itemNumber": "022609",
  |    ├─── "labelPdf": "Dingo-O",
  |    └─── "description": [
  |           "line 1, on PDF quote",
  |           "line 2, on PDF quote",
  |           "line 3, on PDF quote",
  |           "line 4, on PDF quote",
  |           "line 5, on PDF quote",
  |           "line 6, on PDF quote",
  |           "line 7, on PDF quote",
  |           "line 8, on PDF quote",
  |           "line 9, on PDF quote" ]
  |
  ├─── panelColours
  |    ├─── yellow
  |    |    ├─── "label": "Yellow",
  |    |    ├─── "value": "A",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 0,
  |    |    ├─── "leadTime": 0,
  |    |    ├─── "rgb": "rgb(255, 167, 0)",
  |    |    └─── "description": [
  |    |           "line 1, on PDF quote",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    ├─── black
  |    |    ├─── "label": "Black",
  |    |    ├─── "value": "B",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 300,
  |    |    ├─── "leadTime": 7,
  |    |    ├─── "rgb": "rgb(55, 55, 55)",
  |    |    └─── "description": [
  |    |           "line 1, on PDF quote",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    | 
  |    └─── ...
  |
  ├─── batteryItems
  |    ├─── lead acid
  |    |    ├─── "label": "Lead Acid",
  |    |    ├─── "value": "A",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 0,
  |    |    ├─── "leadTime": 0,
  |    |    └─── "description": [
  |    |           "line 1, on PDF quote",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    └─── lithium
  |         ├─── "label": "Lithium",
  |         ├─── "value": "B",
  |         ├─── "itemNumber": "042000",
  |         ├─── "price": 1000,
  |         ├─── "leadTime": 3,
  |         └─── "description": [
  |                "line 1, on PDF quote",
  |                "line 2, on PDF quote",
  |                ...
  |                "line 9, on PDF quote" ]
  |
  ├─── tower
  |    ├─── no
  |    |    ├─── "label": "No",
  |    |    ├─── "value": "A",
  |    |    ├─── "itemNumber": " ",
  |    |    ├─── "price": 0,
  |    |    ├─── "leadTime": 0,
  |    |    ├─── "bool": false,
  |    |    ├─── "attachmentPosition": [
  |    |    |      {"id":1, "bool":true},
  |    |    |      {"id":2, "bool":true},
  |    |    |      {"id":3, "bool":true},
  |    |    |      {"id":4, "bool":true},
  |    |    |      {"id":5, "bool":false},
  |    |    |      {"id":6, "bool":false},
  |    |    |      {"id":7, "bool":false},
  |    |    |      {"id":8, "bool":false},
  |    |    |      {"id":9, "bool":false},
  |    |    |      ...
  |    |    |      {"id":14, "bool":false} ]
  |    |    └─── "description": [
  |    |           "COMMENT - skip this line for structuring purposes",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    └─── yes
  |         ├─── "label": "Yes",
  |         ├─── "value": "B",
  |         ├─── "itemNumber": "042000",
  |         ├─── "price": 300,
  |         ├─── "leadTime": 0,
  |         ├─── "bool": true,
  |         ├─── "attachmentPosition": [
  |         |      {"id":1, "bool":true},
  |         |      {"id":2, "bool":true},
  |         |      {"id":3, "bool":true},
  |         |      {"id":4, "bool":true},
  |         |      {"id":5, "bool":true},
  |         |      {"id":6, "bool":true},
  |         |      {"id":7, "bool":true},
  |         |      {"id":8, "bool":true},
  |         |      {"id":9, "bool":false},
  |         |      ...
  |         |      {"id":14, "bool":false} ]
  |         └─── "description": [
  |                "COMMENT - skip this line for structuring purposes",
  |                "line 2, on PDF quote",
  |                ...
  |                "line 9, on PDF quote"]
  |     
  ├─── attachmentPositions
  |    ├─── 1
  |    |    ├─── "id": 1,
  |    |    ├─── "name": "attachmentPositionOne",
  |    |    ├─── "xyz": [240, 69, 0],
  |    |    ├─── "rpy": [0, 0, 0],
  |    |    └─── "onTowerBool": false
  |    |
  |    ├─── ...
  |    |
  |    ├─── 5
  |    |    ├─── "id": 5,
  |    |    ├─── "name": "attachmentPositionFive",
  |    |    ├─── "xyz": [240, 269, 0],
  |    |    ├─── "rpy": [0, 3.14159, 0],
  |    |    └─── "onTowerBool": false
  |    |
  |    ├─── ...
  |    |
  |    ├─── 9
  |    |    └─── "id": 9
  |    |
  |    ├─── ...
  |    |   
  |    └─── 14
  |         └─── "id": 14
  |     
  ├─── attachmentItems
  |    ├─── none
  |    |    ├─── "label": "None",
  |    |    ├─── "value": "none",
  |    |    ├─── "category": "null",
  |    |    ├─── "itemNumber": " ",
  |    |    ├─── "price": 0,
  |    |    ├─── "leadTime": 0,
  |    |    └─── "description": [
  |    |           "COMMENT - skip this line for structuring purposes",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    ├─── velodyne low
  |    |    ├─── "label": "Velodyne, Low",
  |    |    ├─── "value": "velodyne_low",
  |    |    ├─── "category": "lidar",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 5000,
  |    |    ├─── "leadTime": 3,
  |    |    └─── "description": [
  |    |           "COMMENT - skip this line for structuring purposes",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    ├─── velodyne mid
  |    |    ├─── "label": "Velodyne, Mid",
  |    |    ├─── "value": "velodyne_mid",
  |    |    ├─── "category": "lidar",
  |    |    ├─── "itemNumber": "042000",
  |    |    ├─── "price": 5000,
  |    |    ├─── "leadTime": 3,
  |    |    └─── "description": [
  |    |           "COMMENT - skip this line for structuring purposes",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    └─── ...
  |     
  ├─── kits
  |    ├─── none
  |    |    ├─── "label": "None",
  |    |    ├─── "value": "none",
  |    |    ├─── "itemNumber": " ",
  |    |    ├─── "price": 0,
  |    |    ├─── "leadTime": 0,
  |    |    ├─── "priceHardware": 0,
  |    |    ├─── "priceSoftware": 0,
  |    |    ├─── "bool": false,
  |    |    ├─── "attachmentPosition": [
  |    |    |      {"id":1, "bool":true},
  |    |    |      ...
  |    |    |      {"id":8, "bool":true},
  |    |    |      {"id":9, "bool":false},
  |    |    |      ...
  |    |    |      {"id":14, "bool":false} ]
  |    |    ├─── "descriptionHardware": [
  |    |    |      "line 1, on PDF quote",
  |    |    |      "line 2, on PDF quote",
  |    |    |      ...
  |    |    |      "line 9, on PDF quote" ]
  |    |    └─── "descriptionSoftware": [
  |    |           "line 1, on PDF quote",
  |    |           "line 2, on PDF quote",
  |    |           ...
  |    |           "line 9, on PDF quote" ]
  |    |
  |    └─── indoor nav
  |         ├─── "label": "IndoorNav",
  |         ├─── "value": "indoor_nav",
  |         ├─── "itemNumber": "042000",
  |         ├─── "price": 8500,
  |         ├─── "leadTime": 5,
  |         ├─── "priceHardware": 8500,
  |         ├─── "priceSoftware": 0,
  |         ├─── "bool": true,
  |         ├─── "attachmentPosition": [
  |         |      {"id":1, "bool":false, "attachmentItem": 4, "position": 0},
  |         |      {"id":2, "bool":true},
  |         |      {"id":3, "bool":false, "attachmentItem": 5, "position": 2},
  |         |      {"id":4, "bool":false, "attachmentItem": 4, "position": 3},
  |         |      {"id":5, "bool":true},
  |         |      {"id":6, "bool":true},
  |         |      {"id":7, "bool":true},
  |         |      {"id":8, "bool":true},
  |         |      {"id":9, "bool":false},
  |         |      ...
  |         |      {"id":14, "bool":false} ]
  |         ├─── "descriptionHardware": [
  |         |      "line 1, on PDF quote",
  |         |      "line 2, on PDF quote",
  |         |      ...
  |         |      "line 9, on PDF quote" ]
  |         └─── "descriptionSoftware": [
  |                "line 1, on PDF quote",
  |                "line 2, on PDF quote",
  |                ...
  |                "line 9, on PDF quote" ]
  |
  └─── bananaPosition
       ├─── "name": "bananaPosition",
       ├─── "xyz": [100, 0, 305],
       └─── "rpy": [0, 0.97, 0]
  
  ```
</details>


## how we add three.js 3d models to our webpages
On our Next.js pages, we import the libraries `react-three/fiber` and `react-three/drei`. 
Then, in the `return()` section of the Page, we add a three.js `<Canvas>   <Canvas/>`.
We then add these components inside the `<Canvas>   <Canvas/>` tags.

- lighing
- view controls
- cameras
- models

The lighting, controls, and cameras are all standard components from the three libraries.
Models or Meshes can be added in a number of different ways. 
Our site uses a loader from the `react-three/drei` library to use a `.glb` surface model.
This process is decrubed in the next section of this README.

The only major change from a standard Three.js implementation we have made, is by adding an `id` and `prop` to the `<Canvas>` shown here: `<Canvas id="divToPrint" gl={{ preserveDrawingBuffer: true }}>`. 
These additions allow us to take a screenshot image of the `<Canvas>`, which is then used in a PDF quote. 
This will be described in the README section *how PDF quotes are generated*.

An individual model is rendered if its React State suggests that it be rendered. 
There are several boolean values in the related robot's JSON file, suggesting if what attachment position is can be populated with sensors.
This is briefly described in the section *JSON structure*


## process for adding a new three.js 3d model

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
14. Create a JavaScript file in the project directory `/components/three-models/`.
    Name this new file with a similar scheme to your model but using PascalCase, such as `AttachmentHokuyo.js`.
    This example would have a file with the path `/components/three-models/AttachmentHokuyo.js`
15. Copy the webpage code from step 3.3.
16. Paste this code into your new JavaScript file that was created in step 4.1.
17. change line 10:

  - from: `const { nodes, materials } = useGLTF('/attachment-hokuyo.glb')`
  - to: `const { nodes, materials } = useGLTF('/models/attachment-hokuyo.glb')`
    Note: your file will have a different name than this example of `attachment-hokuyo.glb`.

18. change line 23:

  - from: `useGLTF.preload('/attachment-hokuyo.glb')`
  - to: `useGLTF.preload('/models/attachment-hokuyo.glb')`
    Note: your file will have a different name than this example of `attachment-hokuyo.glb`.

19. Optonal: you can add more parameters to your three.js model by adding to the `<mesh />`.
    For example, you could add a colour to the model by adding `color={props.modelColour}` to the `<mesh />` component.
    Here is the full JavaScript code of the example component:

  ```javascript
  import React, { useRef } from "react";
  import { useGLTF } from "@react-three/drei";

  function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/attachment-hokuyo.glb");
    return (
      <group>
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
  export default  Model;
  useGLTF.preload("/attachment-hokuyo.glb");
  ```

20. you can now add this component to three.js scenes like any other React component in Next.js:

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

## descibing the webpage's Layout, including CSS ( Navbars, Footers, Aside, Main )

- In the `pages` directory you will see `_app.js` which defines the structure for all Pages.

  ```javascript
    <>
      <SafeHydrate>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SafeHydrate>
    </>
  ```

  Two things to note from `_app.js`:

    - `<SafeHydrate>` is making the site statically gerated. This was done for speed, and to allow Google's crawler to index the sites HTML.
    - `<Layout>  </Layout>` is adding a Navbar and Footer to all Pages on our website. You can find the Layout, Navbar, and Footer in `/components/page-layout`
- On an actual Page, like `dingo-omni.js`, you will find that the Page is structured as:

  ```javascript
    <div>
      <Head></Head>
      <div>
        <aside></aside>
        <main></main>
      </div>
      <footer></footer>
    </div>
  ```

  These elements are in addition to those of `_app.js`.

    - `<Head></Head>` populates the web-browser's tab
    - `<aside></aside>` holds all the Select elements for the User to configure their robot
    - `<main></main>` holds the Three.js model, and a small notification telling the User to rotate the model
    - `<footer></footer>` is an additional footer, that holds price, leadtime, and quoting infomation

  - Positions of these eements are controlled using `className` with *tailwind.css* infomation for colour, positioning, and other style calls.

## how the Configuration's Price is generated
There are two components of interest in `/components/price-lead-quote`:

- PriceText.js
- Price.js

The individual robot pages, like ` dinco-omni.js` import and call `<PriceText statesArray={makePriceLeadStatesArray()}>`.
The Prop *statesArray* is passing JSON data of configured robot including:

- panel colour
- battery chemistry
- computer and components
- kits, like *IndoorNav*
- attachment tower structures
- attachments

This JSON data can be updated in two places:

- /public/json/DataComputer.json
- /public/json/Data*ROBOT-PLATFORM*.json

The JSON files have multiple keys, like:
- *robotPlatform*
- *panelColours*
- *batteryItems*
- *tower*
- *attachmentItems*
- *kits*

Each of these keys have a nested key called *price* which needs an integer value. 
An example from *DataDingoOmni.json* is shown:

```javascript
  "robotPlatform": {
    "label": "Dingo Omnidirectional",
    "price": 10000,
    "leadTime": 3,
    "itemNumber": "022609",
    "labelPdf": "Dingo-O",
    "description": [
      "Robot Platform - Dingo Omnidirectional",
      "PDF line 2",
      "PDF line 3",
      "PDF line 4",
      "PDF line 5",
      "PDF line 6",
      "PDF line 7",
      "PDF line 8",
      "PDF line 9"
    ]
  }
```

All of the integer values from JSON price keys with `<PriceText statesArray={makePriceLeadStatesArray()}>` are then summed with `<Price> `.

## how the Configuration's Lead-time is generated
This functionality is very similar to the `<Price>` component.
The difference is that `<Leadtime>` takes all the integer vales passed to it, and returns the largest value.
So if the user configures a robot with:

- 3 weeks — *Dingo-Omni*
- 7 weeks — *red panels*
- 0 weeks — *lead acid battery*
- 3 weeks — *front velodyne*

The returned lead time will be 7 weeks, since that corresponds to the largest value for *red panels*

## how PDF quotes are generated
The component `<ButtonQuote>` is added to each of the configuration Pages.
This component only reders one thing in the DOM:

```javascript
  return (
    <button onClick={GeneratePdfQuote} className="hover:text-yellow-400">
      Download Quote
    </button>
  );
```

The actual function, `GeneratePdfQuote` uses the opensource library jsPDF to generate and download the PDF in the Users browser. 
This is run entirely on the User's computer.
`GeneratePdfQuote` runs through these steps:

1. creates a new pdf file *.doc*
2. creates all the sheets of the pdf, based off the integer in the constant *PageCount*.
3. while creating these pages, `GeneratePdfQuote` adds text, images, and formatting that is common to all sheets, like:
  - the company icon
  - sheet count
  - the seller's contact information
  - the date and time the quote was generated
  - line item formatting
  - title of the PDF
4. then the individual pages are appended, with content that is specific to that sheet:
  - sheet 1 — robot platform, panel colour, battery chemistry
  - sheet 2 — computer and related components
  - sheet 3 — kits, like *IndoorNav*
  - sheet 4 — attachment towers, and attachments
  - sheet 5 — attachments
  - sheet 6 — attachments
  - sheet 7 — summary, legal, and a screenshot of the robot
5. save the PDF to the User's computer

The total Price and Leadtime are generated using the related components mentioned in the previous sections of this README.

The screenshot process is described in the next section.

jsPDF uses millimeters and font sizes for defining elements. 
For example, this is how the line item's header is defined, showing the different columns of information:

```javascript
  doc.setFontSize(8);
  doc.text(21, 53, "ID");
  doc.text(27, 53, "Part #");
  doc.text(40, 53, "Description");
  doc.text(141, 53, "Qty");
  doc.text(149, 53, "Price ($ USD )");
  doc.text(174, 53, "Ext. Price ($ USD )");
```

All the text elements are 53 mm down from the top left corner of the PDF sheet, and are 21 - 174 mm to the right.
You can also see that these are methods, appending to the *.doc* that was created in step one.

## how the PDF's robot screenshot is generated
The `<ButtonQuote>` component adds the screenshot on the final sheet of the PDF:

```javascript
  // screenshot image of the configured robot
  var screenshotImageData = props.screenshotData;
  if (screenshotImageData != null) {
    const screenshotProperties = doc.getImageProperties(screenshotImageData);
    const screenshotWidth = 140;
    const screenshotAspect = screenshotProperties.height / screenshotProperties.width;
    doc.addImage(screenshotImageData, "JPEG", 40, 60, screenshotWidth, (screenshotWidth * screenshotAspect));
  }
```

The image is only added if the Prop has base64 JPEG data attached to it.
The actual JPEG data is generated in the robot Pages, like */pages/indoor/dingo-omni.js*, and is passed as the Prop `screenshotData={screenshotDataState}`:

```javascript
  <div className="px-5" onMouseOver={() => UpdateScreenshotData()}>
    <ButtonGeneratePdfQuote
      robotPlatform={robotPlatformDataLabel}
      colourState={colourSelectionState}
      batteryState={batterySelectionState}
      computerState={computerSelectionState}
      processorState={computerProcessorSelectionState}
      ramState={computerRamSelectionState}
      storageState={computerStorageSelectionState}
      gpuState={computerGpuSelectionState}
      kitState={kitSelectionState}
      statesArray={makePriceLeadStatesArray()}
      attachmentTowerState={towerSelectionState}
      attachmentStates={attachmentSelectionStates}
      screenshotData={screenshotDataState}
    />
  </div>
```

`screenshotDataState` is defined at the top of *dingo-omni.js*, and defaults to a value of *null*.
This data gets updated using the function `UpdateScreenShotData`, which is only called when the User's cursor hovers over the button to generate a PDF quote. This means some PDF quotes will not have screenshots if:
  - the User does not hover over the button long enough for the JPEG base64 data to be saved to *screenshotDataState*
  - the User uses *tab* and *return* to click the button rather than using a mouse
  - the User clicks the button using a touchscreen

*onMouseOver* was chosen so the screenshot is only generated when the User is finished configuring the robot. The intention is to minimize the number of State updates since base64 is a rather large file, and could slow down the browser experience if it runs frequently.

The actual screenshot is taken using the opensource library *html2canvas*, implemented in our function `UpdateScreenshotData`.

```javascript
  function UpdateScreenshotData() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      changeScreenshotDataState(canvas.toDataURL("image/jpeg"));
    });
  }
```

This function finds the Three.Js element `<Canvas id="divToPrint" gl={{ preserveDrawingBuffer: true }}>  ...  </Canvas>` and takes a screenshot of it. 

Known odd functionality:

- This screenshot is of the current rendering of the Three.js canvas, as displayed in the User's browser, so it could look odd depending how the User has the model oriented, and hos CSS has placed the `<Canvas>` component related to the User's screensize.
- I had to set *WebGL* to `preserveDrawingBuffer: true`. This can cause odd jumping or flickering of the model between rendered frames. I needed to set this to true, so the `<Canvas>` is never blank between frames. The User's eye wouldn't notice blank screens between renders, but the screenshot would likely be saved as a blank screen.