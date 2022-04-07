// Next.js and React library imports
import Head from "next/head";
import { React, Suspense, useState } from "react";
import SelectFormatted from "/components/page-layout/SelectFormatted";
import ShowRotateModelNotification from "/components/page-layout/NotificationRotateModel";

// Price, Lead-time, and Quoting imports
import PriceText from "/components/price-lead-quote/PriceText";
import LeadtimeText from "/components/price-lead-quote/LeadtimeText";
import ButtonGeneratePdfQuote from "/components/price-lead-quote/ButtonQuote";
import html2canvas from "html2canvas";

// Three.js library imports, including custom components used on all robot platforms
import { Canvas } from "@react-three/fiber";
import ConfiguredOrbitControls from "/components/three-settings/ConfiguredOrbitControls";
import { PerspectiveCamera } from "@react-three/drei";
import ModelBanana from "/components/three-models/ModelBanana";
import AttachmentsRenderer from "/components/three-models/attachments/AttachmentsRenderer";

// json data imports - common for all robot platforms
import selectYesNoData from "/public/json/DataYesNo";
import computerDataFile from "/public/json/DataComputer";

// custom component imports - three.js - robot specific
import ModelRobotChassisBase from "/components/three-models/dingo-omni/ChassisBase";
import ModelRobotChassisPanels from "/components/three-models/dingo-omni/ChassisPanels";
import ModelRobotChassisWheels from "/components/three-models/dingo-omni/ChassisWheels";
import RendererIntegrationRiser from "/components/three-models/dingo-omni/RendererIntegrationRiser";

// json data imports - robot platform specific
import dataFile from "/public/json/DataDingoOmni";

// constants from JSON files
const computerData = computerDataFile.computers;
const computerProcessorData = computerDataFile.processors;
const computerRamData = computerDataFile.ram;
const computerStorageData = computerDataFile.storage;
const computerGpuData = computerDataFile.gpu;
const webpageTabTitle = dataFile.webpage.tabTitle;
const robotPlatformData = dataFile.robotPlatform;
const robotPlatformDataLabel = robotPlatformData.label;
const colourData = dataFile.panelColours;
const batteryData = dataFile.batteryItems;
const kitData = dataFile.kits;
const allowIntegrationPlate = dataFile.integrationPlate.bool;
const integrationPlateData = dataFile.integrationPlate.value;
const allowWeatherproofing = dataFile.integrationPlate.bool;
const weatherproofingData = dataFile.weatherproofing.value;
const allowIntegrationRiser = dataFile.integrationRiser.bool;
const integrationRiserData = dataFile.integrationRiser.value;
const integrationRiserRelatedAttachmentPositionsData = dataFile.integrationRiser.relatedAttachmentPositions;

const allowIntegrationTowerOne = dataFile.integrationTowerOne.bool;
const integrationTowerOneData = dataFile.integrationTowerOne.value;
const integrationTowerOnePositionData = dataFile.integrationTowerOne.positions;
const integrationTowerOneRelatedAttachmentPositionsData = dataFile.integrationTowerOne.relatedAttachmentPositions;

const attachmentData = dataFile.attachmentItems;
const bananaPositionData = dataFile.bananaPosition;

