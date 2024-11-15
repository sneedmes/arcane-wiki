type StoryProps = {
    img: string,
    description: string
}

export const StorySection = ({img, description}:StoryProps)=> {
    return(
        <div className='story-info'>
            <img src={img} alt=""/>
            <span className='story-description'>{description}</span>
        </div>
    )
}