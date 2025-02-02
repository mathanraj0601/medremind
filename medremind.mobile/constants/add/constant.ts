export const FREQUENCIES = [
    {
      id: "1",
      label: "Once daily",
      icon: "sunny-outline" as const,
      times: ["09:00"],
    },
    {
      id: "2",
      label: "Twice daily",
      icon: "sync-outline" as const,
      times: ["09:00", "21:00"],
    },
    {
      id: "3",
      label: "Three times daily",
      icon: "time-outline" as const,
      times: ["09:00", "15:00", "21:00"],
    },
    {
      id: "4",
      label: "Four times daily",
      icon: "repeat-outline" as const,
      times: ["09:00", "13:00", "17:00", "21:00"],
    },
    { id: "5", label: "As needed", icon: "calendar-outline" as const, times: [] },
  ];
  
 export const DURATIONS = [
    { id: "1", label: "7 days", value: 7 },
    { id: "2", label: "14 days", value: 14 },
    { id: "3", label: "30 days", value: 30 },
    { id: "4", label: "90 days", value: 90 },
    { id: "5", label: "Ongoing", value: -1 },
  ];
  