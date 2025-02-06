import { AccountBalanceWallet } from '@mui/icons-material'
import { v4 as uuidv4 } from 'uuid'

/**
 * Returns required object to display card data.
 * @constructor
 * @param {string} title - The card title.
 * @param {number} amount - The topic amount.
 * @param {string} iconCardBg - Background color for Icon.
 * @param {JSX} icon - Icon.
 * @param {number} notifications - Icon.
 */
export class MainTopicCardData {
  constructor(
    title = '',
    amount = 0 || '',
    iconCardBg = '',
    icon = AccountBalanceWallet,
    notifications = 0
  ) {
    this.key = uuidv4()
    this.title = title
    this.amount = amount
    this.iconCardBg = iconCardBg
    this.icon = icon
    this.notifications = notifications
  }
}
