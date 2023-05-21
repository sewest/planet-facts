import Nav from "./Nav";
import styles from "./app-shell.module.css";

export default function AppShell({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.stars} />
      <Nav className={styles.Nav} />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
