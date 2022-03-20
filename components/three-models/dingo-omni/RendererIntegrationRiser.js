// model components
import ModelIntegrationRiser_1 from "./IntegrationRiser-1";
import ModelIntegrationRiser_2 from "./IntegrationRiser-2";
import ModelIntegrationRiser_3 from "./IntegrationRiser-3";

function Models(props) {
  var Models = {
    none: <></>,
    height_one: <ModelIntegrationRiser_1 key="height_one" />,
    height_two: <ModelIntegrationRiser_2 key="height_two" />,
    height_three: <ModelIntegrationRiser_3 key="height_three" />
  };

  return Models[props.userSelectedData.value];
}

function ModelsRenderer(props) {
  const options = props.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i] == props.selectionState) {
      return (
        <Models
          userSelectedData={props.selectionState}
        />
      );
    }
  }
  return null;
}

export default ModelsRenderer;
