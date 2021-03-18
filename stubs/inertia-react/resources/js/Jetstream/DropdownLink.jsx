import React from 'react';
import { InertiaLink } from "@inertiajs/inertia-react";
import { Case, Switch } from "@/Jetstream/Conditional";

export default function DropdownLink({ href, as, children }) {
    return (
        <div>
            <Switch value={as}>
                <Case matches="button">
                    <button type="submit" className="block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                        {children}
                    </button>
                </Case>
                <Case matches="a">
                    <a href={href} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                        {children}
                    </a>
                </Case>
                <Case default>
                    <InertiaLink href={href} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                        {children}
                    </InertiaLink>
                </Case>
            </Switch>
        </div>
    )
}
