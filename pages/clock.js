import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    function getTwoPositionedDigits(num) {
        return num < 10 ? [0, num] : num.toString().split('');
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <>
            <div className='flex justify-center'>
                <div className='grid grid-flow-col gap-2 text-center'>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className='countdown text-9xl font-mono'>{getTwoPositionedDigits(date.getHours())}</span>
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className='countdown text-9xl font-mono'>{getTwoPositionedDigits(date.getMinutes())}</span>
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className='countdown text-9xl font-mono'>{getTwoPositionedDigits(date.getSeconds())}</span>
                    </div>
                </div>
            </div>
        </>
    );
}