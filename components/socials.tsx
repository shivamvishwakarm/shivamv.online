import React from 'react'
import { USER } from '@/data/user'
import { SimpleTooltip } from './ui/tooltip'


const Socials = () => {
    return (
        <div className='flex flex-wrap items-center justify-end gap-2'>

            <div className='flex flex-wrap items-center justify-end gap-2 rounded-lg'>
                {
                    USER.socialLinks.map((socials) => (
                        <SimpleTooltip key={socials.name} content={socials.name} side="bottom" sideOffset={-4}>
                            <a
                                href={socials.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group  p-1 rounded-md transition-all duration-200 ease-in-out"
                            >
                                <socials.icon
                                    color="#666666"
                                    className="text-neutral-500 shadow-3xl md:size-10 size-8 "
                                    width={35}
                                    height={35}
                                    aria-label={socials.name}
                                />
                            </a>
                        </SimpleTooltip>
                    ))


                }




            </div >
        </div >
    )
}

export default Socials
