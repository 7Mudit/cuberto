import { forwardRef } from "react";
import styles from "./style.module.scss";
import Magnetic from "../magnetic";
import { useEffect } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const HeaderMagnetic = forwardRef(function Index(props, ref) {
  const { isActive, setIsActive } = props;
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <div className={styles.header}>
        <Magnetic>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.iconContainer}
          >
            {isActive ? (
              <FaTimes className={styles.icon} /> // Close icon
            ) : (
              <FaBars className={styles.icon} /> // Hamburger icon
            )}
            <div ref={ref} className={styles.bounds}></div>
          </div>
        </Magnetic>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
});

export default HeaderMagnetic;
