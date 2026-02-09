import cn from "classnames";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Images from "./Images";
import styles from "./Hero.module.sass";

type HeroProps = {};

const Hero = ({}: HeroProps) => (
    <div className={cn("section", styles.hero)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <h1 className={cn("h1", styles.title)}>
                    Stop Losing Brilliant Ideas.<br />Start Building Them.
                </h1>
                <div className={styles.info}>
                    Capture every idea in 3 seconds. AI organizes them instantly. Manage 100+ ideas across unlimited projects without feeling overwhelmed.
                </div>
                <Button
                    className={styles.button}
                    title="Get Started Free"
                    href="https://kavanah.vercel.app/"
                />
                <div className={styles.version}>Free forever. Premium AI features for $10/month.</div>
            </div>
            <Images />
        </div>
        {/* <Stars /> */}
    </div>
);

export default Hero;
