import React from "react";

navigator.permissions
  .query({ name: "gyroscope" as PermissionName })
  .then((result) => {
    console.log("Got perms for gyroscope " + result.state);
  })
  .catch(() => {
    console.log("Gotn't perms for gyroscope");
  });

const isGyroscopeAvailable = () => typeof (window as any).Gyroscope === "function";
function _useGyroscopeNotAvailable() {
  return [false, 0, 0, 0] as const;
}

function _useGyroscopeAvailable() {
  const GyroscopeClass = (window as any).Gyroscope;
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [z, setZ] = React.useState(0);
  const gyroscopeRef = React.useRef<Gyroscope>(new GyroscopeClass({ frequency: 5 }));

  React.useEffect(() => {
    console.log("Registered");
    gyroscopeRef.current.addEventListener("reading", () => {
      console.log("Reading!");
      setX(gyroscopeRef.current.x ?? 0);
      setY(gyroscopeRef.current.y ?? 0);
      setZ(gyroscopeRef.current.z ?? 0);
    });
    gyroscopeRef.current.start();
  }, [gyroscopeRef, setX, setY, setZ]);

  return [true, x, y, z] as const;
}

const useGyroscope = isGyroscopeAvailable() ? _useGyroscopeAvailable : _useGyroscopeNotAvailable;

export { useGyroscope };
