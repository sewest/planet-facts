import styles from "./app-shell.module.css";

export default function AppShell() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>Nav</nav>
      <main className={styles.main}>
        <section className={styles.buttons}>Buttons</section>
        <section className={styles.planet}>Planet</section>
        <section className={styles.facts}>Text</section>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
