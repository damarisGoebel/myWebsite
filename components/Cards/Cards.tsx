import styles from './Cards.module.css'

type Props = {
 title: string,
 subTitle: string,
 imageSrc?: string,
 imageAlt?: string,
 techStack: string,
 deploymentLink?: string,
 deployment: string
}

const Cards:React.FC<Props> = ({title, subTitle, imageSrc, imageAlt, techStack, deploymentLink, deployment}) => {
 return (
    <div className={styles.card}>
        <h3>{title}
            <span className={styles.description}> {subTitle}</span>
        </h3>
        
        {imageSrc && <img className={styles.image} src={imageSrc} alt={imageAlt}/>}
    
        <p>Tech Stack: {techStack}
                        <br/>
                    Deployment:  
                        <span>                
                            <a href={deploymentLink} className={styles.link}>
                                {deployment}                  
                            </a>
                        </span>
        </p>
    </div>

 )
}


export default Cards