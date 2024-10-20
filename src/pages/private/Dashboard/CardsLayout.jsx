import React from 'react'
import { styled } from '@mui/material/styles'
import {
    Avatar, 
    Box, 
    Grid2, 
    Paper, 
    Stack, 
    Typography
} from '@mui/material'
import {
    TrendingUp,
    TrendingDown,
    TrendingFlat
} from '@mui/icons-material'
import { iconSize } from './data'
import clientThemeConfig from '@utils/theme'

const TrendWrapper = styled(Paper)(() => ({
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    height: '64px',
    justifyContent: 'center',
    width: '64px'
}))

const getLeftSection = (cardItem) => {
    return (
        <Stack direction='column'>
            <Stack sx={{ marginBottom: '12px' }}>
                <Avatar sx={{ bgcolor: cardItem.bgCircle, color: cardItem.iconColor, height: 72, width: 72 }}>
                    {cardItem.icon}
                </Avatar>
            </Stack>
            <Stack direction='column'>
                <Typography variant='h6'>{cardItem.title}</Typography>
                <Typography variant='h3' sx={{ color: cardItem.amountColor }}>{cardItem.amount}</Typography>
            </Stack>
        </Stack>
    )
}

const getTrend = (cardItem) => {
    if (cardItem.slap > 0) {
        return (
            <TrendWrapper elevation={5} sx={{ color: clientThemeConfig.palette.success.main }}>
                <TrendingUp sx={iconSize} />
            </TrendWrapper>
        )
    }

    if (cardItem.slap < 0) {
        return (
            <TrendWrapper elevation={5} sx={{ color: clientThemeConfig.palette.error.main }}>
                <TrendingDown sx={iconSize} />
            </TrendWrapper>
        )
    }

    return (
        <TrendWrapper elevation={5} sx={{ color: clientThemeConfig.palette.secondary.main }}>
            <TrendingFlat sx={iconSize} />
        </TrendWrapper>
    )
}

const CardsLayout = ({ items = [] }) => {
  return (
    <Box sx={{ flexGrow: 1, margin: '12px 0' }} component="section">
        <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                Array.from(items).map((cardItem) => {
                    return (
                        <Grid2 
                          key={cardItem.key} size={{ xs: 2, sm: 4, md: 4 }} 
                          onClick={() => console.log(`Clicked on item ${cardItem.title}`)}
                          sx={{ cursor: 'pointer' }}
                        >
                            <Paper
                              elevation={5}
                              sx={{
                                backgroundColor: cardItem.bgColor,
                                color: cardItem.titleColor,
                                height: 'max-content',
                                padding: '12px',
                                width: '100%'
                              }}
                            >
                                <Stack 
                                  direction='row' 
                                  sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                                >
                                    {getLeftSection(cardItem)}
                                    {getTrend(cardItem)}
                                </Stack>
                            </Paper>
                        </Grid2>
                    )
                })
            }
        </Grid2>
    </Box>
  )
}

export default CardsLayout