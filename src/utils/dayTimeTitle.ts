import DayTime from "@/types/dayTime";

export default (): string => {
    const hours: number = new Date().getHours();

    switch (true) {
        case hours > 5 && hours < 12:
            return `${DayTime.Morning}`;
        case hours > 11 && hours < 17:
            return `${DayTime.Afternoon}`;
        case hours > 17 && hours < 22:
            return `${DayTime.Evening}`;
        default:
            return `${DayTime.Night}`;
    }
};
