import { memo, useContext } from 'react'
import styles from './styles.module.scss'
import { CoinsContext } from '../../context/coinsContext'
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins'

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext)
  const { coins } = coinsContext

  const { value, setValue } = useFilterCoins(setCoins, coins)

  return (
    <div className={styles.block}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={styles.input}
        type='text'
        placeholder='bitcoin'
      />
    </div>
  )
}

export default memo(FilterBlock)
