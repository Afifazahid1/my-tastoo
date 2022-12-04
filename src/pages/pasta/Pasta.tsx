import { Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, IconButton, Stack } from "@mui/material";
import { request } from "https";
import React from "react";
import { Container } from "../../common/components/container/Container";
import "./Pasta.css";
export const Pasta = () => {
  return (
    <Container>
      <div>
        <h2> Shahzaib Pasta </h2>
      </div>

      <div>
      <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Card className="pasta1" sx={{ maxWidth: 345 }}>
              
              <CardMedia 
                className="card1img"
                component="img"
                // height="150vh"
                image="pasta1.jpg"
                alt="Pasta1"
              />
              
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
        
                </IconButton>
                <Button variant="contained">Add to Cart</Button>
                
              </CardActions>
              
            </Card>
          </Stack>
          </Stack>
         
          <Stack>
            <Card className="pasta1" sx={{ maxWidth: 345 }}>
              
              <CardMedia 
                className="card1img"
                component="img"
                // height="150vh"
                image="pasta2.jpg"
                alt="Pasta1"
              />
              
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
        
                </IconButton>
                <Button variant="contained">Add to Cart</Button>
                
              </CardActions>
              <Collapse timeout="auto" unmountOnExit>
                
              </Collapse>
            </Card>
          </Stack>
          <Stack>
            <Card className="pasta1" sx={{ maxWidth: 345 }}>
              
              <CardMedia 
                className="card1img"
                component="img"
                // height="150vh"
                image="pasta3.jpg"
                alt="Pasta1"
              />
              
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
        
                </IconButton>
                <Button variant="contained">Add to Cart</Button>
                
              </CardActions>
              
            </Card>
          </Stack>
        
        
      </div>
    </Container>
  );
};
