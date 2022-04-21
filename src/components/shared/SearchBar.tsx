import classNames from "classnames";
import {SecondaryInput} from "@UI/Form";
import {IoSearchOutline} from "react-icons/io5";
import {Div} from "@UI/Layout";
import {FocusEvent, useState} from "react";

export default function SearchBar() {

    const [isSearchActive, setIsSearchActive] = useState(false);

    const onFocus = () => {
        setIsSearchActive(true);
    }
    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setIsSearchActive(false)
        }
    }

    return (
        <Div
            className={classNames("lg:w-[80%] md:w-full transition-all", isSearchActive && "lg:w-[85%]")}>
            <SecondaryInput containerProps={{className: "w-full"}}
                            inputProps={{onFocus: onFocus, onBlur: onBlur}}
                            icon={
                                <IoSearchOutline/>
                            }
                            label={"Search content"}/>
        </Div>
    )
}