import React from 'react';
import { Case, Switch } from '@/Jetstream/Conditional';
import classNames from 'classnames';

export default function ResponsiveNavLink({ active, href, as, children, ...props }) {
    const classes = active
        ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out'
        : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'

    return (
        <Switch value={as}>
            <Case matches="button">
                <button className={classNames(classes, 'w-full text-left')} {...props}>
                    {children}
                </button>
            </Case>
            <Case fallback>
                <InertiaLink href={href} className={classes} {...props}>
                    {children}
                </InertiaLink>
            </Case>
        </Switch>
    )
}
