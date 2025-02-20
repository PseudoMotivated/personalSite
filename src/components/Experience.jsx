import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { resolveImage } from '../utils/ImageManager';


// Edit this to edit content.
const work = [
    {
        title: "Server Admin (2024-->)",
        content: "Administered and secured a live game server. ",
        imageUrl: "block.webp"
    },
    {
        title: "Ad Distributor (May-Nov 2024)",
        content: "Delivering ads to 200+ households on the weekends.",
        imageUrl: "ad.webp"
    },
    {
        title: "Tech Support (Oct 2023-->)",
        content: "Volunteer Tech Support for the Swedish Red Cross",
        imageUrl: "rk.webp"
    }
];

const education = [
    {
        title: "Fullstack Developer (2024--> WIP)",
        content: "Learning React, NodeJS and Express at Fullstackopen. ",
        imageUrl: "dev.webp"
    },
    {
        title: "Gymnasium (Aug 2023--> WIP)",
        content: "Technical line at a Swedish Gymnasium.",
        imageUrl: "book.webp"
    }
];

const TimelineItem = ({ title, content, imageUrl, isLast }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-gray-300" />
                <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-blue-500 overflow-hidden flex items-center justify-center bg-white">
                        {imageUrl ? (
                            <img src={resolveImage(imageUrl)} alt={title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-blue-100" />
                        )}
                    </div>
                </div>
                {!isLast && <div className="w-0.5 h-16 bg-gray-300" />}
            </div>

            <div className="flex-1">
                <div className="bg-[var(--main-1)] rounded-lg shadow p-4">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <h3 className="font-bold text-lg">{title}</h3>
                        {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                    </div>

                    {isExpanded && (
                        <div className="mt-2">
                            <p className="text-gray-600">{content}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Timeline = ({ items }) => {
    return (
        <div
            style={{ width: "clamp(40%, 600px, 90%)" }}
            className="max-w-2xl mt-4 rounded-md mx-auto p-6 bg-slate-200">
            <div>
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        imageUrl={item.imageUrl}
                        isLast={index === items.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

/**
 * Displays a box which can be toggles between two states, each rendering a timeline with a seperate list.
 * Toggles list and highlights clicked toggle button. Lists entries and can be modified in object inside Experience.jsx.
 */
const Experiece = () => {
    const [toggle, setToggle] = useState(false)
 
        return (
            <div>
                <div className="w-full flex flex-col items-center justify-center">

                    <div style={{ width: "clamp(40%, 600px, 90%)" }}
                        className="flex p-1 rounded-lg  flex-row bg-slate-200 justify-around">

                        <div onClick={() => { setToggle(true) }}
                            className="text-center cursor-pointer overflow-hidden rounded-md w-full">
                            <p className={!toggle? "text-slate-900" :"text-white bg-[var(--main-1)]"}>Education</p>
                        </div>

                        <div onClick={() => { setToggle(false) }}
                        className="text-center cursor-pointer overflow-hidden rounded-md w-full ">
                            <p className={toggle? "text-slate-900" :"text-white bg-[var(--main-1)]"}>Work</p>
                        </div>
                        
                    </div>

                </div>
                <Timeline items={toggle? education : work} />
            </div>
        )
    } 


export default Experiece;
