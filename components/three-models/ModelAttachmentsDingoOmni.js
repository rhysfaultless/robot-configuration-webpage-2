// models
import ModelAttachmentVelodyne from "./ModelAttachmentVelodyne";
import ModelAttachmentPlate50 from "./ModelAttachmentPlate50";
import ModelAttachmentPlate100 from "./ModelAttachmentPlate100";
import ModelAttachmentHokuyo from "./ModelAttachmentHokuyo";
import ModelAttachmentMicrostrain15 from "./ModelAttachmentMicrostrain15";

// position data
import dataFile from "/public/json/DataDingoOmni";
const attachmentPositionData = dataFile.attachmentPositions;
import attachmentPositionHeights from "/public/json/AttachmentPositionHeights";

export default function Model(props) {
  const attachmentPosition = attachmentPositionData[props.modelAttachmentPosition];
  var attachmentModels = {
    none: <></>,
    velodyne_low: <ModelAttachmentVelodyne key="velodyne_low" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]} />,
    velodyne_mid: (
      <group key="null">
        <ModelAttachmentPlate50 key="velodyne_mid" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]} />
        <ModelAttachmentVelodyne key="null" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[1]} />
      </group>
    ),
    velodyne_high: (
      <group key="null">
        <ModelAttachmentPlate100 key="velodyne_high" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]} />
        <ModelAttachmentVelodyne key="null" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[2]} />
      </group>
    ),
    hokuyo: <ModelAttachmentHokuyo key="hokuyo" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]} />,
    microstrain: <ModelAttachmentMicrostrain15 key="microstrain" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]} />,
  };

  return attachmentModels[props.userSelectedData.value];
}
