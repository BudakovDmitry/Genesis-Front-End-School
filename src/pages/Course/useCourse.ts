import { useEffect, useState } from "react"
import { usePage } from 'src/hooks/usePage'
import { useCourses } from "src/hooks/useCourses"

export const useCourse = () => {
    const { params } = usePage()
    const { data, isLoading } = useCourses(`/${params.id}`);

    return {
        course: data,
        isLoading
    }
}