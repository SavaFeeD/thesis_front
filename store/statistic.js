const createArray = (s, n, m) => Array.from({ length: s }, () => Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m));

export const state = () => ({
  chnPurchasedChartCategories: ['1 Hour', '12 Hour', '24 Hour'],
  chnTotalSoldChartCategories: ['Hourly', 'Daily', 'Weekly'],
  chnPurchased: {
    chartData: [
      createArray(12, 0, 130),
      createArray(12, 0, 130),
      createArray(12, 0, 130),
    ],
    value: '142 234 543 CHN',
  },
  chnTotalSold: {
    chartLabels: [
      ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    ],
    chartData: [
      [
        {
          data: createArray(12, 0, 130),
          label: 'BTC',
        },
        {
          data: createArray(12, 0, 130),
          label: 'TRX',
        },
        {
          data: createArray(12, 0, 130),
          label: 'BUSD',
        },
        {
          data: createArray(12, 0, 130),
          label: 'ETH',
        },
        {
          data: createArray(12, 0, 130),
          label: 'DAI',
        },
        {
          data: createArray(12, 0, 130),
          label: 'USDT',
        },
        {
          data: createArray(12, 0, 130),
          label: 'BNB',
        },
        {
          data: createArray(12, 0, 130),
          label: 'USDC',
        },
      ],
      [
        {
          data: createArray(12, 0, 130),
          label: 'BTC',
        },
        {
          data: createArray(12, 0, 130),
          label: 'TRX',
        },
        {
          data: createArray(12, 0, 130),
          label: 'BUSD',
        },
        {
          data: createArray(12, 0, 130),
          label: 'ETH',
        },
        {
          data: createArray(12, 0, 130),
          label: 'DAI',
        },
        {
          data: createArray(12, 0, 130),
          label: 'USDT',
        },
        {
          data: createArray(12, 0, 130),
          label: 'BNB',
        },
        {
          data: createArray(12, 0, 130),
          label: 'USDC',
        },
      ],
      [
        {
          data: createArray(12, 0, 130),
          label: 'BTC',
        },
        {
          data: createArray(12, 0, 130),
          label: 'TRX',
        },
        {
          data: createArray(12, 0, 130),
          label: 'BUSD',
        },
        {
          data: createArray(12, 0, 130),
          label: 'ETH',
        },
        {
          data: createArray(12, 0, 130),
          label: 'DAI',
        },
        {
          data: createArray(12, 0, 130),
          label: 'USDT',
        },
        {
          data: createArray(12, 0, 130),
          label: 'BNB',
        },
        {
          data: createArray(12, 0, 130),
          label: 'USDC',
        },
      ],
    ],
    value: '120 234 543 CHN',
  },
  trancheProgress: {
    totalSold: [
      {
        progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
        total: '165 578 849',
        left: '140 578 849',
      },
      {
        progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
        total: '65 578 849',
        left: '7 704 345',
      },
      {
        progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
        total: '5 578 849',
        left: '508 345',
      },
    ],
    categories: ['Tranche #20', 'Tranche #19', 'Tranche #18'],
    list: [
      [
        {
          img: 'Bitcoin.svg',
          name: 'Bitcoin',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'BTC',
        },
        {
          img: 'Ethereum.svg',
          name: 'Ethereum',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'ETH',
        },
        {
          img: 'Binance.svg',
          name: 'Binance',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'BNB',
        },
        {
          img: 'TRON.svg',
          name: 'TRON',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'TRX',
        },
        {
          img: 'Tether.svg',
          name: 'Tether',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'USDT',
        },
        {
          img: 'USDC.svg',
          name: 'USD Coin',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'USDC',
        },
        {
          img: 'DAI.svg',
          name: 'Dai',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'DAI',
        },
        {
          img: 'Coinbase.svg',
          name: 'Coinbase',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'COIN',
        },
      ],
      [
        {
          img: 'Bitcoin.svg',
          name: 'Bitcoin',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'BTC',
        },
        {
          img: 'Ethereum.svg',
          name: 'Ethereum',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'ETH',
        },
        {
          img: 'Binance.svg',
          name: 'Binance',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'BNB',
        },
        {
          img: 'TRON.svg',
          name: 'TRON',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'TRX',
        },
        {
          img: 'Tether.svg',
          name: 'Tether',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'USDT',
        },
        {
          img: 'USDC.svg',
          name: 'USD Coin',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'USDC',
        },
        {
          img: 'DAI.svg',
          name: 'Dai',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'DAI',
        },
        {
          img: 'Coinbase.svg',
          name: 'Coinbase',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'COIN',
        },
      ],
      [
        {
          img: 'Bitcoin.svg',
          name: 'Bitcoin',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'BTC',
        },
        {
          img: 'Ethereum.svg',
          name: 'Ethereum',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'ETH',
        },
        {
          img: 'Binance.svg',
          name: 'Binance',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'BNB',
        },
        {
          img: 'TRON.svg',
          name: 'TRON',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'TRX',
        },
        {
          img: 'Tether.svg',
          name: 'Tether',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'USDT',
        },
        {
          img: 'USDC.svg',
          name: 'USD Coin',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'USDC',
        },
        {
          img: 'DAI.svg',
          name: 'Dai',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'DAI',
        },
        {
          img: 'Coinbase.svg',
          name: 'Coinbase',
          progress: Math.floor(Math.random() * (Math.max(0, 100) - Math.min(0, 100) + 1)) + Math.min(0, 100),
          sold: Math.floor(Math.random() * (Math.max(0, 1000) - Math.min(0, 1000) + 1)) + Math.min(0, 1000),
          currency: 'COIN',
        },
      ],
    ],
  },
  transaction: {
    categories: ['1 Hour', '12 Hour', '24 Hour'],
    list: [
      [
        {
          id: 0,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 1,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 2,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 3,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 4,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 5,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 6,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 7,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 8,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 9,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 10,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 11,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 12,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 13,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 14,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
      ],
      [
        {
          id: 0,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '20 000 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 1,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 2,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 3,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '13 000 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 4,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 5,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 6,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 7,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 8,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 9,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 10,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 11,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 12,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 13,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 14,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
      ],
      [
        {
          id: 0,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '254 CHN',
        },
        {
          id: 1,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 2,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 3,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 4,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 5,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 6,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 7,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 8,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 9,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 10,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 11,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 12,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 13,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
        {
          id: 14,
          coin: {
            img: 'Bitcoin.svg',
            name: 'BTC',
          },
          totalTransfer: '12 320 USD',
          user: 'Emily Rotakovsky',
          chnAmount: '2 534 254 CHN',
        },
      ],
    ],
  },
});

export const getters = {
  getChnPurchasedChartData: (s) => (i) => s.chnPurchased.chartData[i],
  getChnPurchasedChartValue: (s) => () => s.chnPurchased.value,
  getChnTotalSoldChartData: (s) => (i, j) => s.chnTotalSold.chartData[i][j].data,
  getChnTotalSoldChartDataLabel: (s) => (i, j) => s.chnTotalSold.chartData[i][j].label,
  getChnTotalSoldChartLabel: (s) => (i) => s.chnTotalSold.chartLabels[i],
  getChnTotalSoldChartValue: (s) => () => s.chnTotalSold.value,
  getTrancheProgress: (s) => (i) => s.trancheProgress.list[i],
  getTrancheProgressTotalSold: (s) => (i) => s.trancheProgress.totalSold[i],
  getTransactionList: (s) => (i) => s.transaction.list[i],
};
