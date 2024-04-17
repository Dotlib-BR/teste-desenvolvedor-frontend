import { Typography } from "@mui/material"

type TitleProps = {
    text: string
}

export const Title = ({text}: TitleProps ) => {
    return (
    <Typography width='33%' color='white' fontWeight='700'> 
      {text}
    </Typography>)
}