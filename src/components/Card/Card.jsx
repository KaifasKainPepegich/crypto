import styles from './styles.module.scss'

export const Card = ({ balance, setBalance }) => {
  return (
    <div className={styles.card}>
      <div className={styles.block}>
        <p>CRYPTO-FINANCE</p>
        <button onClick={() => setBalance((prev) => prev + 1000)}>
          Add money
        </button>
      </div>

      <div className={styles.block}>
        <p>STAS</p>
        <p>{balance}</p>
      </div>
    </div>
  )
}
