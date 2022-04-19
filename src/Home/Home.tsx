import { RouteComponentProps } from "@reach/router";
import Typography from "@material-ui/core/Typography";
import { Delete } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { getGamesList } from "./home.api";
import { Game } from "../Common/types";
import { IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Paper } from "@material-ui/core";

interface HomeProps extends RouteComponentProps {
}

const Home: React.FC<HomeProps> = ({}) => {
    const [games, setGames] = useState<Game[] | null>(null);

    useEffect(() => {
        const fetchGamsList = async () => {
            const gamesList = await getGamesList();
            setGames(gamesList);
        }
        fetchGamsList();
    }, [])
    return (<>
        <Typography variant="h5">Games</Typography>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games && games.map(game => (
                        <TableRow key={game.id}>
                            <TableCell>
                                {game.id}
                            </TableCell>
                            <TableCell>
                                {game.name}
                            </TableCell>
                            <TableCell>
                                {game.price}
                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="delete" disabled color="primary"><Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </> );
}

export default Home