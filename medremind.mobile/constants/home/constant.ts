import { Colors } from "../Colors";

export const QUICK_ACTIONS = [
    {
      icon: "add-circle-outline" as const,
      label: "Add\nMedication",
      route: "/medications/add" as const,
      color: Colors.light.qcGreen,
      gradient: ["#4CAF50", "#2E7D32"] as [string, string],
    },
    {
      icon: "calendar-outline" as const,
      label: "Calendar\nView",
      route: "/calendar" as const,
      color: Colors.light.qcBlue,
      gradient: ["#2196F3", "#1976D2"] as [string, string],
    },
    {
      icon: "time-outline" as const,
      label: "History\nLog",
      route: "/history" as const,
      color: Colors.light.qcRed,
      gradient: ["#E91E63", "#C2185B"] as [string, string],
    },
    {
      icon: "medical-outline" as const,
      label: "Refill\nTracker",
      route: "/refills" as const,
      color: Colors.light.qcOrange,
      gradient: ["#FF5722", "#E64A19"] as [string, string],
    },
  ];