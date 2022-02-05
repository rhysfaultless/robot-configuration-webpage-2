// models
import ModelAttachmentVelodyne from "./ModelAttachmentVelodyne";
import ModelAttachmentPlate50 from "./ModelAttachmentPlate50";
import ModelAttachmentPlate100 from "./ModelAttachmentPlate100";
import ModelAttachmentHokuyo from "./ModelAttachmentHokuyo";
import ModelAttachmentMicrostrain15 from "./ModelAttachmentMicrostrain15";

// position data
import attachmentPositionData from "/public/json/AttachmentPositionDingoOmni";
import attachmentPositionHeights from "/public/json/AttachmentPositionHeights";

export default function Model(props) {
  const attachmentPosition = attachmentPositionData[props.modelAttachmentPosition];
  const attachmentModels = [
    <></>,
    <ModelAttachmentVelodyne key="null" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]}/>, 
    <group key="null">
      <ModelAttachmentPlate50 key="null" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[1]}/>,
    </group>,
    <group key="null">
      <ModelAttachmentPlate100 key="null" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]} />
      <ModelAttachmentVelodyne key="null" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[2]}/>,
    </group>,
    <ModelAttachmentHokuyo key="null" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]} />,
    <ModelAttachmentMicrostrain15 key="null" dataOne={attachmentPosition} dataTwo={attachmentPositionHeights[0]} />
  ];

  return (
    attachmentModels[props.modelAttachmentId]
  );
}
