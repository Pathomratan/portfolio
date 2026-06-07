import { useEffect, useState } from "react";

function getBrowserName() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Edg/")) return "Edge";
  if (userAgent.includes("OPR/") || userAgent.includes("Opera")) return "Opera";
  if (userAgent.includes("Firefox/")) return "Firefox";
  if (userAgent.includes("Chrome/") || userAgent.includes("CriOS/")) return "Chrome";
  if (userAgent.includes("Safari/")) return "Safari";

  return "Unknown";
}

function getOsName() {
  const platform = navigator.userAgentData?.platform || navigator.platform || "";
  const userAgent = navigator.userAgent;

  if (/Windows/i.test(platform) || /Windows/i.test(userAgent)) return "Windows";
  if (/macOS|Mac/i.test(platform) || /Macintosh/i.test(userAgent)) return "macOS";
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
  if (/Android/i.test(userAgent)) return "Android";
  if (/Linux/i.test(platform) || /Linux/i.test(userAgent)) return "Linux";

  return "Unknown";
}

export default function StatusBar() {
  const [location, setLocation] = useState({
    longitude: "Loading",
    latitude: "Loading"
  });
  const [device, setDevice] = useState({
    browser: "Unknown",
    os: "Unknown"
  });

  useEffect(() => {
    setDevice({
      browser: getBrowserName(),
      os: getOsName()
    });

    if (!navigator.geolocation) {
      setLocation({
        longitude: "Unavailable",
        latitude: "Unavailable"
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          longitude: position.coords.longitude.toFixed(4),
          latitude: position.coords.latitude.toFixed(4)
        });
      },
      () => {
        setLocation({
          longitude: "Permission needed",
          latitude: "Permission needed"
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  }, []);

  return (
    <header
      className="absolute left-8 right-8 top-11 z-30 hidden justify-between gap-6 text-xs leading-relaxed text-[#f1f2c4] md:flex lg:left-[68px] lg:right-[68px] lg:top-[84px] lg:text-sm"
      aria-label="Portfolio status details"
    >
      <div>
        <p>Longitude - {location.longitude}</p>
        <p>Latitude - {location.latitude}</p>
      </div>
      <div className="text-right">
        <p>{device.browser} - Browser</p>
        <p>{device.os} - OS</p>
      </div>
    </header>
  );
}
