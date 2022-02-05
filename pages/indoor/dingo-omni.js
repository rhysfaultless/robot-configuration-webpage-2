// Next.js library imports
import Head from "next/head";

// React library imports
import { React, Suspense, useState } from "react";
import Select from "react-select";

// Three.js library imports
import { Canvas } from "@react-three/fiber";

// custom component imports - three.js - all robots
import ConfiguredOrbitControls from "/components/three-settings/ConfiguredOrbitControls";
import ConfiguredCamera from "/components/three-settings/ConfiguredCamera";
import ModelBanana from "/components/three-models/ModelBanana";

// custom component imports - three.js - robot specific
import ModelRobotChassisBase from "/components/three-models/ModelRobotChassisBaseDingoOmni";
import ModelRobotChassisPanels from "/components/three-models/ModelRobotChassisPanelsDingoOmni";
import ModelRobotChassisWheels from "/components/three-models/ModelRobotChassisWheelsDingoOmni";
// custom component imports - three.js - attachments and sensors
import ModelAttachmentHokuyo from "/components/three-models/ModelAttachmentHokuyo";
import ModelAttachmentMicrostrain15 from "/components/three-models/ModelAttachmentMicrostrain15";
import ModelAttachmentPlate50 from "/components/three-models/ModelAttachmentPlate50";
import ModelAttachmentPlate100 from "/components/three-models/ModelAttachmentPlate100";
import ModelAttachmentVelodyne from "/components/three-models/ModelAttachmentVelodyne";

// json data imports - robot specific
import selectYesNoData from "/public/json/DataYesNo";
import selectColourData from "/public/json/DataColour";
import selectComputerData from "/public/json/DataComputer";
import selectBatteryData from "/public/json/DataBattery";
import selectAttachmentData from "/public/json/DataAttachment";
//testing
import attachmentPositionData from "/public/json/AttachmentPositionDingoOmni";
import attachmentPositionHeights from "/public/json/AttachmentPositionHeights";

// configuration constants - robot specific
const RobotPlatform = "Dingo-O";

// colours
const colourRobotChassisBase = "rgb(80, 80, 80)";