function Page() {
  // define states
  const [colourSelectionState, changeColourSelectionState] = useState(colourData[0]);
  const [batterySelectionState, changeBatterySelectionState] = useState(batteryData[0]);
  //
  const [computerSelectionState, changeComputerSelectionState] = useState(computerData[0]);
  const [computerProcessorSelectionState, changeComputerProcessorSelectionState] = useState(computerProcessorData[1]);
  const [computerRamSelectionState, changeComputerRamSelectionState] = useState(computerRamData[0]);
  const [computerStorageSelectionState, changeComputerStorageSelectionState] = useState(computerStorageData[0]);
  const [computerGpuSelectionState, changeComputerGpuSelectionState] = useState(computerGpuData[0]);
  const computerComponentStates = [computerProcessorSelectionState, computerRamSelectionState, computerStorageSelectionState, computerGpuSelectionState];
  //
  const [kitSelectionState, changeKitSelectionState] = useState(kitData[0]);
  //
  const [integrationPlateSelectionState, changeIntegrationPlateSelectionState] = useState(integrationPlateData[0]);
  const [weatherproofingSelectionState, changeWeatherproofingSelectionState] = useState(weatherproofingData[0]);
  const [integrationRiserSelectionState, changeIntegrationRiserSelectionState] = useState(integrationRiserData[0]);
  const [integrationTowerOneSelectionState, changeIntegrationTowerOneSelectionState] = useState(integrationTowerOneData[0]);
  const [integrationTowerOnePositionState, changeIntegrationTowerOnePositionState] = useState(integrationTowerOnePositionData[0]);
  
  const [attachmentOneSelectionState, changeAttachmentOneSelectionState] = useState(attachmentData[0]);
  const [attachmentTwoSelectionState, changeAttachmentTwoSelectionState] = useState(attachmentData[0]);
  const [attachmentThreeSelectionState, changeAttachmentThreeSelectionState] = useState(attachmentData[0]);
  const [attachmentFourSelectionState, changeAttachmentFourSelectionState] = useState(attachmentData[0]);
  const [attachmentFiveSelectionState, changeAttachmentFiveSelectionState] = useState(attachmentData[0]);
  const [attachmentSixSelectionState, changeAttachmentSixSelectionState] = useState(attachmentData[0]);
  const [attachmentSevenSelectionState, changeAttachmentSevenSelectionState] = useState(attachmentData[0]);
  const [attachmentEightSelectionState, changeAttachmentEightSelectionState] = useState(attachmentData[0]);
  const [attachmentNineSelectionState, changeAttachmentNineSelectionState] = useState(attachmentData[0]);
  const [attachmentTenSelectionState, changeAttachmentTenSelectionState] = useState(attachmentData[0]);
  const [attachmentElevenSelectionState, changeAttachmentElevenSelectionState] = useState(attachmentData[0]);
  const [attachmentTwelveSelectionState, changeAttachmentTwelveSelectionState] = useState(attachmentData[0]);
  const [attachmentThirteenSelectionState, changeAttachmentThirteenSelectionState] = useState(attachmentData[0]);
  const [attachmentFourteenSelectionState, changeAttachmentFourteenSelectionState] = useState(attachmentData[0]);
  const [attachmentFifteenSelectionState, changeAttachmentFifteenSelectionState] = useState(attachmentData[0]);
  const attachmentSelectionStates = [
    [0, attachmentOneSelectionState, changeAttachmentOneSelectionState, integrationTowerOneSelectionState],
    [1, attachmentTwoSelectionState, changeAttachmentTwoSelectionState, integrationTowerOneSelectionState],
    [2, attachmentThreeSelectionState, changeAttachmentThreeSelectionState, integrationTowerOneSelectionState],
    [3, attachmentFourSelectionState, changeAttachmentFourSelectionState, integrationTowerOneSelectionState],
    [4, attachmentFiveSelectionState, changeAttachmentFiveSelectionState, integrationTowerOneSelectionState],
    [5, attachmentSixSelectionState, changeAttachmentSixSelectionState, integrationTowerOneSelectionState],
    [6, attachmentSevenSelectionState, changeAttachmentSevenSelectionState, integrationTowerOneSelectionState],
    [7, attachmentEightSelectionState, changeAttachmentEightSelectionState, integrationTowerOneSelectionState],
    [8, attachmentNineSelectionState, changeAttachmentNineSelectionState, integrationTowerOneSelectionState],
    [9, attachmentTenSelectionState, changeAttachmentTenSelectionState, integrationTowerOneSelectionState],
    [10, attachmentElevenSelectionState, changeAttachmentElevenSelectionState, integrationTowerOneSelectionState],
    [11, attachmentTwelveSelectionState, changeAttachmentTwelveSelectionState, integrationTowerOneSelectionState],
    [12, attachmentThirteenSelectionState, changeAttachmentThirteenSelectionState, integrationTowerOneSelectionState],
    [13, attachmentFourteenSelectionState, changeAttachmentFourteenSelectionState, integrationTowerOneSelectionState],
    [14, attachmentFifteenSelectionState, changeAttachmentFifteenSelectionState, integrationTowerOneSelectionState],
  ];
  //
  const [bananaSelectionState, changeBananaSelectionState] = useState(selectYesNoData[0]);
  //
  const [screenshotDataState, changeScreenshotDataState] = useState(null);

  function UpdateScreenshotData() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      changeScreenshotDataState(canvas.toDataURL("image/jpeg"));
    });
  }

  function makePriceLeadStatesArray() {
    let priceLeadStatesArray = [
      robotPlatformData,
      colourSelectionState,
      batterySelectionState,
      computerSelectionState,
      kitSelectionState,
      integrationPlateSelectionState,
      weatherproofingSelectionState,
      integrationRiserSelectionState,
      integrationTowerOneSelectionState,
      // integrationTowerTwoSelectionState
    ];
    
    // add attachments to priceLeadStatesArray
    for(let i = 0; i < attachmentSelectionStates.length; i++) {
      if (integrationPlateSelectionState.attachmentPosition[i].bool && weatherproofingSelectionState.attachmentPosition[i].bool && integrationRiserSelectionState.attachmentPosition[i].bool && integrationTowerOneSelectionState.attachmentPosition[i].bool && kitSelectionState.attachmentPosition[i].bool) {
        priceLeadStatesArray.push(attachmentSelectionStates[i][1]);
      }
    };

    //add computer and components to priceLeadStatesArray
    for (let i = 0; i < computerComponentStates.length; i++) {
      if (computerSelectionState.configurableComputerBool) {
        priceLeadStatesArray.push(computerComponentStates[i]);
      }
    }
    return priceLeadStatesArray;
  }

  // Select rendering functions
  function SelectAttachmentsRendererHelper(indexOfElementFromArray) {
    if (
      integrationPlateSelectionState.attachmentPosition[indexOfElementFromArray].bool &&
      integrationRiserSelectionState.attachmentPosition[indexOfElementFromArray].bool &&
      kitSelectionState.attachmentPosition[indexOfElementFromArray].bool &&
      integrationTowerOneSelectionState.attachmentPosition[indexOfElementFromArray].bool
    ) {
      const tempKeyName = "selectAttachmentsRendererKey" + String(indexOfElementFromArray);
      return (
        <SelectFormatted
          displayName={"Attachment " + String(indexOfElementFromArray + 1)}
          options={attachmentData}
          defaultValue={indexOfElementFromArray}
          currentState={attachmentSelectionStates[indexOfElementFromArray][1]}
          changeStateFunction={attachmentSelectionStates[indexOfElementFromArray][2]}
          key={tempKeyName}
        />
      );
    }
  }
  function SelectAttachmentsRenderer() {
    let selectFieldsArray = [];
    // using forEach rather than a for loop, so I can return a DOM component for each element of the array
    attachmentSelectionStates.forEach((elementFromArray) => {
      selectFieldsArray.push(SelectAttachmentsRendererHelper(elementFromArray[0]));
    });
    return <>{selectFieldsArray}</>;
  }

  // Attachment Models rendering functions
  function ModelAttachmentsRendererHelper(elementFromArray) {
    const tempKeyName = "modelAttachmentsRendererKey" + String(elementFromArray[0]);
    if (
      integrationPlateSelectionState.attachmentPosition[elementFromArray[0]].bool &&
      kitSelectionState.attachmentPosition[elementFromArray[0]].bool &&
      integrationRiserSelectionState.attachmentPosition[elementFromArray[0]].bool &&
      integrationTowerOneSelectionState.attachmentPosition[elementFromArray[0]].bool
    ) {
      let tempObject = {"xyz": [0, 0, 0], "rpy":[0, 0, 0]};
      if(integrationTowerOneRelatedAttachmentPositionsData[elementFromArray[0]].bool || integrationRiserRelatedAttachmentPositionsData[elementFromArray[0]].bool){
        tempObject.xyz[0] = integrationTowerOnePositionState.xyz[0];
        if(integrationTowerOneSelectionState.xyz[1] > integrationRiserSelectionState.xyz[1]) {
          tempObject.xyz[1] = integrationTowerOneSelectionState.xyz[1];
        }else{
          tempObject.xyz[1] = integrationRiserSelectionState.xyz[1];
        }
      }
      return (
        <AttachmentsRenderer
          attachmentSelectionState={elementFromArray[1]}
          attachmentPosition={elementFromArray[0]}
          modelAttachmentPositionShiftOne={tempObject}
          options={attachmentData}
          dataFile={dataFile}
          key={tempKeyName}
        />
      );
    }
  }
  function ModelAttachmentsRenderer() {
    let attachmentModelsArray = [];
    // using forEach rather than a for loop, so I can return a DOM component for each element of the array
    attachmentSelectionStates.forEach((elementFromArray) => {
      attachmentModelsArray.push(ModelAttachmentsRendererHelper(elementFromArray));
    });
    return <>{attachmentModelsArray}</>;
  }

  // Kit Models rendering functions
  function ModelKitsRendererHelper(elementFromArray) {
    const tempKeyName = "modelKitsRendererKey" + String(elementFromArray[0]);
    if (!kitSelectionState.attachmentPosition[elementFromArray[0]].bool) {
      let tempObject = {"xyz": [0, 0, 0], "rpy":[0, 0, 0]};
      return (
        <AttachmentsRenderer
          attachmentSelectionState={attachmentData[kitSelectionState.attachmentPosition[elementFromArray[0]].attachmentItem]}
          attachmentPosition={kitSelectionState.attachmentPosition[elementFromArray[0]].position}
          modelAttachmentPositionShiftOne={tempObject}
          options={attachmentData}
          dataFile={dataFile}
          key={tempKeyName}
        />
      );
    }
  }
  function ModelKitsRenderer() {
    let kitModelsArray = [];
    // using forEach rather than a for loop, so I can return a DOM component for each element of the array
    attachmentSelectionStates.forEach((elementFromArray) => {
      kitModelsArray.push(ModelKitsRendererHelper(elementFromArray));
    });
    return <>{kitModelsArray}</>;
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
            <ul className="flex flex-col w-full text-black divide-y divide-slate-500">
              <div>
                <ul className="flex flex-col w-full text-black">
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
                </ul>
              </div>
              <div>
                <ul className="flex flex-col w-full text-black">
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
                </ul>
              </div>
              <div>
                <ul className="flex flex-col w-full text-black">
                  {/*  Select, Integration Riser  */}
                  {!kitSelectionState.bool && allowIntegrationRiser && (
                    <SelectFormatted
                      displayName={"Riser"}
                      options={integrationRiserData}
                      defaultValue={0}
                      currentState={integrationRiserSelectionState}
                      changeStateFunction={changeIntegrationRiserSelectionState}
                    />
                  )}

                  {/*  Select, Kits  */}
                  {!integrationRiserSelectionState.bool && <SelectFormatted
                    displayName={"Kits"}
                    options={kitData}
                    defaultValue={0}
                    currentState={kitSelectionState}
                    changeStateFunction={changeKitSelectionState}
                  />}
                </ul>
              </div>
              <div>
                <ul className="flex flex-col w-full text-black">
                  <SelectAttachmentsRenderer />
                </ul>
              </div>
              <div>
                <ul className="flex flex-col w-full text-black">
                  {/*  Select, Banana For Scale  */}
                  <SelectFormatted
                    displayName={"Banana For Scale"}
                    options={selectYesNoData}
                    defaultValue={0}
                    currentState={bananaSelectionState}
                    changeStateFunction={changeBananaSelectionState}
                  />
                </ul>
              </div>
            </ul>
            <br /> {/*  leaving blank space at the bottom  */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </aside>
        <main className="w-2/3 fixed h-screen right-0">
          <div className="w-full h-full z-0">
            <Canvas id="divToPrint" gl={{ preserveDrawingBuffer: true }}>
              <ambientLight intensity={0.7} />
              <spotLight position={[10000, 3000, 1000]} angle={0.9} penumbra={1} intensity={0.6} castShadow shadow-mapSize={[5000, 5000]} />
              <ConfiguredOrbitControls />
              <PerspectiveCamera makeDefault fov={65} position={[600, -100, 600]} />

              {/*  Three.js models  */}
              <Suspense fallback={null}>
                <ModelRobotChassisBase />
                <ModelRobotChassisPanels modelColour={colourSelectionState.rgb} />
                <ModelRobotChassisWheels />
                <RendererIntegrationRiser selectionState={integrationRiserSelectionState} options={integrationRiserData} key={integrationRiserSelectionState.value} /> 
                <ModelKitsRenderer />
                <ModelAttachmentsRenderer />
                {bananaSelectionState.bool && <ModelBanana dataOne={bananaPositionData} />}
              </Suspense>
            </Canvas>
          </div>
          <ShowRotateModelNotification />
        </main>
      </div>
      <footer className="py-1.5 bottom-0 h-16 fixed flex w-full bg-stone-700 text-white justify-center">
        <span className="flex">
          <div className="px-5">
            <PriceText statesArray={makePriceLeadStatesArray()} />
          </div>
          <div className="px-5">
            <LeadtimeText statesArray={makePriceLeadStatesArray()} />
          </div>
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
              integrationPlateState={integrationPlateSelectionState}
              weatherproofingState={weatherproofingSelectionState}
              integrationRiserState={integrationRiserSelectionState}
              integrationTowerOneState={integrationTowerOneSelectionState}
              kitState={kitSelectionState}
              attachmentStates={attachmentSelectionStates}
              statesArray={makePriceLeadStatesArray()}
              screenshotData={screenshotDataState}
            />
          </div>
        </span>
      </footer>
    </div>
  );
}

export default Page;
