export default function dateToString (date: Date | string | number): string {
    if (typeof date === "string") {
        let parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime()))
            parsedDate = new Date(parseInt(date));
        if (isNaN(parsedDate.getTime()))
            return "";
        date = parsedDate;
    }
    return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "UTC",
        timeZoneName: "short",
    }).format(date).replace(",", "");
}