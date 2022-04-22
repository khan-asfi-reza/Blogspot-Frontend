import moment from "moment";
import {useCallback, useEffect, useState} from "react";

export default function Moment({date}: { date: Date }) {

    const [dateTime, setDateTime] = useState<string | Date>("")

    const timePassed = useCallback((time) => {
        const now = new Date();
        const providedDate = new Date(date);
        const diff = Math.abs(providedDate.getTime() - now.getTime()) / (60 * 60 * 1000);
        return diff > time;
    }, [date])


    const updateDate = useCallback(() => {
        if (timePassed(24)) {
            setDateTime(moment(date).format("MMMM Do YYYY"))
        } else {
            setDateTime(moment(date).fromNow())
        }
    }, [date, timePassed])

    useEffect(() => {
        updateDate()
    }, [updateDate])

    useEffect(() => {
        let timeOut;
        if (!timePassed(24)) {
            timeOut = setTimeout(() => {
                updateDate();
            }, 1000 * 60)
        } else if (!timePassed(1)) {
            timeOut = setTimeout(() => {
                updateDate();
            }, 1000 * 60 * 60)
        }
        return () => {
            clearTimeout(timeOut)
        }
    }, [timePassed, updateDate, dateTime])


    return (
        <>
            {dateTime}
        </>
    )
}