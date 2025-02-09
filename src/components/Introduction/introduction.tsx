import Styles from "./introduction.module.css"
import Image from "next/image"
import Link from "next/link"

import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const linkedinLink:string = "https://linkedin.com/in/gfrehse"
const githubLink:string = "https://github.com/tuildes"

const sizeIcon:number = 48

export default function Introduction() {
    return(
        <div className={Styles.introduction__wrapper}>
            <div className={Styles.introduction__content}>
                <div>
                    <Image 
                        className={Styles.introduction__profilePhoto}
                        src="/home/gustavo.png"
                        alt="Gustavo Frehse"
                        width={500}
                        height={500}
                    />
                </div>
                <div className={Styles.introduction__about}>
                    <div>
                        <h1>Who am I?</h1>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu volutpat nibh. 
                            Maecenas facilisis neque condimentum vestibulum imperdiet. Nulla  tempus pretium 
                            massa commodo blandit. <strong>Fusce luctus eros</strong> quis ligula  consequat blandit.
                        </span>
                        <div className={Styles.introduction__links}>
                            <Link href={githubLink} target="__blank">
                                <IconBrandGithub className={Styles.icon} color="white" size={sizeIcon} />
                            </Link>
                            <Link href={linkedinLink} target="__blank">
                                <IconBrandLinkedin className={Styles.icon} color="white" size={sizeIcon} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={Styles.introduction__name}>
                    <Image 
                        className={Styles.introduction__nameBackground}
                        src="/home/florest-thiago-falcao.jpg"
                        alt="Florest"
                        width={600}
                        height={1000}
                    />
                    <div className={Styles.introduction__nameText}>
                        <span>
                            Gustavo 
                            <br/>
                            Frehse
                        </span>
                        <small>tuildes</small>
                    </div>
                </div>
            </div>
        </div>
    )
}