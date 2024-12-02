import styles from "./MediaSection.module.css"

export const MediaSection=()=>{
    return(
        <>
            <main>
                {/*Start of Intro section*/}
                <section className={`${styles.intro}`}>
                    <div className={`${styles.intro_main}`}><p>Welcome to Arcane gallery!</p>
                        <h2>FIND NEW MEDIA FOR WALLPAPER OR SOMETHING ELSE)</h2>
                        <a href="#" className={`${styles.intro_button}`}>Go to the gallery</a></div>
                </section>
                {/*End of Intro section*/}
            </main>
        </>
    )
}