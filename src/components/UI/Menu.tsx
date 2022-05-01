import {Fragment} from "react";
import {Menu as HeadlessMenu, Transition} from "@headlessui/react";

export const Menu = ({buttonClassName, buttonText, children}:
                         {
                             buttonClassName: string,
                             buttonText: string | JSX.Element,
                             children: JSX.Element[] | JSX.Element
                         }) => {
    return (
        <div className="">
            <HeadlessMenu as="div" className="relative inline-block text-left">
                {({open}) => (
                    <>
                        <div>
                            <HeadlessMenu.Button className={buttonClassName}>
                                {buttonText}
                            </HeadlessMenu.Button>
                        </div>
                        {
                            open &&
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <HeadlessMenu.Items
                                    className="absolute right-0 z-30 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {children}
                                </HeadlessMenu.Items>
                            </Transition>
                        }
                    </>
                )}
            </HeadlessMenu>
        </div>
    )
}

export const MenuItem = HeadlessMenu.Item;
