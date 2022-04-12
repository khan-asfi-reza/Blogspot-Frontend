import {Navigation} from "@SharedComponents/Navigation";
import {Heading} from "@UI/Typography";
import {useRouter} from "next/router";

function Friends({props}) {
    const router = useRouter();
    return (
        <>
            <Navigation/>
            <div className={"h-screen grid place-items-center"}>
                <Heading>
                    {props}
                </Heading>
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