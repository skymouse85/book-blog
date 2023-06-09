import { parseISO,  format } from "date-fns";

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTaime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}