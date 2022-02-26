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
import computerDataFile from "/public/json/DataComputer";
const computerData = computerDataFile.computers;
const computerProcessorData = computerDataFile.processors;
const computerRamData = computerDataFile.ram;
const computerStorageData = computerDataFile.storage;
const computerGpuData = computerDataFile.gpu;
const webpageTabTitle = dataFile.webpage.tabTitle;
const robotPlatformData = dataFile.robotPlatform;
const robotPlatformData_label = robotPlatformData.label;
const attachmentPositionData = dataFile.attachmentPositions;
const colourData = dataFile.panelColours;
const batteryData = dataFile.batteryItems;
const towerData = dataFile.tower;
const attachmentData = dataFile.attachmentItems;
const bananaPositionData = dataFile.bananaPosition;

// pdf import - for generating a quote
import ButtonGeneratePdfQuote from "/components/price-lead-quote/ButtonQuote";

function Page() {
  // define states
  const [bananaSelectionState, changeBananaSelectionState] = useState(selectYesNoData[0]);
  //
  const [colourSelectionState, changeColourSelectionState] = useState(colourData[0]);
  const [towerSelectionState, changeTowerSelectionState] = useState(towerData[0]);
  const [batterySelectionState, changeBatterySelectionState] = useState(batteryData[0]);
  //
  const [computerSelectionState, changeComputerSelectionState] = useState(computerData[0]);
  const [computerProcessorSelectionState, changeComputerProcessorSelectionState] = useState(computerProcessorData[1]);
  const [computerRamSelectionState, changeComputerRamSelectionState] = useState(computerRamData[0]);
  const [computerStorageSelectionState, changeComputerStorageSelectionState] = useState(computerStorageData[0]);
  const [computerGpuSelectionState, changeComputerGpuSelectionState] = useState(computerGpuData[0]);
  const computerComponentStates = [computerProcessorSelectionState, computerRamSelectionState, computerStorageSelectionState, computerGpuSelectionState];
  //
  const [attachmentOneSelectionState, changeAttachmentOneSelectionState] = useState(attachmentData[0]);
  const [attachmentTwoSelectionState, changeAttachmentTwoSelectionState] = useState(attachmentData[0]);
  const [attachmentThreeSelectionState, changeAttachmentThreeSelectionState] = useState(attachmentData[0]);
  const [attachmentFourSelectionState, changeAttachmentFourSelectionState] = useState(attachmentData[0]);
  const [attachmentFiveSelectionState, changeAttachmentFiveSelectionState] = useState(attachmentData[0]);
  const [attachmentSixSelectionState, changeAttachmentSixSelectionState] = useState(attachmentData[0]);
  const [attachmentSevenSelectionState, changeAttachmentSevenSelectionState] = useState(attachmentData[0]);
  const [attachmentEightSelectionState, changeAttachmentEightSelectionState] = useState(attachmentData[0]);
  const attachmentPositionsAndStates = [
    [attachmentPositionData[0], attachmentOneSelectionState],
    [attachmentPositionData[1], attachmentTwoSelectionState],
    [attachmentPositionData[2], attachmentThreeSelectionState],
    [attachmentPositionData[3], attachmentFourSelectionState],
    [attachmentPositionData[4], attachmentFiveSelectionState],
    [attachmentPositionData[5], attachmentSixSelectionState],
    [attachmentPositionData[6], attachmentSevenSelectionState],
    [attachmentPositionData[7], attachmentEightSelectionState],
  ];

  function makePriceLeadStatesArray() {
    let priceLeadStatesArray = [robotPlatformData, colourSelectionState, batterySelectionState, computerSelectionState, towerSelectionState];
    for (let i = 0; i < attachmentPositionsAndStates.length; i++) {
      if (!attachmentPositionsAndStates[i][0].onTowerBool || towerSelectionState.bool) {
        priceLeadStatesArray.push(attachmentPositionsAndStates[i][1]);
      }
    }
    for (let i = 0; i < computerComponentStates.length; i++) {
      if (computerSelectionState.configurableComputerBool) {
        priceLeadStatesArray.push(computerComponentStates[i]);
      }
    }
    return priceLeadStatesArray;
  }

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
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
                ...theme.colors,
                primary: "#f0c700",
                primary25: "#d4d4d4",
                primary50: "#aaaaaa",
              },
            })}
          />
        </div>
      </li>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>{webpageTabTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex text-black container relative">
        <aside className="h-fit min-h-screen w-1/3 dark:bg-stone-300 left-0">
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

              {/*  Select, Battery  */}
              <SelectFormatted
                displayName={"Battery"}
                options={batteryData}
                defaultValue={0}
                currentState={batterySelectionState}
                changeStateFunction={changeBatterySelectionState}
              />

              <br />

              {/*  Select, Computer  */}
              <SelectFormatted
                displayName={"Computer"}
                options={computerData}
                defaultValue={0}
                currentState={computerSelectionState}
                changeStateFunction={changeComputerSelectionState}
              />

              {/*  Select, Computer, Processor  */}
              {computerSelectionState.configurableComputerBool && (
                <SelectFormatted
                  displayName={"CPU"}
                  options={computerProcessorData}
                  defaultValue={1}
                  currentState={computerProcessorSelectionState}
                  changeStateFunction={changeComputerProcessorSelectionState}
                />
              )}

              {/*  Select, Computer, RAM  */}
              {computerSelectionState.configurableComputerBool && (
                <SelectFormatted
                  displayName={"RAM"}
                  options={computerRamData}
                  defaultValue={0}
                  currentState={computerRamSelectionState}
                  changeStateFunction={changeComputerRamSelectionState}
                />
              )}

              {/*  Select, Computer, Storage  */}
              {computerSelectionState.configurableComputerBool && (
                <SelectFormatted
                  displayName={"Storage"}
                  options={computerStorageData}
                  defaultValue={1}
                  currentState={computerStorageSelectionState}
                  changeStateFunction={changeComputerStorageSelectionState}
                />
              )}

              {/*  Select, Computer, GPU  */}
              {computerSelectionState.configurableComputerBool && (
                <SelectFormatted
                  displayName={"GPU"}
                  options={computerGpuData}
                  defaultValue={0}
                  currentState={computerGpuSelectionState}
                  changeStateFunction={changeComputerGpuSelectionState}
                />
              )}

              <br />

              {/*  Select, Tower  */}
              <SelectFormatted
                displayName={"Attachment Tower"}
                options={towerData}
                defaultValue={0}
                currentState={towerSelectionState}
                changeStateFunction={changeTowerSelectionState}
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

              <br />

              {/*  Select, Banana For Scale  */}
              <SelectFormatted
                displayName={"Banana For Scale"}
                options={selectYesNoData}
                defaultValue={0}
                currentState={bananaSelectionState}
                changeStateFunction={changeBananaSelectionState}
              />
            </ul>
            <br /> {/*  leaving blank space at the bottom  */}
            <br />
            <br />
            <br />
            <br />
          </div>
        </aside>
        <main className="w-2/3 fixed h-screen right-0">
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
      <footer className="py-1.5 bottom-0 h-16 fixed flex w-full dark:bg-stone-700 text-white justify-center">
        <span className="flex">
          <div className="px-5">
            <PriceText statesArray={makePriceLeadStatesArray()} />
          </div>
          <div className="px-5">
            <LeadtimeText statesArray={makePriceLeadStatesArray()} />
          </div>
          <div className="px-5">
            <ButtonGeneratePdfQuote 
              robotPlatform={robotPlatformData_label} 
              colourState={colourSelectionState} 
              batteryState={batterySelectionState} 
              computerState={computerSelectionState} 
              processorState={computerProcessorSelectionState}
              ramState={computerRamSelectionState}
              storageState={computerStorageSelectionState}
              gpuState={computerGpuSelectionState}
              statesArray={makePriceLeadStatesArray()}
            />
          </div>
        </span>
      </footer>
    </div>
  );
}

export default Page;
