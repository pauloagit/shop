import React from "react"
import {Grid, Card, CardActionArea, CardMedia, Box, Typography, Link} from '@mui/material'

const ProductCard = ({product}) => {
    const {images, title, price} = product

    return (
        <Grid item
              xs={6}
              sm={4}
        >
            <Card>
                <Link>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            className='fadeIn'
                            image={images}
                            alt={title}
                        />

                    </CardActionArea>
                </Link>
            </Card>

            <Box sx={{mt: 1}} className='fadeIn'>
                <Typography fontWeight={700}>{title}</Typography>
                <Typography fontWeight={500}>{`$${price}`}</Typography>
            </Box>
        </Grid>
    )

}

export default ProductCard