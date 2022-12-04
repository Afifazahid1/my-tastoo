import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  TableRow,
  Button,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { Banner } from "../../common/components/Banner/Banner";
import { Container } from "../../common/components/container/Container";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { Pizza } from "../pizza/Pizza";
import { Stack } from "@mui/system";
import "./Home.css";
export const Home = () => {
  return (
    <Container>
      <Banner />
      <div>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Card className="card1" sx={{ maxWidth: 345 }}>
              
              <CardMedia 
                className="card1img"
                component="img"
                height="150vh"
                image="./image1.jpg"
                alt="Pizza"
              />
              
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Button variant="contained">Add to Cart</Button>
                
              </CardActions>
              <Collapse timeout="auto" unmountOnExit>
                <CardContent>
                  
                
                </CardContent>
              </Collapse>
            </Card>
          </Stack>
          <Stack>
            <Card className="card2" sx={{ maxWidth: 345 }}>
              
              <CardMedia className="img1"
                component="img"
                height="194"
                image="./home1.jpg"
                alt="Paella dish"
              />
              
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Button variant="contained">Add to Cart</Button>
             
  
              </CardActions>
              
            </Card>
          </Stack>
          <Stack>
            <Card className="card3" sx={{ maxWidth: 345 }}>
              
              <CardMedia
                className="home2"
                component="img"
                height="194"
                image="./home2.jpg"
                alt="Paella dish"
              />
              <CardContent>
                
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Button variant="contained">Add to Cart</Button>
              </CardActions>
              <Collapse timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  
                  <Typography paragraph>Finger licking Burger</Typography>
                  
                  <Button variant="contained">Contained</Button>
                </CardContent>
              </Collapse>
            </Card>
          </Stack>
        </Stack>
      </div>
    </Container>
  );
};

