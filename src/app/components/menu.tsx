import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export default function Menu(Props: {}){
    return(
        <header className={styles.menuNavegacao}>
            <ul>
                <li>
                    <Link href="../">
                        By{" "}
                        <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority/>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>Projetos</li>
                <li>Biblioteca</li>
                <li>Blog</li>
            </ul>
            <ul>
                <li>Contate</li>
            </ul>
        </header>
    );
}