function Page() {
  // define states
  const [bananaSeletionState, changeBananaSelectionState] = useState(selectYesNoData[0].bool);
  const [colourSeletionState, changeColourSelectionState] = useState(selectColourData[0]);
  const [computerSelectionState, changeComputerSelectionState] = useState(selectComputerData[0]);
  const [batterySelectionState, changeBatterySelectionState] = useState(selectBatteryData[0]);
  const [attachmentOneSelectionState, changeAttachmentOneSelectionState] = useState(selectAttachmentData[0]);
  const [attachmentTwoSelectionState, changeAttachmentTwoSelectionState] = useState(selectAttachmentData[0]);
  const [attachmentThreeSelectionState, changeAttachmentThreeSelectionState] = useState(selectAttachmentData[0]);
  const [attachmentFourSelectionState, changeAttachmentFourSelectionState] = useState(selectAttachmentData[0]);

  // setup for attachment one
  const attachmentOneModels = [
    <></>,
    <ModelAttachmentVelodyne key="velodyneZero" dataOne={attachmentPositionData[0]} dataTwo={attachmentPositionHeights[0]}/>, 
    <group key="null">
      <ModelAttachmentPlate50 key="null" dataOne={attachmentPositionData[0]} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[0]} dataTwo={attachmentPositionHeights[1]}/>,
    </group>,
    <group key="null">
      <ModelAttachmentPlate100 key="null" dataOne={attachmentPositionData[0]} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[0]} dataTwo={attachmentPositionHeights[2]}/>,
    </group>,
    <ModelAttachmentHokuyo key="null" dataOne={attachmentPositionData[0]} dataTwo={attachmentPositionHeights[0]} />,
    <ModelAttachmentMicrostrain15 key="null" dataOne={attachmentPositionData[0]} dataTwo={attachmentPositionHeights[0]} />
  ];
  function AttachmentOneRender() {
    for (let i = 0; i < selectAttachmentData.length; i++) {
      if (selectAttachmentData[i] == attachmentOneSelectionState) {
        return attachmentOneModels[i];
      }
    }
    return null;
  }

  // setup for attachment two
  const attachmentTwoModels = [
    <></>,
    <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[1]} dataTwo={attachmentPositionHeights[0]}/>, 
    <group key="null">
      <ModelAttachmentPlate50 key="null" dataOne={attachmentPositionData[1]} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[1]} dataTwo={attachmentPositionHeights[1]}/>,
    </group>,
    <group key="null">
      <ModelAttachmentPlate100 key="null" dataOne={attachmentPositionData[1]} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[1]} dataTwo={attachmentPositionHeights[2]}/>,
    </group>,
    <ModelAttachmentHokuyo key="null" dataOne={attachmentPositionData[1]} dataTwo={attachmentPositionHeights[0]} />,
    <ModelAttachmentMicrostrain15 key="null" dataOne={attachmentPositionData[1]} dataTwo={attachmentPositionHeights[0]} />
  ];
  function AttachmentTwoRender() {
    for (let i = 0; i < selectAttachmentData.length; i++) {
      if (selectAttachmentData[i] == attachmentTwoSelectionState) {
        return attachmentTwoModels[i];
      }
    }
    return null;
  }

  // setup for attachment Three
  const attachmentThreeModels = [
    <></>,
    <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[2]} dataTwo={attachmentPositionHeights[0]}/>, 
    <group key="null">
      <ModelAttachmentPlate50 key="null" dataOne={attachmentPositionData[2]} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[2]} dataTwo={attachmentPositionHeights[1]}/>,
    </group>,
    <group key="null">
      <ModelAttachmentPlate100 key="null" dataOne={attachmentPositionData[2]} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[2]} dataTwo={attachmentPositionHeights[2]}/>,
    </group>,
    <ModelAttachmentHokuyo key="null" dataOne={attachmentPositionData[2]} dataTwo={attachmentPositionHeights[0]} />,
    <ModelAttachmentMicrostrain15 key="null" dataOne={attachmentPositionData[2]} dataTwo={attachmentPositionHeights[0]} />
  ];
  function AttachmentThreeRender() {
    for (let i = 0; i < selectAttachmentData.length; i++) {
      if (selectAttachmentData[i] == attachmentThreeSelectionState) {
        return attachmentThreeModels[i];
      }
    }
    return null;
  }

  // setup for attachment Four
  const attachmentFourModels = [
    <></>,
    <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[3]} dataTwo={attachmentPositionHeights[0]}/>, 
    <group key="null">
      <ModelAttachmentPlate50 key="null" dataOne={attachmentPositionData[3]} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[3]} dataTwo={attachmentPositionHeights[1]}/>,
    </group>,
    <group key="null">
      <ModelAttachmentPlate100 key="null" dataOne={attachmentPositionData[3]} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPositionData[3]} dataTwo={attachmentPositionHeights[2]}/>,
    </group>,
    <ModelAttachmentHokuyo key="null" dataOne={attachmentPositionData[3]} dataTwo={attachmentPositionHeights[0]} />,
    <ModelAttachmentMicrostrain15 key="null" dataOne={attachmentPositionData[3]} dataTwo={attachmentPositionHeights[0]} />
  ];
  function AttachmentFourRender() {
    for (let i = 0; i < selectAttachmentData.length; i++) {
      if (selectAttachmentData[i] == attachmentFourSelectionState) {
        return attachmentFourModels[i];
      }
    }
    return null;
  }

  return (
    <div>
      <Head>
        <title>Clearpath | {RobotPlatform}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-100 text-black">
        <aside className="flex flex-col w-1/3  dark:bg-stone-300">
          <div className="sidebar-content px-4 py-6">
            <ul className="flex flex-col w-full text-black">
              <li className="inline-block max-w-s px-1 py-2 text-center">
                <span className="uppercase">Configure</span>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Colour</p>
                <div className="float-right w-2/3">
                  <Select options={selectColourData} defaultValue={selectColourData[0]} onChange={(event) => changeColourSelectionState(event)} />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Computer</p>
                <div className="float-right w-2/3">
                  <Select options={selectComputerData} defaultValue={selectComputerData[0]} onChange={(event) => changeComputerSelectionState(event)} />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Battery</p>
                <div className="float-right w-2/3">
                  <Select options={selectBatteryData} defaultValue={selectBatteryData[0]} onChange={(event) => changeBatterySelectionState(event)} />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Attachment 1</p>
                <div className="float-right w-2/3">
                  <Select
                    options={selectAttachmentData}
                    defaultValue={selectAttachmentData[0]}
                    onChange={(event) => changeAttachmentOneSelectionState(event)}
                  />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Attachment 2</p>
                <div className="float-right w-2/3">
                  <Select
                    options={selectAttachmentData}
                    defaultValue={selectAttachmentData[0]}
                    onChange={(event) => changeAttachmentTwoSelectionState(event)}
                  />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Attachment 3</p>
                <div className="float-right w-2/3">
                  <Select
                    options={selectAttachmentData}
                    defaultValue={selectAttachmentData[0]}
                    onChange={(event) => changeAttachmentThreeSelectionState(event)}
                  />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Attachment 4</p>
                <div className="float-right w-2/3">
                  <Select
                    options={selectAttachmentData}
                    defaultValue={selectAttachmentData[0]}
                    onChange={(event) => changeAttachmentFourSelectionState(event)}
                  />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Banana For Scale</p>
                <div className="float-right w-2/3">
                  <Select options={selectYesNoData} defaultValue={selectYesNoData[0]} onChange={(event) => changeBananaSelectionState(event.bool)} />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-2 text-center">
                <span className="uppercase">Download Quote</span>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex flex-col w-2/3">
          <Canvas>
            <ambientLight intensity={0.7} />
            <spotLight position={[1000, 300, 1000]} angle={0.9} penumbra={1} intensity={0.6} castShadow shadow-mapSize={[5000, 5000]} />
            <ConfiguredOrbitControls />
            <ConfiguredCamera />

            {/* Three.js model goes here */}
            <Suspense fallback={null}>
              <ModelRobotChassisBase />
              <ModelRobotChassisPanels modelColour={colourSeletionState.rgb} />
              <ModelRobotChassisWheels />
              <AttachmentOneRender />
              <AttachmentTwoRender />
              <AttachmentThreeRender />
              <AttachmentFourRender />
              {bananaSeletionState && <ModelBanana dataOne={attachmentPositionData[4]} dataTwo={attachmentPositionHeights[0]} />}
            </Suspense>
          </Canvas>
        </main>
      </div>
    </div>
  );
}

export default Page;