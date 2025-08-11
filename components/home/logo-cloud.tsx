import Image from 'next/image';

import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <div className="bg-background overflow-hidden pb-16">
            <div className="group relative m-auto max-w-7xl">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="relative py-6 md:w-full">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/partners/cdc-logo.svg"
                                    alt="Logo of the Caisse des Dépôts et Consignations"
                                    height="20"
                                    width="20"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/partners/giz-logo.svg"
                                    alt="Logo of GIZ - Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH"
                                    height="20"
                                    width="20"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/partners/nabda-logo.svg"
                                    alt="Logo of Nabda, a modern brand symbolizing innovation and creativity."
                                    height="20"
                                    width="20"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/partners/smartcapital-logo.svg"
                                    alt="Logo of Smart Capital, a financial services company."
                                    height="20"
                                    width="20"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="/partners/theworldbank-logo.svg"
                                    alt="Logo of The World Bank, an international financial institution."
                                    height="20"
                                    width="20"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
