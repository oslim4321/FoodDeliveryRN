import { router, Slot } from "expo-router";
import "../global.css";
import { useEffect } from "react";

export default function RootLayout() {
  const user = false;

  useEffect(() => {
    if (!user) {
      router.replace("/(pages)/(onboarding)");
    }
  }, []);
  return <Slot />;
}
