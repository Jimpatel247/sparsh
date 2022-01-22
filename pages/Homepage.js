import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Signup from './Signup'

export default function Homepage(){
	return(
<html>
<header>
  <nav className={styles.nav}>
    <Link href="/" passHref>
	  {/* --Total height of navbar = 125, logo = 65px , pad = 30+30, 60+65 = 125  */}
    <div style={{height: 65 +'px', padding: 30 +'px'}}>
	  <Image src={require('../public/logo.png')} alt="sparshlogo" />
    </div>
    </Link> 
    <Link href="./"><a className={styles.navElements}>Home </a></Link>
    <Link href="./events"><a className={styles.navElements}>Events </a></Link>     
    <Link href="./teams"><a className={styles.navElements}>Team </a></Link>     
  </nav>
</header>

{/* <!----------------FIRST-------------------> */}
  <div className={styles.firstOuterDiv}>
    <div className={styles.firstDiv}></div>
    <div className={styles.firstText}>SPARSH 2022</div>
    <Link href = "/login"><a className={styles.regLogin}>Login/Register</a></Link>
    <Link href = "/register"><a className={styles.regSignup}>Register</a></Link>
    <Signup/>
  </div>
  
  {/* <!----------------FOOTER-------------------> */}
<footer>
  <div className={styles.footerDiv}>
    <ul>
      <li className={styles.li}><a className={styles.footer}>Home</a></li>
      <li className={styles.li}><a className={styles.footer}>Events</a></li>
      <li className={styles.li}><a className={styles.footer}>Team</a></li>
    </ul>
    </div>
</footer>
</html>
)
}