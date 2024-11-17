type StoryProps = {
    description: string
}

export const StorySection = ({description}:StoryProps)=> {
    return(
        <span>{description}</span>
    )
}