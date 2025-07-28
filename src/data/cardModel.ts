import { ReactElement } from "react";

export const types: string[] = ['all', 'iOS', 'front-end', 'softwares', 'others']

export function Card(
    name: string, image: string, description: string, type: number,
    date: string, showcaseImage: string, longDescription: ReactElement,
    principalType: string, skills: string[], links: {
        name: string,
        url: string
    }[]
) {

    // Ensure that the principalType is a type
    if (type < 1 || type >= types.length) {
        throw new Error(`Invalid type: ${type}. Must be one of ${types.join(', ')}`);
    }

    return {
        name: name,
        image: image,
        description: description,
        type: type,
        date: date,
        showcaseImage: showcaseImage,
        longDescription: longDescription,
        principalType: principalType,
        skills: skills,
        links: links
    }
}
