import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
const header = () => {
    return (
        <div>
            <div className={styles.header}>
                <Link href="/" passHref>
                    <Image className={styles.logo} src="/Asset 1.png" alt='de novo logo' width={190} height={80} />
                </Link>
            </div>
        </div>
    )
}

export default header