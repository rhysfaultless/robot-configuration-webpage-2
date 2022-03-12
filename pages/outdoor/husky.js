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

// custom component imports - three.js - robot specific
import ModelRobotChassisBase from "/components/three-models/husky/ChassisBase";
import ModelRobotChassisPanels from "/components/three-models/husky/ChassisPanels";
import ModelRobotChassisWheels from "/components/three-models/husky/ChassisWheels";
import ModelIntegrationExtrusion from "/components/three-models/husky/IntegrationExtrusion";
import ModelIntegrationPlate from "/components/three-models/husky/IntegrationPlate";
import ModelIntegrationRiser1 from "/components/three-models/husky/IntegrationRiser-1";
import ModelIntegrationRiser2 from "/components/three-models/husky/IntegrationRiser-2";
import ModelIntegrationRiser3 from "/components/three-models/husky/IntegrationRiser-3";
import ModelIntegrationTower1 from "/components/three-models/husky/IntegrationTower-1";
import ModelIntegrationTower2 from "/components/three-models/husky/IntegrationTower-2";
import ModelIntegrationTower3 from "/components/three-models/husky/IntegrationTower-3";
import ModelWeatherproofing from "/components/three-models/husky/WeatherProofing";
import AttachmentsRenderer from "/components/three-models/attachments/AttachmentsRenderer";

// json data imports - common for all robot platforms
import selectYesNoData from "/public/json/DataYesNo";
import computerDataFile from "/public/json/DataComputer";

