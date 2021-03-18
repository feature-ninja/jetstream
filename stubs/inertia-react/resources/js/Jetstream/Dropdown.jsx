import React, { useState } from 'react';
import { Transition } from '@headlessui/react'
import classNames from 'classnames';

function widthClass(width) {
    return ({
        '48': 'w-48',
    }[width.toString()]);
}

function alignmentClasses(align) {
    if (align === 'left') {
        return 'origin-top-left left-0'
    } else if (align === 'right') {
        return 'origin-top-right right-0'
    } else {
        return 'origin-top'
    }
}

export default function Dropdown({ align = 'right', width = '48', contentClasses = ['py-1', 'bg-white'], trigger, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <div onClick={() => setOpen(! open)}>
                {trigger}
            </div>

            {/*Full Screen Dropdown Overlay*/}
            {open && (
                <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>
            )}

            <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                {open && (
                    <>
                        <div
                            className={classNames('absolute z-50 mt-2 rounded-md shadow-lg', [widthClass(width), alignmentClasses(align)])}
                            onClick={() => setOpen(false)}>
                            <div className={classNames('rounded-md ring-1 ring-black ring-opacity-5', [contentClasses])}>
                                {children}
                            </div>
                        </div>
                    </>
                )}
            </Transition>
        </div>
    )
}
