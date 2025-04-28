import { Card } from '../../components/Card/Card'
import { CoinsList } from '../../components/CoinsList/CoinsList'
import { FilterBlock } from '../../components/FilterBlock/FilterBlock'
import styles from './styles.module.scss'

export const Main = ({
  balance,
  setBalance,
  coins,
  filteredCoins,
  setCoins,
}) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} coins={coins} />
      {coins.length > 0 ? (
        <CoinsList coins={filteredCoins} />
      ) : (
        <div>Привет от Стаса</div>
      )}
    </main>
  )
}
