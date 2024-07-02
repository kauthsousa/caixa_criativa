import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export default function Menu(Props: {}){
    return(
        <header className={styles.menuNavegacao}>
            <ul>
                <li>
                    <Link href="../">
                        <Image src="/images/logo.png" alt="Caixa Criativa logo" className={styles.cclogo} width={70} height={70} priority/>
                        <span>Caixa Criativa</span>
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