// model components
import ModelAttachmentVelodyne from "./ModelAttachmentVelodyne";
import ModelAttachmentHokuyo from "./ModelAttachmentHokuyo";
import ModelAttachmentMicrostrain15 from "./ModelAttachmentMicrostrain15";
import ModelAttachmentRealsenseD435 from "./ModelAttachmentRealsenseD435";
import ModelAttachmentZed2 from "./ModelAttachmentZed2";

import ModelAttachmentBracketHorizontal from "./ModelAttachmentBracketHorizontal";
import ModelAttachmentBracketVertical from "./ModelAttachmentBracketVertical";

const offsetNull = {"xyz": [0, 0, 0], "rpy":[0, 0, 0]};
const offsetBracketHorizontal = {"xyz": [0, 10.125, 0], "rpy":[0, 0, 0]};
const offsetBracketVertical = {"xyz": [51.8, 96.925, 0], "rpy":[0, 0, (Math.PI/2)]};

function AttachmentsModels(props) {
  const dataFile = props.dataFile;
  const attachmentPositionData = dataFile.attachmentPositions;
  const attachmentPosition = attachmentPositionData[props.modelAttachmentPosition];
  var attachmentModels = {
    none: <></>,
    velodyne: (
      <group key="null">
        <ModelAttachmentBracketHorizontal key="bracket_riser_horizontal" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetNull}/>
        <ModelAttachmentVelodyne key="velodyne" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetBracketHorizontal}/>
      </group>
    ),
    velodyne_vertical: (
      <group key="null">
        <ModelAttachmentBracketVertical key="bracket_riser_horizontal" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetNull}/>
        <ModelAttachmentVelodyne key="velodyne" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetBracketVertical}/>
      </group>
    ),
    hokuyo: (
      <group key="null">
        <ModelAttachmentBracketHorizontal key="bracket_riser_horizontal" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetNull}/>
        <ModelAttachmentHokuyo key="hokuyo" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetBracketHorizontal}/>
      </group>
    ),
    hokuyo_vertical: (
      <group key="null">
        <ModelAttachmentBracketVertical key="bracket_riser_horizontal" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetNull}/>
        <ModelAttachmentHokuyo key="hokuyo" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetBracketVertical}/>
      </group>
    ),
    microstrain: (
      <group key="null">
        <ModelAttachmentBracketHorizontal key="bracket_riser_horizontal" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetNull}/>
        <ModelAttachmentMicrostrain15 key="microstrain" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetBracketHorizontal}/>
      </group>
    ),
    realsense_d435: (
      <group key="null">
        <ModelAttachmentBracketHorizontal key="bracket_riser_horizontal" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetNull}/>
        <ModelAttachmentRealsenseD435 key="realsense_d435" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetBracketHorizontal}/>
      </group>
    ),
    zed2: (
      <group key="null">
        <ModelAttachmentBracketHorizontal key="bracket_riser_horizontal" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetNull}/>
        <ModelAttachmentZed2 key="zed2" dataOne={attachmentPosition} dataTwo={props.modelAttachmentPositionShiftOne} dataThree={offsetBracketHorizontal}/>
      </group>
    )
  };

  return attachmentModels[props.userSelectedData.value];
}

function AttachmentRenderer(props) {
  const options = props.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i] == props.attachmentSelectionState) {
      return (
        <AttachmentsModels
          modelAttachmentId={i}
          modelAttachmentPosition={props.attachmentPosition}
          modelAttachmentPositionShiftOne={props.modelAttachmentPositionShiftOne}
          userSelectedData={props.attachmentSelectionState}
          dataFile={props.dataFile}
        />
      );
    }
  }
  return null;
}

export default AttachmentRenderer;
