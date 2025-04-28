import styles from './styles.module.scss'

export const CoinsList = ({ coins }) => {
  return (
    <ul className={styles.list}>
      {coins.map((coin) => {
        return (
          <li className={styles.item} key={coin.uuid}>
            <div className={styles.info}>
              <img className={styles.logo} src={coin.iconUrl} alt={coin.name} />
              <p style={{ color: coin.color }}>{coin.name}/USD</p>
            </div>
            <div className={styles.price}>
              <p style={{ color: coin.color }}>
                {(+coin.price).toFixed(2)} USD
              </p>
              <p style={{ color: coin.color }}>
                {(+coin.btcPrice).toFixed(2)} BTC
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
