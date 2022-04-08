// Auth Side Slide
import Image, {StaticImageData} from "next/image";
import {Col, Div, FlexRow} from "../../UI/Container";
import {range} from "../../../utils";
import classNames from "classnames";
import {SectionHeading, SmallText} from "../../UI/Typography";
import {useEffect, useState} from "react";
import {AUTH_FORM_SIDE_SECTION_CONTENTS} from "../../../content";
import {AnimatePresence} from "framer-motion";


export function AuthSideSlide({image, heading, text, length}:
                                  {
                                      image: StaticImageData,
                                      heading: string,
                                      text: string,
                                      length: number
                                  }) {
    const variants = {
        exit: {x: 1000, opacity: 0},
        initial: {x: -1000, opacity: 0},
        animate: {x: 0, opacity: 1},
        transition: {duration: 0.5}
    }

    return (
        <Div {...variants}
             className={"w-full grid place-items-center overflow-hidden flex-full"}>
            <Div className={"md:w-full mx-auto w-full md:h-[30rem] sm:h-72 h-72 relative"}>
                <Image alt={"LoginImage"} src={image} objectFit='contain' layout={"fill"}/>
            </Div>
            <Div className={" lg:grid lg:place-items-center"}>
                <FlexRow className={"py-2 items-center justify-between my-2"}>
                    {
                        range(length).map((e) => (
                            <Div key={e}
                                 className={classNames("h-2 w-2 mx-4 bg-white rounded-full",)}>
                            </Div>
                        ))
                    }
                </FlexRow>
                <Div>
                    <SectionHeading className={"text-center text-white font-medium md:text-4xl"}>
                        {heading}
                    </SectionHeading>
                    <SmallText className={"text-gray-100 text-center font-base"}>
                        {text}
                    </SmallText>
                </Div>
            </Div>
        </Div>
    )
}

// Auth Form Side bar Image and Text
export function AuthFormSideBar() {
    const [state, setState] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (state >= 0 && state < AUTH_FORM_SIDE_SECTION_CONTENTS.length - 1) {
                setState(state + 1);
            } else {
                setState(state - 1);
            }
        }, 6000)
    }, [state])
    return (
        <Col
            className={classNames("md:static md:grid hidden relative md:h-auto bg-theme md:h-full sm:h-96 h-96 w-full md:rounded-none",
                "rounded-t-3xl  place-items-center z-20 p-2")}>
            <FlexRow className={"w-full overflow-hidden"}>
                <AnimatePresence exitBeforeEnter={true}>
                    {
                        AUTH_FORM_SIDE_SECTION_CONTENTS.map((each, key) => (
                            key === state &&
                            <AuthSideSlide heading={each.title}
                                           key={key}
                                           length={AUTH_FORM_SIDE_SECTION_CONTENTS.length}
                                           text={each.text}
                                           image={each.image}
                            />
                        ))
                    }
                </AnimatePresence>
            </FlexRow>
        </Col>
    )
}