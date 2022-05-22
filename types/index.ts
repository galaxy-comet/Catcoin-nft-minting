export type StateType = {
  provider?: any
  web3Provider?: any
  address?: string
  chainId?: number
}

export type ActionType =
  | {
  type: 'SET_WEB3_PROVIDER'
  provider?: StateType['provider']
  web3Provider?: StateType['web3Provider']
  address?: StateType['address']
  chainId?: StateType['chainId']
}
  | {
  type: 'SET_ADDRESS'
  address?: StateType['address']
}
  | {
  type: 'SET_CHAIN_ID'
  chainId?: StateType['chainId']
}
  | {
  type: 'RESET_WEB3_PROVIDER'
}

export interface TabOption {
  label: string;
  value: any;
}

