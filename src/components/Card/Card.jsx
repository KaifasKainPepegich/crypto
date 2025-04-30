import styles from './styles.module.scss'
import { withRuBalance } from './../../helpers/hoc/withRuBalance'

const Card = ({ balance, setBalance }) => {
  return (
    <div className={styles.card}>
      <div className={styles.block}>
        <p>CRYPTO-FINANCE</p>
        <button onClick={setBalance}>Add money</button>
      </div>

      <div className={styles.block}>
        <p>STAS</p>
        <p>{balance}</p>
      </div>
    </div>
  )
}

export default withRuBalance(Card)
