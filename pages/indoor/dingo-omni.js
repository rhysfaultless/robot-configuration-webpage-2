// Next.js library imports
import Head from "next/head";

// React library imports
import { React, Suspense, useState } from "react";
import Select from "react-select";

// Price, Lead-time, and Quoting imports
import PriceText from "/components/price-lead-quote/PriceText";
import LeadtimeText from "/components/price-lead-quote/LeadtimeText";

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
import ModelRobotChassisTower from "/components/three-models/ModelRobotChassisTowerDingoOmni";

// custom component imports - three.js - attachments and sensors
import ModelAttachments from "/components/three-models/ModelAttachmentsDingoOmni.js";

// json data imports - robot specific
import dataFile from "/public/json/DataDingoOmni";
import selectYesNoData from "/public/json/DataYesNo";
import computerData from "/public/json/DataComputer";
const webpageTabTitle = dataFile.webpage.tabTitle;
const robotPlatformData = dataFile.robotPlatform;
const colourData = dataFile.panelColours;
const batteryData = dataFile.batteryItems;
const towerData = dataFile.tower;
const attachmentData = dataFile.attachmentItems;
const bananaPositionData = dataFile.bananaPosition;

function Page() {
  // define states
  const [bananaSelectionState, changeBananaSelectionState] = useState(selectYesNoData[0]);
  const [towerSelectionState, changeTowerSelectionState] = useState(towerData[0]);
  const [colourSelectionState, changeColourSelectionState] = useState(colourData[0]);
  const [computerSelectionState, changeComputerSelectionState] = useState(computerData[0]);
  const [batterySelectionState, changeBatterySelectionState] = useState(batteryData[0]);
  const [attachmentOneSelectionState, changeAttachmentOneSelectionState] = useState(attachmentData[0]);
  const [attachmentTwoSelectionState, changeAttachmentTwoSelectionState] = useState(attachmentData[0]);
  const [attachmentThreeSelectionState, changeAttachmentThreeSelectionState] = useState(attachmentData[0]);
  const [attachmentFourSelectionState, changeAttachmentFourSelectionState] = useState(attachmentData[0]);
  const [attachmentFiveSelectionState, changeAttachmentFiveSelectionState] = useState(attachmentData[0]);
  const [attachmentSixSelectionState, changeAttachmentSixSelectionState] = useState(attachmentData[0]);
  const [attachmentSevenSelectionState, changeAttachmentSevenSelectionState] = useState(attachmentData[0]);
  const [attachmentEightSelectionState, changeAttachmentEightSelectionState] = useState(attachmentData[0]);
  const priceLeadStatesArray = [
    robotPlatformData,
    colourSelectionState,
    computerSelectionState,
    batterySelectionState,
    attachmentOneSelectionState,
    attachmentTwoSelectionState,
    attachmentThreeSelectionState,
    attachmentFourSelectionState,
    attachmentFiveSelectionState,
    attachmentSixSelectionState,
    attachmentSevenSelectionState,
    attachmentEightSelectionState,
    towerSelectionState

  ];

  function AttachmentRenderer(props) {
    for (let i = 0; i < attachmentData.length; i++) {
      if (attachmentData[i] == props.attachmentSelectionState) {
        return <ModelAttachments modelAttachmentId={i} modelAttachmentPosition={props.attachmentPosition} userSelectedData={props.attachmentSelectionState} />;
      }
    }
    return null;
  }

  function SelectFormatted(props) {
    return (
      <li className="inline-block max-w-s px-1 py-1">
        <p className="float-left w-1/3">{props.displayName}</p>
        <div className="float-right w-2/3">
          <Select
            options={props.options}
            value={props.currentState}
            defaultValue={props.options[props.defaultValue]}
            onChange={(event) => props.changeStateFunction(event)}
          />
        </div>
      </li>
    );
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

              {/*  Select, Colour  */}
              <SelectFormatted
                displayName={"Colour"}
                options={colourData}
                defaultValue={0}
                currentState={colourSelectionState}
                changeStateFunction={changeColourSelectionState}
              />

              {/*  Select, Computer  */}
              <SelectFormatted
                displayName={"Computer"}
                options={computerData}
                defaultValue={0}
                currentState={computerSelectionState}
                changeStateFunction={changeComputerSelectionState}
              />

              {/*  Select, Battery  */}
              <SelectFormatted
                displayName={"Battery"}
                options={batteryData}
                defaultValue={0}
                currentState={batterySelectionState}
                changeStateFunction={changeBatterySelectionState}
              />

              {/*  Select, Attachment 1  */}
              <SelectFormatted
                displayName={"Attachment 1"}
                options={attachmentData}
                defaultValue={0}
                currentState={attachmentOneSelectionState}
                changeStateFunction={changeAttachmentOneSelectionState}
              />

              {/*  Select, Attachment 2  */}
              <SelectFormatted
                displayName={"Attachment 2"}
                options={attachmentData}
                defaultValue={0}
                currentState={attachmentTwoSelectionState}
                changeStateFunction={changeAttachmentTwoSelectionState}
              />

              {/*  Select, Attachment 3  */}
              <SelectFormatted
                displayName={"Attachment 3"}
                options={attachmentData}
                defaultValue={0}
                currentState={attachmentThreeSelectionState}
                changeStateFunction={changeAttachmentThreeSelectionState}
              />

              {/*  Select, Attachment 4  */}
              <SelectFormatted
                displayName={"Attachment 4"}
                options={attachmentData}
                defaultValue={0}
                currentState={attachmentFourSelectionState}
                changeStateFunction={changeAttachmentFourSelectionState}
              />

              {/*  Select, Tower  */}
              <SelectFormatted
                displayName={"Attachment Tower"}
                options={towerData}
                defaultValue={0}
                currentState={towerSelectionState}
                changeStateFunction={changeTowerSelectionState}
              />

              {/*  Select, Attachment 5  */}
              {towerSelectionState.bool && (
                <SelectFormatted
                  displayName={"Attachment 5"}
                  options={attachmentData}
                  defaultValue={0}
                  currentState={attachmentFiveSelectionState}
                  changeStateFunction={changeAttachmentFiveSelectionState}
                />
              )}

              {/*  Select, Attachment 6  */}
              {towerSelectionState.bool && (
                <SelectFormatted
                  displayName={"Attachment 6"}
                  options={attachmentData}
                  defaultValue={0}
                  currentState={attachmentSixSelectionState}
                  changeStateFunction={changeAttachmentSixSelectionState}
                />
              )}

              {/*  Select, Attachment 7  */}
              {towerSelectionState.bool && (
                <SelectFormatted
                  displayName={"Attachment 7"}
                  options={attachmentData}
                  defaultValue={0}
                  currentState={attachmentSevenSelectionState}
                  changeStateFunction={changeAttachmentSevenSelectionState}
                />
              )}

              {/*  Select, Attachment 8  */}
              {towerSelectionState.bool && (
                <SelectFormatted
                  displayName={"Attachment 8"}
                  options={attachmentData}
                  defaultValue={0}
                  currentState={attachmentEightSelectionState}
                  changeStateFunction={changeAttachmentEightSelectionState}
                />
              )}

              {/*  Select, Banana For Scale  */}
              <SelectFormatted
                displayName={"Banana For Scale"}
                options={selectYesNoData}
                defaultValue={0}
                currentState={bananaSelectionState}
                changeStateFunction={changeBananaSelectionState}
              />

              <li className="inline-block max-w-s px-1 py-8 text-left">
                <span>
                  <div className="float-left w-1/2">
                    <PriceText statesArray={priceLeadStatesArray} />
                  </div>
                  <div className="float-right w-1/2">
                    <LeadtimeText statesArray={priceLeadStatesArray} />
                  </div>
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

            {/*  Three.js models  */}
            <Suspense fallback={null}>
              <ModelRobotChassisBase />
              <ModelRobotChassisPanels modelColour={colourSelectionState.rgb} />
              <ModelRobotChassisWheels />

              {/*  Attachments  */}
              <AttachmentRenderer attachmentSelectionState={attachmentOneSelectionState} attachmentPosition={0} />
              <AttachmentRenderer attachmentSelectionState={attachmentTwoSelectionState} attachmentPosition={1} />
              <AttachmentRenderer attachmentSelectionState={attachmentThreeSelectionState} attachmentPosition={2} />
              <AttachmentRenderer attachmentSelectionState={attachmentFourSelectionState} attachmentPosition={3} />

              {/*  Tower Attachments  */}
              {towerSelectionState.bool && <ModelRobotChassisTower />}
              {towerSelectionState.bool && <AttachmentRenderer attachmentSelectionState={attachmentFiveSelectionState} attachmentPosition={4} />}
              {towerSelectionState.bool && <AttachmentRenderer attachmentSelectionState={attachmentSixSelectionState} attachmentPosition={5} />}
              {towerSelectionState.bool && <AttachmentRenderer attachmentSelectionState={attachmentSevenSelectionState} attachmentPosition={6} />}
              {towerSelectionState.bool && <AttachmentRenderer attachmentSelectionState={attachmentEightSelectionState} attachmentPosition={7} />}

              {bananaSelectionState.bool && <ModelBanana dataOne={bananaPositionData} />}
            </Suspense>
          </Canvas>
        </main>
      </div>
    </div>
  );
}

export default Page;
