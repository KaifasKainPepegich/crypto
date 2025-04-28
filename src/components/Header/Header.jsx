import styles from './styles.module.scss'

const name = 'CRYPTO'

export const Header = () => {
  return <header className={styles.header}> {name} </header>
}