// json data imports - robot platform specific
import dataFile from "/public/json/DataHusky";

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
const allowIntegrationRiser = dataFile.integrationRiser.bool;
const integrationRiserData = dataFile.integrationRiser.value;
const allowIntegrationTower = dataFile.integrationTower.bool;
const integrationTowerData = dataFile.integrationTower.value;
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
  const [integrationRiserSelectionState, changeIntegrationRiserSelectionState] = useState(integrationRiserData[0]);
  const [integrationTowerOneSelectionState, changeIntegrationTowerOneSelectionState] = useState(integrationRiserData[0]);
  const [integrationTowerTwoSelectionState, changeIntegrationTowerTwoSelectionState] = useState(integrationRiserData[0]);
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
  const attachmentSelectionStates = [
    [attachmentOneSelectionState, changeAttachmentOneSelectionState, 0],
    [attachmentTwoSelectionState, changeAttachmentTwoSelectionState, 1],
    [attachmentThreeSelectionState, changeAttachmentThreeSelectionState, 2],
    [attachmentFourSelectionState, changeAttachmentFourSelectionState, 3],
    [attachmentFiveSelectionState, changeAttachmentFiveSelectionState, 4],
    [attachmentSixSelectionState, changeAttachmentSixSelectionState, 5],
    [attachmentSevenSelectionState, changeAttachmentSevenSelectionState, 6],
    [attachmentEightSelectionState, changeAttachmentEightSelectionState, 7],
    [attachmentNineSelectionState, changeAttachmentNineSelectionState, 8],
    [attachmentTenSelectionState, changeAttachmentTenSelectionState, 9],
    [attachmentElevenSelectionState, changeAttachmentElevenSelectionState, 10],
    [attachmentTwelveSelectionState, changeAttachmentTwelveSelectionState, 11],
    [attachmentThirteenSelectionState, changeAttachmentThirteenSelectionState, 12],
    [attachmentFourteenSelectionState, changeAttachmentFourteenSelectionState, 13],
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
      integrationRiserSelectionState,
    ];
    // add attachments to priceLeadStatesArray
    {
      if (kitSelectionState.attachmentPosition[0].bool && integrationRiserSelectionState.attachmentPosition[0].bool) {
        priceLeadStatesArray.push(attachmentOneSelectionState);
      }
      if (kitSelectionState.attachmentPosition[1].bool && integrationRiserSelectionState.attachmentPosition[1].bool) {
        priceLeadStatesArray.push(attachmentTwoSelectionState);
      }
      if (kitSelectionState.attachmentPosition[2].bool && integrationRiserSelectionState.attachmentPosition[2].bool) {
        priceLeadStatesArray.push(attachmentThreeSelectionState);
      }
      if (kitSelectionState.attachmentPosition[3].bool && integrationRiserSelectionState.attachmentPosition[3].bool) {
        priceLeadStatesArray.push(attachmentFourSelectionState);
      }
      if (kitSelectionState.attachmentPosition[4].bool && integrationRiserSelectionState.attachmentPosition[4].bool) {
        priceLeadStatesArray.push(attachmentFiveSelectionState);
      }
      if (kitSelectionState.attachmentPosition[5].bool && integrationRiserSelectionState.attachmentPosition[5].bool) {
        priceLeadStatesArray.push(attachmentSixSelectionState);
      }
      if (kitSelectionState.attachmentPosition[6].bool && integrationRiserSelectionState.attachmentPosition[6].bool) {
        priceLeadStatesArray.push(attachmentSevenSelectionState);
      }
      if (kitSelectionState.attachmentPosition[7].bool && integrationRiserSelectionState.attachmentPosition[7].bool) {
        priceLeadStatesArray.push(attachmentEightSelectionState);
      }
      if (kitSelectionState.attachmentPosition[8].bool && integrationRiserSelectionState.attachmentPosition[8].bool) {
        priceLeadStatesArray.push(attachmentNineSelectionState);
      }
      if (kitSelectionState.attachmentPosition[9].bool && integrationRiserSelectionState.attachmentPosition[9].bool) {
        priceLeadStatesArray.push(attachmentTenSelectionState);
      }
      if (kitSelectionState.attachmentPosition[10].bool && integrationRiserSelectionState.attachmentPosition[10].bool) {
        priceLeadStatesArray.push(attachmentElevenSelectionState);
      }
      if (kitSelectionState.attachmentPosition[11].bool && integrationRiserSelectionState.attachmentPosition[11].bool) {
        priceLeadStatesArray.push(attachmentTwelveSelectionState);
      }
      if (kitSelectionState.attachmentPosition[12].bool && integrationRiserSelectionState.attachmentPosition[12].bool) {
        priceLeadStatesArray.push(attachmentThirteenSelectionState);
      }
      if (kitSelectionState.attachmentPosition[13].bool && integrationRiserSelectionState.attachmentPosition[13].bool) {
        priceLeadStatesArray.push(attachmentFourteenSelectionState);
      }
    }
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
      kitSelectionState.attachmentPosition[indexOfElementFromArray].bool
    ) {
      const tempKeyName = "selectAttachmentsRendererKey" + String(indexOfElementFromArray);
      return (
        <SelectFormatted
          displayName={"Attachment " + String(indexOfElementFromArray + 1)}
          options={attachmentData}
          defaultValue={indexOfElementFromArray}
          currentState={attachmentSelectionStates[indexOfElementFromArray][0]}
          changeStateFunction={attachmentSelectionStates[indexOfElementFromArray][1]}
          key={tempKeyName}
        />
      );
    }
  }
  function SelectAttachmentsRenderer() {
    let selectFieldsArray = [];
    // using forEach rather than a for loop, so I can return a DOM component for each element of the array
    attachmentSelectionStates.forEach((elementFromArray) => {
      selectFieldsArray.push(SelectAttachmentsRendererHelper(elementFromArray[2]));
    });
    return <>{selectFieldsArray}</>;
  }

  // Attachment Models rendering functions
  function ModelAttachmentsRendererHelper(elementFromArray) {
    const tempKeyName = "modelAttachmentsRendererKey" + String(elementFromArray[2]);
    if (
      integrationPlateSelectionState.attachmentPosition[elementFromArray[2]].bool &&
      kitSelectionState.attachmentPosition[elementFromArray[2]].bool &&
      integrationRiserSelectionState.attachmentPosition[elementFromArray[2]].bool
    ) {
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
    const tempKeyName = "modelKitsRendererKey" + String(elementFromArray[2]);
    if (!kitSelectionState.attachmentPosition[elementFromArray[2]].bool) {
      return (
        <AttachmentsRenderer
          attachmentSelectionState={attachmentData[kitSelectionState.attachmentPosition[elementFromArray[2]].attachmentItem]}
          attachmentPosition={kitSelectionState.attachmentPosition[elementFromArray[2]].position}
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
                  {/*  Select, Kits  */}
                  <SelectFormatted
                    displayName={"Kits"}
                    options={kitData}
                    defaultValue={0}
                    currentState={kitSelectionState}
                    changeStateFunction={changeKitSelectionState}
                  />
                </ul>
              </div>

              <div>
                <ul className="flex flex-col w-full text-black">
                  {/*  Select, Integration Plate  */}
                  {allowIntegrationPlate && (
                    <SelectFormatted
                      displayName={"Top Plate"}
                      options={integrationPlateData}
                      defaultValue={0}
                      currentState={integrationPlateSelectionState}
                      changeStateFunction={changeIntegrationPlateSelectionState}
                    />
                  )}

                  {/*  Select, Integration Riser  */}
                  {integrationPlateSelectionState.bool && allowIntegrationRiser && !(integrationTowerOneSelectionState.bool) && (
                    <SelectFormatted
                      displayName={"Riser"}
                      options={integrationRiserData}
                      defaultValue={0}
                      currentState={integrationRiserSelectionState}
                      changeStateFunction={changeIntegrationRiserSelectionState}
                    />
                  )}

                  {/*  Select, Integration Tower  */}
                  {integrationPlateSelectionState.bool && allowIntegrationTower  && !(integrationRiserSelectionState.bool) && (
                    <SelectFormatted
                      displayName={"Tower"}
                      options={integrationTowerData}
                      defaultValue={0}
                      currentState={integrationTowerOneSelectionState}
                      changeStateFunction={changeIntegrationTowerOneSelectionState}
                    />
                  )}

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
              <PerspectiveCamera makeDefault fov={65} position={[600, -900, 600]} />

              {/*  Three.js models  */}
              <Suspense fallback={null}>
                <ModelRobotChassisBase />
                <ModelRobotChassisPanels modelColour={colourSelectionState.rgb} />
                <ModelRobotChassisWheels />
                {integrationPlateSelectionState.bool && <ModelIntegrationPlate />}
                {integrationPlateSelectionState.bool && integrationRiserSelectionState.bool && <ModelIntegrationRiser1 />}
                {integrationPlateSelectionState.bool && integrationTowerOneSelectionState.bool && <ModelIntegrationTower1 />}
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
              kitState={kitSelectionState}
              statesArray={makePriceLeadStatesArray()}
              integrationRiserState={integrationRiserSelectionState}
              attachmentStates={attachmentSelectionStates}
              screenshotData={screenshotDataState}
            />
          </div>
        </span>
      </footer>
    </div>
  );
}

export default Page;
