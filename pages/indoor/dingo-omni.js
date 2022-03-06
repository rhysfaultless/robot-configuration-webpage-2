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
import ConfiguredCamera from "/components/three-settings/ConfiguredCamera";
import ModelBanana from "/components/three-models/ModelBanana";

// custom component imports - three.js - robot specific
import ModelRobotChassisBase from "/components/three-models/ModelRobotChassisBaseDingoOmni";
import ModelRobotChassisPanels from "/components/three-models/ModelRobotChassisPanelsDingoOmni";
import ModelRobotChassisWheels from "/components/three-models/ModelRobotChassisWheelsDingoOmni";
import ModelRobotChassisTower from "/components/three-models/ModelRobotChassisTowerDingoOmni";
import AttachmentsRenderer from "/components/three-models/AttachmentsRenderer";

// json data imports - common for all robot platforms
import selectYesNoData from "/public/json/DataYesNo";
import computerDataFile from "/public/json/DataComputer";

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
const towerData = dataFile.tower;
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
    const [towerSelectionState, changeTowerSelectionState] = useState(towerData[0]);
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
    let priceLeadStatesArray = [robotPlatformData, colourSelectionState, batterySelectionState, computerSelectionState, kitSelectionState, towerSelectionState];
    // add attachments to priceLeadStatesArray
    {
      if (kitSelectionState.attachmentPosition[0].bool && towerSelectionState.attachmentPosition[0].bool) {
        priceLeadStatesArray.push(attachmentOneSelectionState);
      }
      if (kitSelectionState.attachmentPosition[1].bool && towerSelectionState.attachmentPosition[1].bool) {
        priceLeadStatesArray.push(attachmentTwoSelectionState);
      }
      if (kitSelectionState.attachmentPosition[2].bool && towerSelectionState.attachmentPosition[2].bool) {
        priceLeadStatesArray.push(attachmentThreeSelectionState);
      }
      if (kitSelectionState.attachmentPosition[3].bool && towerSelectionState.attachmentPosition[3].bool) {
        priceLeadStatesArray.push(attachmentFourSelectionState);
      }
      if (kitSelectionState.attachmentPosition[4].bool && towerSelectionState.attachmentPosition[4].bool) {
        priceLeadStatesArray.push(attachmentFiveSelectionState);
      }
      if (kitSelectionState.attachmentPosition[5].bool && towerSelectionState.attachmentPosition[5].bool) {
        priceLeadStatesArray.push(attachmentSixSelectionState);
      }
      if (kitSelectionState.attachmentPosition[6].bool && towerSelectionState.attachmentPosition[6].bool) {
        priceLeadStatesArray.push(attachmentSevenSelectionState);
      }
      if (kitSelectionState.attachmentPosition[7].bool && towerSelectionState.attachmentPosition[7].bool) {
        priceLeadStatesArray.push(attachmentEightSelectionState);
      }
      if (kitSelectionState.attachmentPosition[8].bool && towerSelectionState.attachmentPosition[8].bool) {
        priceLeadStatesArray.push(attachmentNineSelectionState);
      }
      if (kitSelectionState.attachmentPosition[9].bool && towerSelectionState.attachmentPosition[9].bool) {
        priceLeadStatesArray.push(attachmentTenSelectionState);
      }
      if (kitSelectionState.attachmentPosition[10].bool && towerSelectionState.attachmentPosition[10].bool) {
        priceLeadStatesArray.push(attachmentElevenSelectionState);
      }
      if (kitSelectionState.attachmentPosition[11].bool && towerSelectionState.attachmentPosition[11].bool) {
        priceLeadStatesArray.push(attachmentTwelveSelectionState);
      }
      if (kitSelectionState.attachmentPosition[12].bool && towerSelectionState.attachmentPosition[12].bool) {
        priceLeadStatesArray.push(attachmentThirteenSelectionState);
      }
      if (kitSelectionState.attachmentPosition[13].bool && towerSelectionState.attachmentPosition[13].bool) {
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
  {
    function SelectAttachmentsRendererHelper(indexOfElementFromArray) {
      if (towerSelectionState.attachmentPosition[indexOfElementFromArray].bool && kitSelectionState.attachmentPosition[indexOfElementFromArray].bool) {
        return (
          <SelectFormatted
            displayName={"Attachment " + String(indexOfElementFromArray + 1)}
            options={attachmentData}
            defaultValue={indexOfElementFromArray}
            currentState={attachmentSelectionStates[indexOfElementFromArray][0]}
            changeStateFunction={attachmentSelectionStates[indexOfElementFromArray][1]}
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
  }

  // Attachment Models rendering functions
  {
    function ModelAttachmentsRendererHelper(elementFromArray) {
      if (kitSelectionState.attachmentPosition[elementFromArray[2]].bool && towerSelectionState.attachmentPosition[elementFromArray[2]].bool) {
        return (
          <AttachmentsRenderer 
            attachmentSelectionState={elementFromArray[0]} 
            attachmentPosition={elementFromArray[2]} 
            options={attachmentData} 
            dataFile={dataFile} 
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
  }

  // Kit Models rendering functions
  {
    function ModelKitsRendererHelper(elementFromArray) {
      if (!kitSelectionState.attachmentPosition[elementFromArray[2]].bool) {
        return (
          <AttachmentsRenderer 
            attachmentSelectionState={attachmentData[kitSelectionState.attachmentPosition[elementFromArray[2]].attachmentItem]}
            attachmentPosition={kitSelectionState.attachmentPosition[elementFromArray[2]].position}
            options={attachmentData}
            dataFile={dataFile}
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
                  {/*  Select, Tower  */}
                  <SelectFormatted
                    displayName={"Attachment Tower"}
                    options={towerData}
                    defaultValue={0}
                    currentState={towerSelectionState}
                    changeStateFunction={changeTowerSelectionState}
                  />

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
          </div>
        </aside>
        <main className="w-2/3 fixed h-screen right-0">
          <div className="w-full h-full z-0">
            <Canvas id="divToPrint" gl={{ preserveDrawingBuffer: true }}>
              <ambientLight intensity={0.7} />
              <spotLight position={[10000, 3000, 1000]} angle={0.9} penumbra={1} intensity={0.6} castShadow shadow-mapSize={[5000, 5000]} />
              <ConfiguredOrbitControls />
              <ConfiguredCamera />

              {/*  Three.js models  */}
              <Suspense fallback={null}>
                <ModelRobotChassisBase />
                <ModelRobotChassisPanels modelColour={colourSelectionState.rgb} />
                <ModelRobotChassisWheels />
                <ModelKitsRenderer/>
                {towerSelectionState.bool && <ModelRobotChassisTower />}
                <ModelAttachmentsRenderer />
                {bananaSelectionState.bool && <ModelBanana dataOne={bananaPositionData} />}
              </Suspense>
            </Canvas>
          </div>
          <ShowRotateModelNotification />
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
        </span>
      </footer>
    </div>
  );
}

export default Page;
