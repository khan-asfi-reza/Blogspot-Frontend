import {Navigation} from "@SharedComponents/Navigation";
import {Heading} from "@UI/Typography";
import {useRouter} from "next/router";
import {Carousel} from "react-blaze-carousel";

function Friends({props}) {
    const router = useRouter();
    return (
        <>
            <Navigation/>
            <div className={"h-screen grid place-items-center"}>
                <Heading>
                    {props}
                </Heading>
                <Carousel>
                    <div className={"p-20 bg-rose-500 text-white"}>
                        <h1 className={"text-3xl font-bold"}>Box 1</h1>
                    </div>
                    <div className={"p-20 bg-emerald-500 text-white"}>
                        <h1 className={"text-3xl font-bold"}>Box 2</h1>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    let props = "Text"
    return {
        props: {props: props}, // will be passed to the page component as props
    }
}

export default Friends;