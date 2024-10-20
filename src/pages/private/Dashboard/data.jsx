import uaLocale from "@utils/locales/ua"
import {
    AccountBalanceWallet,
    Savings,
    ShoppingBag
} from '@mui/icons-material'

const { total, saved, spending } = uaLocale.dashboard.moneyCards

export const iconSize = {
    height: 36,
    width: 36
}

export const topicMoneyCards = [
    {
        key: 'total',
        title: total,
        titleColor: '#ABABAB',
        amount: '$3120.54',
        amountColor: '#fff',
        bgColor: '#424242',
        bgCircle: 'rgba(37, 201, 53, 0.2)',
        iconColor: '#25C935',
        slap: 1.2,
        icon: <AccountBalanceWallet sx={iconSize} />
    },
    {
        key: 'saved',
        title: saved,
        titleColor: '#5C5C5C',
        amount: '$501.065',
        amountColor: '#252525',
        bgColor: '#F1F1F1',
        bgCircle: 'rgba(169, 169, 169, 0.2)',
        iconColor: '#434343',
        slap: -1,
        icon: <Savings sx={iconSize} />
    },
    {
        key: 'spending',
        title: spending,
        titleColor: '#5C5C5C',
        amount: '$42.043',
        amountColor: '#252525',
        bgColor: '#F1F1F1',
        bgCircle: 'rgba(169, 169, 169, 0.2)',
        iconColor: '#434343',
        slap: 0,
        icon: <ShoppingBag sx={iconSize} />
    }
]