interface CircularProgressProps { 
    progress : number,
    completedDose : number,
    totalDose : number
}

interface QuickActionProps {
    icon: any ,
    label: string,
    route: any,
    color: string,
    gradient: [string, string],
}

interface MedicationProps {
    taken: boolean ,
    name: string,
    time: any,
    dose: string,
    handletaken : (id:string) => void,
    color:string
}