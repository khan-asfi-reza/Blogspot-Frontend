import {Navigation} from "@SharedComponents/Navigation";
import Sidebar from "@SharedComponents/Sidebar";
import classNames from "classnames";
import Head from "next/head";

export default function PageLayout({children, title}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className={"bg-body relative"}>
                <Navigation.Header/>
                <section className={"sm:container mx-auto grid grid-cols-12 sm:pt-16 pt-14 "}>
                    <Navigation.Navbar/>
                    <section className={classNames("lg:col-span-7 bg-body sm:col-span-11 col-span-12",
                        "sm:order-2 order-1 container py-4 lg:px-12 sm:px-8 px-4 mx-auto lg:border-r-2 border-gray-200")}>
                        {children}
                    </section>
                    <Sidebar/>
                </section>
            </main>
        </>
    )
}