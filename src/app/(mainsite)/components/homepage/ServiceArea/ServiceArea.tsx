import styles from "./servicearea.module.css"
import Area from "./Area"

export default function ServiceArea({areaData, mapURL}: {areaData: string[], mapURL: string}) {

    const areaElems = areaData.map((area, i)=>{
        return <Area area={area} key={i} />
    })

  return (
    <section className={styles.serviceArea}>
        <div className={styles.areas}>
            <h2><span>Service Area</span></h2>
            {areaElems}
            <div className={styles.areaShader}></div>
        </div>
        <div className={styles.serviceAreaMap} >
        <div className={styles.menuCover} ></div>
          <iframe src={mapURL}></iframe>
        </div>
        
        <img src='/img/servicearea.png' alt='Image of house' className='bg-img' />
        <div style={{backgroundColor: "rgba(0,0,0,0.7)"}} className='shader'></div>
        <div className={`shader ${styles.shader2}`}></div>
    </section>
  )
}
