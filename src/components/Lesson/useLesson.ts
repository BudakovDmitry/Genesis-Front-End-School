import { useState, RefObject, useRef } from "react";

export const useLesson = () => {
    const [expanded, setExpanded] = useState<string | false>('lesson1');
    const playerRef = useRef() as RefObject<HTMLVideoElement>

    const handleChange =
    (lesson: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? lesson : false);
    };

    return {
        expanded,
        handleChange,
        playerRef
    }
}