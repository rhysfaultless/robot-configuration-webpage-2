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
import ModelAttachments from "/components/three-models/ModelAttachmentsDingoOmni.js";

// json data imports - robot specific
import dataFile from "/public/json/DataDingoOmni";
import selectYesNoData from "/public/json/DataYesNo";
import selectComputerData from "/public/json/DataComputer";
const webpageTabTitle = dataFile.webpage.tabTitle;
const robotPlatformData = dataFile.robotPlatform;
const colourData = dataFile.panelColours;
const batteryData = dataFile.batteryItems;
const attachmentData = dataFile.attachmentItems;
const bananaPositionData = dataFile.bananaPosition;

function Page() {
  // define states
  const [bananaSeletionState, changeBananaSelectionState] = useState(selectYesNoData[0].bool);
  const [colourSelectionState, changeColourSelectionState] = useState(colourData[0]);
  const [computerSelectionState, changeComputerSelectionState] = useState(selectComputerData[0]);
  const [batterySelectionState, changeBatterySelectionState] = useState(batteryData[0]);
  const [attachmentOneSelectionState, changeAttachmentOneSelectionState] = useState(attachmentData[0]);
  const [attachmentTwoSelectionState, changeAttachmentTwoSelectionState] = useState(attachmentData[0]);
  const [attachmentThreeSelectionState, changeAttachmentThreeSelectionState] = useState(attachmentData[0]);
  const [attachmentFourSelectionState, changeAttachmentFourSelectionState] = useState(attachmentData[0]);

  function AttachmentRenderer(props) {
    for (let i = 0; i < attachmentData.length; i++) {
      if (attachmentData[i] == props.attachmentSelectionState) {
        return <ModelAttachments modelAttachmentId={i} modelAttachmentPosition={props.attachmentPosition} userSelectedData={props.attachmentSelectionState} />;
      }
    }
    return null;
  }

  function Price() {
    let priceValue = 
      robotPlatformData.price
      + colourSelectionState.price
      + computerSelectionState.price
      + batterySelectionState.price
      + attachmentOneSelectionState.price 
      + attachmentTwoSelectionState.price 
      + attachmentThreeSelectionState.price 
      + attachmentFourSelectionState.price;
    return priceValue;
  }

  function PriceText() {
    let returnedString = "PRICE: $" + Price().toString();
    return <p> {returnedString} </p>
  }

  function LeadTime() {
    let leadTimeValue =
      Math.max( 
        robotPlatformData.leadTime,
        colourSelectionState.leadTime,
        computerSelectionState.leadTime,
        batterySelectionState.leadTime,
        attachmentOneSelectionState.leadTime,
        attachmentTwoSelectionState.leadTime,
        attachmentThreeSelectionState.leadTime,
        attachmentFourSelectionState.leadTime
      );
    return leadTimeValue;
  }

  function LeadTimeText() {
    let returnedString = "LEAD TIME: " + LeadTime().toString() + " WEEKS";
    return <p> {returnedString} </p>
  }

  return (
    <div>
      <Head>
        <title>{webpageTabTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full bg-gray-100 text-black">
        <aside className="flex flex-col w-1/3  dark:bg-stone-300">
          <div className="sidebar-content px-4 py-6">
            <ul className="flex flex-col w-full text-black">
              <li className="inline-block max-w-s px-1 py-4 text-center">
                <span className="uppercase">Configure</span>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Colour</p>
                <div className="float-right w-2/3">
                  <Select options={colourData} defaultValue={colourData[0]} onChange={(event) => changeColourSelectionState(event)} />
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
                  <Select options={batteryData} defaultValue={batteryData[0]} onChange={(event) => changeBatterySelectionState(event)} />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Attachment 1</p>
                <div className="float-right w-2/3">
                  <Select
                    options={attachmentData}
                    defaultValue={attachmentData[0]}
                    onChange={(event) => changeAttachmentOneSelectionState(event)}
                  />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Attachment 2</p>
                <div className="float-right w-2/3">
                  <Select
                    options={attachmentData}
                    defaultValue={attachmentData[0]}
                    onChange={(event) => changeAttachmentTwoSelectionState(event)}
                  />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Attachment 3</p>
                <div className="float-right w-2/3">
                  <Select
                    options={attachmentData}
                    defaultValue={attachmentData[0]}
                    onChange={(event) => changeAttachmentThreeSelectionState(event)}
                  />
                </div>
              </li>

              <li className="inline-block max-w-s px-1 py-1">
                <p className="float-left w-1/3">Attachment 4</p>
                <div className="float-right w-2/3">
                  <Select
                    options={attachmentData}
                    defaultValue={attachmentData[0]}
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

              <li className="inline-block max-w-s px-1 py-8 text-left">
                <span>
                  <div className="float-left w-1/2"><PriceText /></div>
                  <div className="float-right w-1/2"><LeadTimeText /></div>
                </span>
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
              <ModelRobotChassisPanels modelColour={colourSelectionState.rgb} />
              <ModelRobotChassisWheels />
              <AttachmentRenderer attachmentSelectionState={attachmentOneSelectionState} attachmentPosition={0} />
              <AttachmentRenderer attachmentSelectionState={attachmentTwoSelectionState} attachmentPosition={1} />
              <AttachmentRenderer attachmentSelectionState={attachmentThreeSelectionState} attachmentPosition={2} />
              <AttachmentRenderer attachmentSelectionState={attachmentFourSelectionState} attachmentPosition={3} />
              {bananaSeletionState && <ModelBanana dataOne={bananaPositionData} />}
            </Suspense>
          </Canvas>
        </main>
      </div>
    </div>
  );
}

export default Page;
