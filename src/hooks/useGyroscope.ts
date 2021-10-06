import React from "react";

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

const toDeg = (rad: number) => Math.round((rad * 180) / Math.PI);
const isGyroscopeAvailable = () => typeof (window as any).Gyroscope === "function";
function _useGyroscopeNotAvailable() {
  return [false, 0, 0, 0, 0] as const;
}

function _useGyroscopeAvailable() {
  const SensorClass = (window as any).AbsoluteOrientationSensor;
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [z, setZ] = React.useState(0);
  const [w, setW] = React.useState(0);
  const sensorRef = React.useRef<AbsoluteOrientationSensor>(
    new SensorClass({ frequency: 5, referenceFrame: "screen" })
  );

  React.useEffect(() => {
    sensorRef.current.addEventListener("reading", () => {
      const [x, y, z, w] = sensorRef.current.quaternion ?? [0, 0, 0, 0];
      setX(toDeg(x));
      setY(toDeg(y));
      setZ(toDeg(z));
      setW(toDeg(w));
    });
    sensorRef.current.start();
  }, [sensorRef, setX, setY, setZ, setW]);

  return [true, x, y, z, w] as const;
}

const useGyroscope = isGyroscopeAvailable() ? _useGyroscopeAvailable : _useGyroscopeNotAvailable;

export { useGyroscope };
