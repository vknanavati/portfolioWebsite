import Grid from '@mui/material/Grid2';
import {RecipeCard} from './RecipeCard'
import {Container,Typography} from '@mui/material';

export function Favorites ({favorites, addFavorite, addMakeRecipe}) {
    return (
        <Container sx={{paddingTop: '64px'}}>
            <Grid container justifyContent={"center"} direction={"column"} alignItems={"center"}>
                <Grid>
                    <Typography
                        variant="h4"
                        sx={{marginTop: 11, marginBottom:2}}
                    >
                        Favorite Recipes
                    </Typography>
                </Grid>
                {favorites.length > 0 && (
                    <Grid container justifyContent={"center"}>
                        {favorites.map((recipe,index) => (
                            <RecipeCard
                                key={index}
                                recipe={recipe}
                                addFavorite={addFavorite}
                                favorites={favorites}
                                addMakeRecipe={addMakeRecipe}
                            />
                        ))}
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}