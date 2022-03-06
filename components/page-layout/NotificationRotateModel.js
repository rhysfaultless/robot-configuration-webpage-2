import { React, useState } from "react";

function RotateModelNotification() {
  return (
    <div className="flex absolute top-0 right-0 rounded p-2 m-3 z-50 items-center bg-yellow-400 animate-fade">
      <p>rotate the model</p>
    </div>
  );
}

function ShowRotateModelNotification(props) {
  const [showRotateModelNotificationState, setShowRotateModelNotificationState] = useState(true);
  const TimerToRemoveNotification = setTimeout(() => {
    setShowRotateModelNotificationState(false);
  }, 5000);
  // note:
  // this timer will remove the element after 5000 ms.
  // you will need to update the repository's tailwind.config.js file to change the transition-opacity timer ( also 5000 ms )

  if (showRotateModelNotificationState) {
    return RotateModelNotification();
  } else {
    return null;
  }
}

export default ShowRotateModelNotification;