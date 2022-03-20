// model components
import ModelIntegrationTower_1 from "./IntegrationTower-1";
import ModelIntegrationTower_2 from "./IntegrationTower-2";
import ModelIntegrationTower_3 from "./IntegrationTower-3";

function Models(props) {
  var Models = {
    none: <></>,
    tower_height_100: <ModelIntegrationTower_1 key="tower_height_100" modelPosition={props.position.xyz}/>,
    tower_height_200: <ModelIntegrationTower_2 key="tower_height_200" modelPosition={props.position.xyz}/>,
    tower_height_300: <ModelIntegrationTower_3 key="tower_height_300" modelPosition={props.position.xyz}/>
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
          position={props.position}
        />
      );
    }
  }
  return null;
}

export default ModelsRenderer;
