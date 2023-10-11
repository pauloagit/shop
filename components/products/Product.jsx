import {Box, Button, Chip, Grid, Typography} from '@mui/material'
import ProductSlideshow from '@/components/products/ProductSlideshow'

const product = {
    slug: 'Televisor',
    images: ['http://localhost:8084/images/tv_led.jpeg', 'http://localhost:8084/images/tv_led.jpeg', 'http://localhost:8084/images/tv_led.jpeg'],
    title: 'Televisor Led',
    price: '99900',
    quantity: '1',
    color: 'Negro',
    description: 'Led Samsung 58" Cu7000 Uhd 4K Smart Tv 2023'
}


const Product = () => {
    return (
        <Grid container spacing={3}>

            <Grid item xs={12} sm={7}>
                <ProductSlideshow
                    images={product.images}
                />
            </Grid>

            <Grid item xs={12} sm={5}>
                <Box display='flex' flexDirection='column'>

                    {/* titulos */}
                    <Typography variant='h1' component='h1'>{product.title}</Typography>
                    <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>

                    {/* Cantidad */}
                    <Box sx={{my: 2}}>
                        <Typography variant='subtitle2'>Cantidad</Typography>
                        {/*<ItemCounter />*/}
                    </Box>


                    {/* Agregar al carrito */}
                    <Button color="secondary" variant="contained">
                        Agregar al carrito
                    </Button>

                    {/* <Chip label="No hay disponibles" color="error" variant='outlined' /> */}

                    {/* Descripción */}
                    <Box sx={{mt: 3}}>
                        <Typography variant='subtitle2'>Descripción</Typography>
                        <Typography variant='body2'>{product.description}</Typography>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    )
}

export default Product