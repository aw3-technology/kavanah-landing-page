import { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Image from "@/components/Image";
import Button from "@/components/Button";
import styles from "./Header.module.sass";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);

    useEffect(() => {
        const isScrolled = window.scrollY > 0;
        setHeaderStyle(isScrolled);
    }, []);

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -1);
    });

    return (
        <header
            className={cn(styles.header, {
                [styles.fixed]: headerStyle,
            })}
        >
            <div className={cn("container", styles.container)}>
                <div className={styles.inner}>
                    <Link className={styles.logo} href="/">
                        <Image
                            className={styles.image}
                            src="/images/kavanah-logo.png"
                            priority={true}
                            width={260}
                            height={67}
                            alt="Kavanah"
                        />
                    </Link>
                    <Button
                        className={styles.button}
                        title="Try it for free"
                        href="https://kavanah.vercel.app/"
                    />
                    <div
                        className={cn(styles.overlay, {
                            [styles.visible]: headerStyle,
                        })}
                    ></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
