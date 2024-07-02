import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export default function SliderServices(Props: {}){
    return(
        <section className={styles.sliderServices}>
            <ul>
                <li>Design de Interfaces</li>
                <li>Desenvolvimento de Websites</li>
                <li>Design de experiências</li>
                <li>Design de personagens</li>
                <li>Branding Design</li>
            </ul>
            <span></span>
        </section>
    );
}