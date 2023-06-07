import { FC, useEffect, useState } from 'react'
import styles from './app.module.css'
import axios from 'axios'
import Button from './components/button/button'

type CollectionData = {
  floorPrice: number
  highestSale: number
  items: number
  listed: number
  marketCap: number
  owners: number
  volume: number
}

const App: FC = () => {
  const [collectionData, setCollectionData] = useState<CollectionData>({
    floorPrice: 0,
    highestSale: 0,
    items: 0,
    listed: 0,
    marketCap: 0,
    owners: 0,
    volume: 0
  })

  useEffect(() => {
    axios
      .get(
        'https://api.rarible.org/v0.1/data/collections/POLYGON:0x15f4272460062b835ba0abbf7a5e407f3ef425d3/stats/?currency=MATIC'
      )
      .then((r) => setCollectionData(r.data))
    console.log(collectionData)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.blur}>
        <img
          className={styles.girlImage}
          src={'/sg.png'}
          alt={'Collection sample'}
        />
        <div className={styles.newspaper}>
          <img
            className={styles.logo}
            src={'/logo.png'}
            alt={'Soviet Girls Logo'}
          />
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeader}>
                <th
                  style={{
                    borderRight: '3px solid #383737'
                  }}
                >
                  Минт 2023 года
                </th>
                <th
                  style={{
                    borderRight: '3px solid #383737'
                  }}
                >
                  № {collectionData.items} ({collectionData.owners})
                </th>
                <th>{collectionData.floorPrice} MATIC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    borderTop: '3px solid #383737',
                    textAlign: 'center',
                    padding: '20px 0'
                  }}
                >
                  Уникальная коллекция NFT «Soviet Girls», вдохновленная аниме
                  «Girls und Panzer» и созданная специально для любителей
                  советских мультфильмов и современного аниме.
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    borderTop: '3px solid #383737',
                    borderBottom: 'none',
                    padding: '20px 0',
                    textAlign: 'justify'
                  }}
                >
                  Коллекция «Soviet Girls» состоит из 230 уникальных NFT, каждый
                  из которых представляет собой уникальное изображение
                  аниме-девочки в советской форме. Все NFT были созданы с
                  использованием передовых технологий и имеют высокую степень
                  детализации.
                  <br />
                  <br />
                  Коллекция «Soviet Girls» предлагает любителям советских
                  мультфильмов и аниме возможность приобрести уникальные
                  цифровые активы, которые можно использовать в качестве
                  подарков, инвестиций или просто для украшения своих коллекций.
                  <br />
                  <br />
                  Кроме того, создатели коллекции «Soviet Girls» планируют
                  проводить различные мероприятия и конкурсы, чтобы привлечь
                  внимание к своей работе и поддержать развитие NFT-индустрии.
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.buttonsContainer}>
            <Button
              onClick={() =>
                window.open('https://market.sovietgirls.su/', '_blank')
              }
            >
              Маркетплейс
            </Button>
            <Button
              onClick={() =>
                window.open('https://vk.com/sovietgirls_nft', '_blank')
              }
            >
              ВКонтакте
            </Button>

            <Button
              onClick={() =>
                window.open('https://auth.sovietgirls.su', '_self')
              }
            >
              Закрытый чат
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
