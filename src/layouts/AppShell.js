import styles from "./app-shell.module.css";

export default function AppShell({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>Nav</nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
