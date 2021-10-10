import React from "react";
import { Quaternion } from "three"; // ya, remove in future

Promise.all([
  navigator.permissions.query({ name: "gyroscope" as PermissionName }),
  navigator.permissions.query({ name: "magnetometer" as PermissionName }),
  navigator.permissions.query({ name: "accelerometer" as PermissionName })
])
  .then((results) => {
    console.log("Got perms " + results.flatMap((x) => x.state).join(", "));
  })
  .catch(() => {
    console.log("Catch perms");
  });

const isGyroscopeAvailable = () => typeof (window as any).Gyroscope === "function";
function _useGyroscopeNotAvailable() {
  return [false, 0] as const;
}

const portraitReading = [Math.SQRT1_2, 0, 0, Math.SQRT1_2];
// const landscapeLeftReading = [0.5, 0.5, 0.5, 0.5];
const landscapeRightReading = [-0.5, -0.5, 0.5, -0.5];
const relativeQuaternion = new Quaternion(...landscapeRightReading);
function _useGyroscopeAvailable() {
  const SensorClass = (window as any).AbsoluteOrientationSensor;
  const [x, setX] = React.useState(0);
  const sensorRef = React.useRef<AbsoluteOrientationSensor>(
    new SensorClass({ frequency: 5, referenceFrame: "screen" })
  );

  React.useEffect(() => {
    sensorRef.current.addEventListener("reading", () => {
      const _reading = sensorRef.current.quaternion ?? portraitReading;
      console.log(_reading);
      const quaternion = new Quaternion(..._reading);
      const angle = quaternion.angleTo(relativeQuaternion) - Math.PI / 2;
      const angleDeg = (angle * 180) / Math.PI;
      console.log(angleDeg);
      setX(angleDeg);
    });
    sensorRef.current.start();
  }, [sensorRef, setX]);

  return [true, x] as const;
}

const useGyroscope = isGyroscopeAvailable() ? _useGyroscopeAvailable : _useGyroscopeNotAvailable;

export { useGyroscope };
