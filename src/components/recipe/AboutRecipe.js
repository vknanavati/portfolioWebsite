import {Container, Typography, List, ListItem} from '@mui/material';
import Grid from '@mui/material/Grid2';

export function AboutRecipe() {

    return (
    <Container sx={{ paddingTop: '128px' }}>
        <Grid container justifyContent={"center"} direction={"column"} alignItems={"center"}>

            <Grid item sx={{marginTop: 4, marginBottom: 3}}>
                <Typography
                variant="h4"
                sx={{
                    textShadow: '0 0 20px #00FFFF, 0 0 20px #00FFFF, 0 0 10px #00FFFF',
                    fontFamily: "'Tilt Neon', sans-serif",
                    fontSize: 40,
                    color: '#AEFFFF',
                    fontWeight: 800,
                }}
                >
                    How to Use
                </Typography>
            </Grid>

            <Grid item sx={{ textAlign: "left", backgroundColor: "white", padding: 2,}}>
                <Typography variant="body1" fontSize={21}
                >
                    After clicking on the cusine type of your choice, recipe cards will appear.</Typography>
            </Grid>

            <Grid item sx={{ textAlign: "left", backgroundColor: "white", marginBottom: 2, padding: 2}}>
                <Typography variant="body1" fontSize={21}
                >
                    Each recipe card contains:
                    <List sx={{ listStyleType: "disc", listStylePosition: "inside"}}>
                        <ListItem sx={{ display: "list-item" }}>
                            Heart icon: adds the recipe card to the Favorites page
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            Make Recipe button: adds card to Recipes page
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                            Full Recipe link: opens external link to recipe's original website
                        </ListItem>
                    </List>
                </Typography>
            </Grid>

            <Grid
                component="img"
                alt="recipe-card"
                src={`${process.env.PUBLIC_URL}/icons/recipeCard.png`}
                sx={{maxWidth: 370}}
            />

            <Grid item sx={{marginTop: 4, padding: 2, backgroundColor: "white"}}>
                <Typography variant="h5">Make Recipe</Typography>
            </Grid>
            <Grid item sx={{ textAlign: "left", marginBottom: 2, padding: 2, backgroundColor: "white" }}>
                <Typography variant="body1" fontSize={21}
                >
                    Clicking 'Make Recipe' will store the card in the 'Recipes' page. Here you can create a grocery list
                    and add notes. Saving the note will add it under the grocery list items as a bullet point.
                    Grocery items can be removed from the list by clicking on the "remove circle icon" on the recipe card.
                    This same icon will appear next to notes added to the grocery list.
                </Typography>
            </Grid>
            <Grid
                component="img"
                alt="make-recipe-page"
                src={`${process.env.PUBLIC_URL}/icons/makeRecipePage.png`}
                sx={{maxWidth: 1000}}
            />
        </Grid>
    </Container>
    )
}